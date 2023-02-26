import React from "react";
import { Box, Typography } from "@mui/material";

export type Props = {
  subTitle: string;
};

const CommonSubtitle = ({ subTitle }: Props) => {
  return (
    <Box>
      <Typography
        variant="body1"
        sx={{ marginBottom: "15px", textAlign: "center" }}
        color="black"
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default CommonSubtitle;
