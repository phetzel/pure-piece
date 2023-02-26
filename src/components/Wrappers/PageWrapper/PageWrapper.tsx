import React from "react";
import { Container, Grid } from "@mui/material";

interface Props {
  children: JSX.Element;
}

const PageWrapper = ({ children }: Props) => {
  return (
    <Container
      sx={{
        padding: "86px 0px 10px 0px",
        minHeight: "calc(100vh)",
      }}
      maxWidth="lg"
    >
      {children}
    </Container>
  );
};

export default PageWrapper;
