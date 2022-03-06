import React, { useState } from "react";
import { Header, SideDrawer } from "src/common/components";

// type IProps = React.ComponentProps<typeof Header> &
//   React.ComponentProps<typeof SideDrawer> & {};
interface IProps {}

const HeaderAndDrawer: React.FC<IProps> = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <>
      <Header onHamburgIconClick={() => setDrawerOpen(true)} />
      <SideDrawer
        open={drawerOpen}
        onDrawerToggle={() => setDrawerOpen(false)}
      />
    </>
  );
};

export default HeaderAndDrawer;
