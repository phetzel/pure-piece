import React from "react";
import { Box, Typography } from "@mui/material";

import dividerStyles from "./styles/dividerStyles";

export type Props = {
  image: string;
  isVisible: boolean;
  title: string;
  subTitle: string;
};

const CommonDivider = ({ image, isVisible, title, subTitle }: Props) => {
  const imageZIndex = isVisible ? -1 : -2;
  return (
    <Box sx={dividerStyles.pallarax}>
      <Box
        component="img"
        alt={"background"}
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
      <Box sx={dividerStyles.textContainer}>
        <Box sx={dividerStyles.headerContainer}>
          <Typography variant="h2" color="secondary" sx={dividerStyles.header}>
            {title}
          </Typography>
        </Box>

        <Box sx={dividerStyles.subheaderContainer}>
          <Typography variant="h6" color="#fff" sx={dividerStyles.header}>
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CommonDivider;
