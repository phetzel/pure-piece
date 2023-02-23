import React, { useState } from "react";
import { useDispatch } from "react-redux";
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

import { toggleLoading } from "../../redux/slices/navigationSlice";
import { adminLoggedIn } from "../../redux/slices/adminSlice";
import { handleLogin } from "../../services/userServices";
import { isValidEmail } from "../../util/utilFunctions";
import useAppNavigation from "../../hooks/useAppNavigation";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import adminStyles from "./styles/adminStyles";

interface Props {}

const Admin = ({}: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formErr, setFormErr] = useState<string>("");
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);

  const dispatch = useDispatch();
  const appNavigate = useAppNavigation();

  const handleSubmit = () => {
    setFormErr("");

    const validForm = handleValidate();

    if (validForm) {
      setIsFormDisabled(true);
      dispatch(toggleLoading(true));

      handleLogin({
        email: email,
        password: password,
      })
        .then((res) => {
          setIsFormDisabled(false);
          dispatch(toggleLoading(false));

          if (res.code === 200) {
            dispatch(adminLoggedIn(res.data));
            appNavigate("Console");
          } else if (typeof res === "string") {
            setFormErr(res);
          } else {
            setFormErr("Unsuccessful login request");
          }
        })
        .catch((err) => {
          setIsFormDisabled(false);
          dispatch(toggleLoading(false));
          setFormErr("Unsuccessful login request");
        });
    }
  };

  const handleValidate = () => {
    if (!email || !isValidEmail(email)) {
      setFormErr("Enter valid email");
      return false;
    } else if (!password) {
      setFormErr("Enter valid password");
      return false;
    }

    return true;
  };

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
              id="adminEmail"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="adminPasword"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {formErr && (
              <Typography variant="body2" color="error">
                {formErr}
              </Typography>
            )}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
              disabled={isFormDisabled}
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
