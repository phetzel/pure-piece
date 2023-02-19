import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Toolbar,
  Paper,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#212121", p: 6 }} component="footer">
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" color="text.primary">
            Contact
          </Typography>
          <Link rel="noopener">Email</Link>
          <Link rel="noopener">Subscribe to mailing list</Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="h6">Follow Us</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
