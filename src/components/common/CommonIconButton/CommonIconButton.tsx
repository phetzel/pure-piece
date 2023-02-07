import React from "react";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { SxProps } from "@mui/system";

interface Props {
  badgeContent?: number;
  children: JSX.Element;
  onClick: () => void;
  sx?: SxProps;
  title?: string;
}

const CommonIconButton = ({
  badgeContent,
  children,
  onClick,
  sx,
  title,
}: Props) => {
  return (
    <Tooltip title={title} sx={sx}>
      <IconButton color={"white"} onClick={onClick}>
        <Badge badgeContent={badgeContent} color="error">
          {children}
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default CommonIconButton;
