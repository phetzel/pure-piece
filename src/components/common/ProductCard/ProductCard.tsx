import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { ProductType } from "../../../types/productTypes";

interface Props {
  product: ProductType;
  onClick: () => void;
}

const ProductCard = ({ onClick, product }: Props) => {
  return (
    <Card onClick={onClick} sx={{ paddingTop: "16px", width: "300px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={product.imageUrl}
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
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
