import { Box, IconButton } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import React from "react";
import Text from "./text";
import logo from "src/assets/hospital1.png";

const FooterV2: React.FC = () => {
  return (
    <Box className="bg-[#282C34] relative p-4 w-screen h-[70vh] flex-col flex gap-10 justify-start items-center">
      <Box className="flex gap-10">
        <img height="70" width="70" src={logo} alt="logo" />
        <Text className="text-white" variant={"h3"}>
          ASPR Hospital
        </Text>
      </Box>

      <Box className="flex w-full justify-evenly my-10 items-center flex-wrap ">
        <Box className="text-center flex flex-col gap-2">
          <Text variant={"h5"} className="text-white">
            Our Doctors
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            Dr. Indira Hinduja
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            Dr. Jayashree Mondkar
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            Dr. Anandabai Joshi
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            Dr. Ramakanth Panda
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            Dr. Kamini Rao
          </Text>
        </Box>
        <Box className="text-center flex flex-col gap-2">
          <Text variant={"h5"} className="text-white">
            Our Expertise
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            Cancer
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            Dengue
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            Diabetes
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            Corona
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            Heart surgery
          </Text>
        </Box>
        <Box className="text-center flex flex-col gap-2">
          <Text variant={"h5"} className="text-white">
            Facility
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            IPD & OPD Ward
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            ICU
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            Operation Theater
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            Multi floor wards
          </Text>
          <Text
            variant={"caption"}
            className="text-white hover:text-gray-300 hover:underline"
          >
            Advance Equipments
          </Text>
        </Box>
      </Box>

      <Box className="my-10 absolute bottom-0 justify-evenly items-center flex w-96">
        <IconButton href="https://www.facebook.com/">
          <Facebook className="text-blue-500" />
        </IconButton>
        <IconButton href="https://www.instagram.com/?hl=en">
          <Instagram className="text-red-500" />
        </IconButton>
        <IconButton href="https://twitter.com/login">
          <Twitter className="text-blue-300" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FooterV2;
