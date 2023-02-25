import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export type Props = {};

const ConsoleProductForm = ({}: Props) => {
  const [name, setName] = useState<string>("");
  const [active, setActive] = useState<boolean>(true);
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const handleAddProduct = () => {};

  return (
    <Box>
      <Container
        component="main"
        maxWidth="sm"
        sx={{ mb: 4 }}
        id="checkoutPage"
      >
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h6" color="black" align="center">
            Add a new product
          </Typography>
          <TextField
            required
            id="productName"
            name="productName"
            label="Product name"
            fullWidth
            variant="standard"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setName(event.target.value);
            }}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Active"
            //   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            //     setActive(event.target.value);
            //   }}
          />
          <TextField
            required
            id="productDescription"
            name="productDescription"
            label="Product description"
            fullWidth
            // variant="standard"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(event.target.value);
            }}
            minRows={4}
            multiline
          />

          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: "12px",
            }}
            onClick={handleAddProduct}
          >
            Add
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default ConsoleProductForm;
