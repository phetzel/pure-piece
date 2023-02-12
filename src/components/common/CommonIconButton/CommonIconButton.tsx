import React from "react";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { SxProps } from "@mui/system";

interface Props {
  badgeContent?: number;
  children: JSX.Element;
  onClick: () => void;
  iconColor?:
    | "inherit"
    | "white"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  sx?: SxProps;
  title?: string;
}

const CommonIconButton = ({
  badgeContent,
  children,
  onClick,
  iconColor,
  sx,
  title,
}: Props) => {
  return (
    <Tooltip title={title} sx={sx}>
      <IconButton color={iconColor ? iconColor : "white"} onClick={onClick}>
        <Badge badgeContent={badgeContent} color="error">
          {children}
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default CommonIconButton;
