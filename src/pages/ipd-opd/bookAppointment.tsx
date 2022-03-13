import { Box } from "@material-ui/core";
import React from "react";
import { Button, Input, Text } from "src/common/components";
import { Patient } from "src/model";
interface IProps {
  show: boolean;
  data: Patient | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  phoneNumber: string;
  isPatientRegistered: boolean;
}
const BookAppointment: React.FC<IProps> = ({
  data,
  onChange,
  phoneNumber,
  show = false,
  isPatientRegistered = false,
}) => {
  return (
    <>
      {" "}
      {show && (
        <Box className="flex flex-col justify-center items-center">
          <Text variant="h5">Book Appointment</Text>
          <Box className="my-2 w-full">
            <Input
              className="w-[300px]"
              value={data?.firstName}
              onChange={onChange}
              label="First name"
              name="firstName"
            />
          </Box>
          <Box className="my-2 w-full">
            <Input
              className="w-[300px]"
              value={data?.lastName}
              onChange={onChange}
              label="Last name"
              name="lastName"
            />
          </Box>
          <Box className="my-2 w-full">
            <Input
              className="w-[300px]"
              value={data?.age}
              onChange={onChange}
              label="Age"
              name="age"
              type={"number"}
            />
          </Box>
          <Box className="my-2 w-full">
            <Input
              className="w-[300px]"
              value={data?.phoneNumber || phoneNumber}
              onChange={onChange}
              type="number"
              label="Phone number"
              name="phoneNumber"
            />
          </Box>
          <Button label={isPatientRegistered ? "Book" : "Register & Book"} />
        </Box>
      )}
    </>
  );
};

export default BookAppointment;
