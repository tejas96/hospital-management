import React from "react";
import TextField from "@mui/material/TextField";

type MyInput = React.ComponentProps<typeof TextField> & {};

const Input: React.FC<MyInput> = ({
  variant = "outlined",
  label = "",
  type = "text",
  value = "",
  onChange = () => {},
  onBlur = () => {},
  error = false,
  ...props
}) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      {...props}
    />
  );
};

export default Input;
