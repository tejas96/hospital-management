import { AppBar, Box, IconButton, Toolbar } from "@material-ui/core";
import { Menu, ExitToApp } from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from ".";
interface IProps {
  onHamburgIconClick?: () => void;
}

const Header: React.FC<IProps> = ({ onHamburgIconClick }) => {
  const navigation = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="bg-background">
          <IconButton color="secondary" edge="start">
            <Menu onClick={onHamburgIconClick} />
          </IconButton>
          <Box className="justify-end flex items-center" sx={{ flexGrow: 1 }}>
            <Text
              onClick={() => navigation("/about")}
              className="px-5 text-primary cursor-pointer"
            >
              About
            </Text>
            <Text
              onClick={() => navigation("/contact-us")}
              className="px-5 text-primary cursor-pointer"
            >
              Contact Us
            </Text>
            <IconButton>
              <ExitToApp className="text-primary font-bold" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
