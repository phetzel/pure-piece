import React from "react";
import { Box, Typography } from "@mui/material";

export type Props = {
  image: string;
  title: string;
};

const CommonDivider = ({ image, title }: Props) => {
  const pallaraxStyle = {
    backgroundImage: `url(${image})`,
    height: "200px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    display: "flex",
    paddingLeft: "40px",
    alignItems: "center",

    marginBottom: "10px",
  };
  return (
    <Box sx={pallaraxStyle}>
      <Typography variant="h2" color="secondary">
        {title}
      </Typography>
    </Box>
  );
};

export default CommonDivider;
