import { ReactNode } from "react";
import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from "@mui/material/IconButton";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

export type IconButtonProps = MuiIconButtonProps & {
  children?: ReactNode;
  title?: ReactNode;
  tooltipProps?: Omit<TooltipProps, "title">;
};

const IconButton: React.FC<IconButtonProps> = ({ tooltipProps, title, children, ...rest }) => {
  if (title) {
    return (
      <Tooltip title={title} {...tooltipProps} disableInteractive>
        <span>
          <MuiIconButton {...rest}>{children}</MuiIconButton>
        </span>
      </Tooltip>
    );
  } else {
    return <MuiIconButton {...rest}>{children}</MuiIconButton>;
  }
};

export default IconButton;
