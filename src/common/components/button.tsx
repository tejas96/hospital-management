import { alpha, Button } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import * as React from "react";

const MButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.dark, 0.8),
  },
}));
type IProps = React.ComponentProps<typeof Button> & {
  label: string;
};

const BasicButtons: React.FC<IProps> = ({ label = "", ...props }) => {
  return (
    <MButton variant="contained" {...props}>
      {label}
    </MButton>
  );
};

export default BasicButtons;
