import React from "react";
import { Typography } from "@mui/material";

type IProps = React.ComponentProps<typeof Typography> & {};

const Text: React.FC<IProps> = ({
  variant = "body1",
  align = "center",
  children,
  ...props
}) => {
  return (
    <Typography align={align} variant={variant} component="span" {...props}>
      {children}
    </Typography>
  );
};

export default Text;
