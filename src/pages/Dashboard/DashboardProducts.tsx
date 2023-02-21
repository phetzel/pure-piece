import React, { useState } from "react";
import { Box, Grid, Snackbar, Typography } from "@mui/material";

// constants
import { PRODUCTS } from "../../constants/productConstants";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import ProductModal from "../../components/Modals/ProductModal/ProductModal";
import dashboardStyles from "./styles/dashboardStyles";
import { ProductType } from "../../types/productTypes";

interface Props {}

const DashboardProducts = ({}: Props) => {
  const [focusedProduct, setFocusedProduct] = useState<ProductType>();
  const [addedProductCount, setAddedProductCount] = useState<number>(0);

  return (
    <Box sx={dashboardStyles.section} id="dashboardProduct">
      <ProductModal
        isOpen={focusedProduct ? true : false}
        handleClose={() => setFocusedProduct(undefined)}
        product={focusedProduct}
        setAddedProductCount={setAddedProductCount}
      />
      <Snackbar
        open={addedProductCount > 0 ? true : false}
        onClose={() => setAddedProductCount(0)}
        message={`${addedProductCount} product${
          addedProductCount > 1 ? "s" : ""
        } added to cart`}
        key={"productSnackbar"}
      />

      <Grid item xs={12}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Products
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "15px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere
          ligula ut consequat fringilla. Vivamus cursus pulvinar sapien et
          malesuada. Ut vel dui nec orci.
        </Typography>

        <Grid container spacing={2}>
          {PRODUCTS.map((product, idx) => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ProductCard
                product={product}
                onClick={() => setFocusedProduct(product)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardProducts;
