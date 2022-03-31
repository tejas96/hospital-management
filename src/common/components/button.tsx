import { alpha, Button, CircularProgress } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import * as React from "react";

const MButton = styled(Button)(({ theme, color }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.dark, 0.8),
  },
}));
type IProps = React.ComponentProps<typeof Button> & {
  label: string;
  loading?: boolean;
};

const BasicButtons: React.FC<IProps> = ({
  label = "",
  loading = false,
  ...props
}) => {
  return (
    <MButton
      {...(loading
        ? {
            startIcon: (
              <CircularProgress style={{ color: "white" }} size={15} />
            ),
          }
        : {})}
      variant="contained"
      {...props}
    >
      {label}
    </MButton>
  );
};

export default BasicButtons;
