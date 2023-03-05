import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Container, Grid } from "@mui/material";

import treats2 from "../../assets/images/treats2.png";
import { toggleLoading } from "../../redux/slices/navigationSlice";
import CommonTitle from "../../components/common/CommonTitle/CommonTitle";
import CommonSubtitle from "../../components/common/CommonSubtitle/CommonSubtitle";
import CommonDivider from "../../components/common/CommonDivider/CommonDivider";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductModal from "../../components/Modals/ProductModal/ProductModal";
import dashboardStyles from "./styles/dashboardStyles";
import { ProductType } from "../../types/productTypes";
import { getProducts } from "../../services/productServices";

interface Props {
  isVisible: boolean;
  products: ProductType[];
  productRef: (node?: Element | null | undefined) => void;
}

const DashboardProducts = ({ isVisible, products, productRef }: Props) => {
  const [focusedProduct, setFocusedProduct] = useState<ProductType>();

  return (
    <Box sx={{ width: "100%" }} id="dashboardProduct" ref={productRef}>
      <CommonDivider
        image={treats2}
        title={"Products"}
        isVisible={isVisible}
        subTitle={
          "Single ingredient snack for training and rewarding your loyal companion."
        }
      />

      <Container sx={dashboardStyles.section} maxWidth={false}>
        {/* product modal */}
        <ProductModal
          isOpen={focusedProduct ? true : false}
          handleClose={() => setFocusedProduct(undefined)}
          product={focusedProduct}
        />

        {/* title */}
        {/* <CommonSubtitle subTitle="Single ingredient snack for training and rewarding your loyal companion." /> */}

        {/* product list */}
        <Grid container spacing={2}>
          {products.map((product) => (
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
    </Box>
  );
};

export default DashboardProducts;
