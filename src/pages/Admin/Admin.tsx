import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// import { handleLogin, handleRegister } from "../../services/userServices";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import adminStyles from "./styles/adminStyles";

interface Props {}

const Admin = ({}: Props) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  //   const _email: string = `${data.get("email")}`;
  //   const _password: string = `${data.get("password")}`;

  //   console.log(typeof _email);
  //   handleLogin({
  //     email: _email,
  //     password: _password,
  //   });
  // };

  return (
    <GridWrapper>
      <Container component="main" maxWidth="xs">
        <Box sx={adminStyles.loginContainer}>
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={() => console.log("submit")}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </GridWrapper>
  );
};

export default Admin;
