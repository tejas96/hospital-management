import { Box } from "@material-ui/core";
import { Footer, HeaderAndDrawer } from "src/common/components";
import React from "react";
interface IProps {}
const IPD_OPD: React.FC<IProps> = () => {
  return (
    <>
      <HeaderAndDrawer />
      <Box className="min-w-full min-h-screen"></Box>
      <Footer />
    </>
  );
};

export default IPD_OPD;
