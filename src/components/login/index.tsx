import React from "react";
import { Button, Input, Text } from "src/common/components";
import useLoginContainer from "src/components/login/container";
import { Container, InputContainer } from "src/components/login/style";

const Login: React.FC = () => {
  const { loginState, handleChange, handleSubmit } = useLoginContainer();
  return (
    <Container>
      <form>
        <InputContainer>
          <Text style={{ margin: "10px 0" }} variant="h4">
            Hospital Login
          </Text>
          <Input
            fullWidth
            onChange={handleChange}
            name="hospitalId"
            value={loginState.hospitalId}
            style={{ margin: "10px 0" }}
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
            style={{ margin: "10px 0" }}
            variant="outlined"
            label={"Password"}
          />
          <Button
            onClick={handleSubmit}
            style={{ margin: "10px 0" }}
            label="Login"
          />
        </InputContainer>
      </form>
    </Container>
  );
};

export default Login;
