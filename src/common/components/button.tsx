import { Button, IconButton } from "@material-ui/core";
import { SvgIconComponent } from "@material-ui/icons";
import * as React from "react";

type IProps = React.ComponentProps<typeof Button> &
  React.ComponentProps<typeof IconButton> & {
    label: string;
    iconButton?: boolean;
    iconButtonIcon?: SvgIconComponent;
  };

const BasicButtons: React.FC<IProps> = ({
  label = "",
  iconButton = false,
  iconButtonIcon,
  ...props
}) => {
  if (iconButton) {
    return (
      <IconButton aria-label={label} {...props}>
        {iconButtonIcon}
      </IconButton>
    );
  } else {
    return (
      <Button variant="contained" {...props}>
        {label}
      </Button>
    );
  }
};

export default BasicButtons;
