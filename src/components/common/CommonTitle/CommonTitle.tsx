import React from "react";
import { Box, Typography } from "@mui/material";

import CommonSubtitle from "../CommonSubtitle/CommonSubtitle";

export type Props = {
  subTitle?: string;
  title: string;
};

const CommonTitle = ({ subTitle, title }: Props) => {
  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: "center" }} color="primary">
        {title}
      </Typography>
      {subTitle && <CommonSubtitle subTitle={subTitle} />}
    </Box>
  );
};

export default CommonTitle;
