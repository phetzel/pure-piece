import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

// constants
import { PRODUCTS } from "../../constants/productConstants";
// component
import ProductCard from "../../components/common/ProductCard/ProductCard";

interface Props {}

const DashboardProducts = ({}: Props) => {
  return (
    <Box>
      <Typography variant="h3">Products</Typography>

      <Grid container spacing={2}>
        {PRODUCTS.map((product, idx) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardProducts;
