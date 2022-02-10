import React from "react";
import TextField from "@mui/material/TextField";

type MyInput = React.ComponentProps<typeof TextField> & {};

const Input: React.FC<MyInput> = (props) => {
  const { label, type, value, onChange, onBlur, error, ...rest } = props;

  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      {...rest}
    />
  );
};

export default Input;
