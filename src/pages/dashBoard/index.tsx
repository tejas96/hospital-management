import { Box } from "@material-ui/core";
import React from "react";
import { Footer, HeaderAndDrawer, Text } from "src/common/components";
import Bar from "src/pages/dashBoard/bar";
import Doughnut from "src/pages/dashBoard/doughnut";
const Dashboard = () => {
  return (
    <Box>
      <HeaderAndDrawer />
      <Box className="flex justify-evenly items-center h-screen w-screen flex-wrap overflow-auto">
        <Box className="flex flex-col m-5 w-1/3">
          <Text>Disease diagnosed</Text>
          <Doughnut />
        </Box>
        <Box className="flex flex-col m-5 w-1/3 ">
          <Text>Disease diagnosed</Text>
          <Bar />
        </Box>
        <Box className="flex flex-col m-5 w-1/3 ">
          <Text>Disease diagnosed</Text>
          <Bar />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Dashboard;
