import { Box } from "@mui/material";
import React from "react";
import { Button, Input, Text } from "src/common/components";
import { Container } from "src/components/login/style";
import useLoginContainer from "src/components/login/container";

const Login: React.FC = () => {
  const { loginState, handleChange, handleSubmit } = useLoginContainer();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
        }}
      >
        <Text sx={{ margin: "10px 0" }} variant="h4">
          Hospital Login
        </Text>
        <Input
          fullWidth
          onChange={handleChange}
          name="hospitalId"
          value={loginState.hospitalId}
          sx={{ margin: "10px 0" }}
          variant="outlined"
          label={"Hospital ID"}
        />
        <Input
          fullWidth
          onChange={handleChange}
          name={"password"}
          type={"password"}
          value={loginState.password}
          sx={{ margin: "10px 0" }}
          variant="outlined"
          label={"Password"}
        />
        <Button
          onClick={handleSubmit}
          sx={{ margin: "10px 0" }}
          label="Login"
        />
      </Box>
    </Container>
  );
};

export default Login;
