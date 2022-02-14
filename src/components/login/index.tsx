import { Box } from "@mui/material";
import React from "react";
import { Button, Input, Text } from "src/common/components";
import useLoginContainer from "src/components/login/container";
import { Container } from "src/components/login/style";

const Login: React.FC = () => {
  const { loginState, handleChange, handleSubmit } = useLoginContainer();
  return (
    <Container>
      <form>
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
            autoComplete="on"
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
      </form>
    </Container>
  );
};

export default Login;
