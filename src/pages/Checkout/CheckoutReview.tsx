import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

// types
import { CartItem } from "../../types/productTypes";

interface Props {
  cart: CartItem[];
}

const CheckoutReview = ({ cart }: Props) => {
  return (
    <Box>
      <Typography variant="h6" color="primary" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={product.description}
            />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default CheckoutReview;
