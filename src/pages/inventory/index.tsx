import React, { useState } from "react";
import { Box, Divider } from "@material-ui/core";
import { Button, HeaderAndDrawer, Modal, Text } from "src/common/components";
import BasicTabs from "src/pages/inventory/components/tabWindow";
interface IProps {}

const Inventory: React.FC<IProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <HeaderAndDrawer />
      <Box className="w-full flex justify-between items-center p-5">
        <Text variant="h4">Inventory</Text>
        <Button
          onClick={() => setOpen(true)}
          className="bg-primary"
          label="Create RFP"
        />
      </Box>
      <Divider />
      <Box>
        <BasicTabs></BasicTabs>
        <Modal onClose={() => setOpen(false)} open={open}>
          <Box className="flex flex-col">
            <Box className="w-96 h-96 bg-slate-300"></Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default Inventory;
