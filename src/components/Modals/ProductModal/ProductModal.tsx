import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { RootState } from "../../../redux/store";
import { updateToastState } from "../../../redux/slices/navigationSlice";
import { updateCart } from "../../../redux/slices/productSlice";
import { ProductType, CartItem } from "../../../types/productTypes";
import CommonModal from "../../common/CommonModal/CommonModal";
import { addCheckout } from "../../../services/paymentServices";
import { formatCheckoutItems } from "../../../util/utilFunctions";
import productModalStyles from "./styles/productModalStyles";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  product: ProductType | undefined;
};

const ProductModal = ({ isOpen, handleClose, product }: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  // const appNavigate = useAppNavigation();
  const cartState = useSelector((state: RootState) => state.product.cartState);

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(+event.target.value);
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    product && dispatch(updateCart({ count: quantity, product: product }));
    dispatch(
      updateToastState({
        severity: "success",
        children: `${quantity} product${quantity > 1 ? "s" : ""} added to cart`,
      })
    );
    handleClose();
  };

  const handleCheckout = async () => {
    // handleAddToCart();

    if (product) {
      let items: CartItem[] = [];
      const itemIds = cartState.map((i) => i.priceId);

      if (itemIds.includes(product.priceId)) {
        cartState.forEach((item) => {
          if (item.priceId === product.priceId) {
            const newItem = {
              ...item,
              count: item.count + quantity,
            };
            items.push(newItem);
          } else {
            items.push(item);
          }
        });
      } else {
        items = [...cartState, { ...product, count: quantity }];
      }
      let formattedItems = formatCheckoutItems(items);

      addCheckout(formattedItems);
    }
  };

  return (
    <CommonModal isOpen={isOpen} handleClose={handleClose}>
      <Grid container columnSpacing={2} sx={productModalStyles.container}>
        <Grid item xs={12} md={6} sx={productModalStyles.imageContainer}>
          {product?.images[0] && (
            <Box
              component="img"
              alt={product?.name}
              src={product?.images[0]}
              sx={productModalStyles.image}
            />
          )}
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={productModalStyles.productName}
          >
            {product?.name}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={productModalStyles.quantityContainer}>
              <Typography variant="body1" sx={productModalStyles.quantityText}>
                ${product?.price} *
              </Typography>

              <FormControl
                variant="standard"
                sx={productModalStyles.quantitySelector}
              >
                <InputLabel id="productQuantityLabel">Quantity</InputLabel>
                <Select
                  labelId="productQuantityLabel"
                  id="productQuantity"
                  value={quantity.toString()}
                  onChange={handleChange}
                  label="Quantity"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>

              <Typography variant="body1" sx={productModalStyles.quantityText}>
                = {product?.price ? `$${product.price * quantity}` : ""}
              </Typography>
            </Box>

            <Box sx={productModalStyles.buttonContainer}>
              <Button
                variant="outlined"
                sx={productModalStyles.cartButton}
                color="info"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={productModalStyles.buyButton}
                onClick={handleCheckout}
              >
                Buy Now
              </Button>
            </Box>
          </Box>

          <Typography variant="body1">Description</Typography>
          <Typography variant="body2">
            {product && product.description}
          </Typography>
        </Grid>
      </Grid>
    </CommonModal>
  );
};

export default ProductModal;
