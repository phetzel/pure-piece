import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FilledInput,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import {
  toggleLoading,
  // updateToastState,
} from "../../redux/slices/navigationSlice";

import { addProduct } from "../../services/productServices";
import consoleStyles from "./styles/consoleStyles";

export type Props = {
  setProductTab: () => void;
};

const ConsoleProductForm = ({ setProductTab }: Props) => {
  const [name, setName] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(true);
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    // dispatch(toggleLoading(true));

    addProduct({
      active: isActive,
      name: name,
      description: description,
      price: price,
      image: image,
    })
      .then((res) => {
        setProductTab();
      })
      .catch((err) => console.log("handleAddProduct err", err));
  };

  return (
    <Box>
      <Container
        component="main"
        maxWidth="sm"
        sx={{ mb: 4 }}
        id="checkoutPage"
      >
        <Paper variant="outlined" sx={consoleStyles.formContainer}>
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

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <input
              type="file"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setImage(event.target.value);
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setIsActive(event.target.checked);
                  }}
                />
              }
              label="Active"
            />
            <FormControl sx={{ m: 1 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                onChange={(
                  event: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement
                  >
                ) => {
                  setPrice(+event.target.value);
                }}
                inputProps={{ type: "number" }}
              />
            </FormControl>
          </Box>

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
            sx={consoleStyles.formButton}
            onClick={handleAddProduct}
            disabled // use stripe for now
          >
            Add
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default ConsoleProductForm;
