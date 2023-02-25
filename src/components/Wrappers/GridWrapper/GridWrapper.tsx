import React from "react";
import { Grid } from "@mui/material";

interface Props {
  children: JSX.Element;
}

const GridWrapper = ({ children }: Props) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        padding: "86px 32px 10px 32px",
        minHeight: "calc(100vh)",
      }}
    >
      {children}
    </Grid>
  );
};

export default GridWrapper;
