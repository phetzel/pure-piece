import React, { useState } from "react";
import { Box, Container, Grid, Snackbar, Typography } from "@mui/material";

import CommonTitle from "../../components/common/CommonTitle/CommonTitle";
import { PRODUCTS } from "../../constants/productConstants";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductModal from "../../components/Modals/ProductModal/ProductModal";
import dashboardStyles from "./styles/dashboardStyles";
import { ProductType } from "../../types/productTypes";

interface Props {}

const DashboardProducts = ({}: Props) => {
  const [focusedProduct, setFocusedProduct] = useState<ProductType>();
  const [addedProductCount, setAddedProductCount] = useState<number>(0);

  return (
    <Container sx={dashboardStyles.section} id="dashboardProduct">
      {/* product modal */}
      <ProductModal
        isOpen={focusedProduct ? true : false}
        handleClose={() => setFocusedProduct(undefined)}
        product={focusedProduct}
      />

      {/* title */}
      <CommonTitle
        title={"Products"}
        subTitle={
          "Single ingredient snack for training and rewarding your loyal companion."
        }
      />

      {/* product list */}
      <Grid container spacing={2}>
        {PRODUCTS.map((product) => (
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
    </Container>
  );
};

export default DashboardProducts;
