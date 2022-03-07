import React from "react";
import { Box } from "@material-ui/core";
import { HeaderAndDrawer } from "src/common/components";
interface IProps {}

const Inventory: React.FC<IProps> = () => {
  return (
    <>
      <HeaderAndDrawer />
      <Box></Box>
    </>
  );
};

export default Inventory;
