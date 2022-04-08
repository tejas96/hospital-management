import { Box, Typography } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { Button, Input, Text } from "src/common/components";
import ChatBot from "src/pages/chatBot";
import useLoginContainer from "src/pages/login/container";
import { InputContainer } from "src/pages/login/style";
import "./heartPulse.css";
import hospitalLogo from "src/assets/hospital1.png";

const Login: React.FC = () => {
  const { loginState, handleChange, handleSubmit } = useLoginContainer();
  return (
    <Box className="w-screen h-screen flex justify-center bg-[#f5f5f5] items-center">
      <Box className="h-full bg-primary w-[70%] flex justify-center flex-col items-center">
        <img src={hospitalLogo} alt={"logo"} className="h-[200px] w-[200px]" />
        <Typography className="text-white my-9" variant="h1">
          A.S.P.R HOSPITAL
        </Typography>

        <div className="container">
          <div className="grid">
            <div className="col-10_sm-12">PATIENT ID #1888450</div>
            <div className="col-2_sm-12">
              {moment().format("DD MMM YYYY hh:mm")}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="grid">
            <div className="col-10_sm-12 graph">
              <div className="cell cell-1"></div>
              <div className="cell cell-2"></div>
              <div className="cell cell-3"></div>
              <div className="cell cell-4"></div>
              <div className="cell cell-5"></div>
              <div className="cell cell-6"></div>
            </div>

            <div className="col-2_sm-12">
              <div className="number-1">
                <span>&#9829;</span>
              </div>
            </div>
          </div>
        </div>

        <svg width="0" height="0" className="filters">
          <defs>
            <filter
              id="filter0_dd"
              x="0.858887"
              y="28.9809"
              width="644.262"
              height="124.108"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.215686 0 0 0 0 0.686275 0 0 0 0 0.54902 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.215686 0 0 0 0 0.686275 0 0 0 0 0.54902 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow"
                result="effect2_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Box>
      <Box className="h-full bg-red-300 w-[30%] flex justify-center items-center">
        <form>
          <InputContainer>
            <Text
              className="text-white font-bold"
              style={{ margin: "10px 0" }}
              variant="h4"
            >
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
      </Box>

      <ChatBot />
    </Box>
  );
};

export default Login;
