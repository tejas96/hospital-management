import { Box } from "@material-ui/core";
import {
  Button,
  Footer,
  HeaderAndDrawer,
  Input,
  Modal,
} from "src/common/components";
import React, { useState } from "react";
import useIpdOpdContainer from "src/pages/ipd-opd/container";
import BookAppointment from "src/pages/ipd-opd/bookAppointment";
interface IProps {}
const IPD_OPD: React.FC<IProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    phoneNumber,
    setPhoneNumber,
    handlePhoneNumberSubmit,
    openAppointmentBooking,
    handleBookAppointmentChange,
    handleBackButton,
    fetchPatientByPhoneNumberState,
  } = useIpdOpdContainer();
  return (
    <>
      <HeaderAndDrawer />
      <Box className="min-w-full min-h-screen">
        <Box className="flex justify-end items-center my-2 p-2">
          <Button onClick={() => setOpen(true)} label="Book Appointment" />
        </Box>
        <Modal onClose={() => setOpen(false)} open={open}>
          <Box className="bg-white relative md:w-[50%] w-[40%] sm:w-[90%] min-h-[50%] p-5 flex flex-col justify-center items-center">
            {openAppointmentBooking.show && (
              <Button
                onClick={handleBackButton}
                label="Back"
                style={{ position: "absolute", top: 10, left: 10 }}
              />
            )}
            {!openAppointmentBooking.show && (
              <Box className="flex justify-center flex-col min-w-[300px] items-center">
                <Input
                  value={phoneNumber.phoneNumber}
                  onChange={({ target: { value } }) =>
                    setPhoneNumber({ phoneNumber: value, error: "" })
                  }
                  type="number"
                  label="Mobile number"
                  error={phoneNumber.error ? true : false}
                  helperText={phoneNumber.error}
                />
                <Button
                  onClick={handlePhoneNumberSubmit}
                  style={{ marginTop: "5px" }}
                  label="Submit"
                  loading={fetchPatientByPhoneNumberState.loading}
                />
              </Box>
            )}
            <BookAppointment
              onChange={handleBookAppointmentChange}
              show={openAppointmentBooking.show}
              data={openAppointmentBooking.patient}
              phoneNumber={phoneNumber.phoneNumber}
              isPatientRegistered={openAppointmentBooking.isPatientRegistered}
            />
          </Box>
        </Modal>
      </Box>
      <Footer />
    </>
  );
};

export default IPD_OPD;
