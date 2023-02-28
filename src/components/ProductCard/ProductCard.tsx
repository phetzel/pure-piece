import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { ProductType } from "../../types/productTypes";
import productCardStyles from "./styles/productCardStyles";

interface Props {
  product: ProductType;
  onClick: () => void;
}

const ProductCard = ({ onClick, product }: Props) => {
  return (
    <Card onClick={onClick} sx={productCardStyles.cardContainer}>
      <CardActionArea sx={productCardStyles.cardAction}>
        <CardMedia
          component="img"
          height="280"
          image={product.images[0]}
          alt={product.name}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="text.primary"
          >
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
