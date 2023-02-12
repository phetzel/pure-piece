import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";

import { updateCart } from "../../../redux/slices/productSlice";
import { ProductType } from "../../../types/productTypes";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  product: ProductType | undefined;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductModal = ({ isOpen, handleClose, product }: Props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    product && dispatch(updateCart({ count: 1, product: product }));
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              alt={product?.name}
              src={product?.imageUrl}
              sx={{
                objectFit: "cover",
                height: "300px",
                maxWidth: "100%",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {product?.name}
            </Typography>

            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography variant="body1">${product?.price}</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  fontSize: "12px",
                }}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                sx={{
                  fontSize: "12px",
                }}
                color="secondary"
              >
                Buy Now
              </Button>
            </Box>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {product && product.description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ProductModal;
