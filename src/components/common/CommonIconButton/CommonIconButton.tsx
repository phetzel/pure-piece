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
    | "black"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  sx?: SxProps;
  size?: "small" | "medium" | "large";
  title?: string;
}

const CommonIconButton = ({
  badgeContent,
  children,
  onClick,
  iconColor,
  sx,
  size,
  title,
}: Props) => {
  return (
    <Tooltip title={title} sx={sx}>
      <IconButton
        color={iconColor ? iconColor : "white"}
        onClick={onClick}
        size={size}
      >
        <Badge badgeContent={badgeContent} color="error">
          {children}
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default CommonIconButton;
