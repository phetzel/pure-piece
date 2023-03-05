import React from "react";
import { Box, Typography } from "@mui/material";

export type Props = {
  image: string;
  isVisible: boolean;
  title: string;
  subTitle: string;
};

const CommonDivider = ({ image, isVisible, title, subTitle }: Props) => {
  const pallaraxStyle = {
    height: "90vh",
  };
  return (
    <Box sx={pallaraxStyle}>
      <Box
        component="img"
        alt={"Logo"}
        src={image}
        sx={{
          objectFit: "cover",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          bottom: 0,
          zIndex: isVisible ? -1 : -2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "100%",
          textAlign: "center",
        }}
      >
        <Box sx={{ position: "sticky", top: 80, paddingBottom: "25px" }}>
          <Typography
            variant="h2"
            color="secondary"
            sx={{ fontWeight: "bold" }}
          >
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            position: "sticky",
            top: 140,
            paddingBottom: "10px",
          }}
        >
          <Typography variant="h6" color="#fff" sx={{ fontWeight: "bold" }}>
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CommonDivider;
