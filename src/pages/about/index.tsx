import { Avatar, Box, Divider } from "@material-ui/core";
import React from "react";
import { HeaderAndDrawer, Text } from "src/common/components";
interface IProps {}

const About: React.FC<IProps> = () => {
  return (
    <>
      <HeaderAndDrawer />
      <Box className="w-full min-h-screen h-auto flex-col flex justify-center items-center">
        <Text variant="h1">ASPR Hospital</Text>
        <Divider light className="w-96" style={{ margin: "10px 0" }} />
        <Text variant="caption" className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          tempore cum? Aliquid sunt ex earum et alias, quasi recusandae
          architecto assumenda. Repudiandae fuga qui incidunt exercitationem ab
          a blanditiis cupiditate!
        </Text>
        <Box className="mt-15 flex-wrap flex w-full justify-center items-center h-auto">
          <Box className="p-5 mt-5 flex flex-col mx-10 justify-center w-60 items-center relative">
            <Box className="w-32 h-32 absolute blur-[100px] z-0 bg-primary"></Box>
            <Avatar
              style={{ height: "100px", width: "100px" }}
              alt="Remy Sharp"
              src="https://www.kindpng.com/picc/m/491-4915342_smiling-doctor-facial-hd-png-download.png"
            />
            <Text variant="subtitle1">Dr. Abc</Text>
            <Text variant="caption">Cancer specialist</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
