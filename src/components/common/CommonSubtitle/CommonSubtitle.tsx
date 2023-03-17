import React from "react";
import { Box, Typography } from "@mui/material";

import commonSubtitleStyle from "./styles/commonSubtitleStyles";

export type Props = {
  subTitle: string;
};

const CommonSubtitle = ({ subTitle }: Props) => {
  return (
    <Box>
      <Typography
        variant="body1"
        sx={commonSubtitleStyle.subtitle}
        color="black"
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default CommonSubtitle;
