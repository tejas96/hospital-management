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
import RegisterPatient from "src/pages/ipd-opd/registerPatient";
import BookAppointment from "src/pages/ipd-opd/bookAppointment";
import AppointmentBookingList from "src/pages/ipd-opd/appointmentBookedList";

interface IProps {}
const IPD_OPD: React.FC<IProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    phoneNumber,
    setPhoneNumber,
    handlePhoneNumberSubmit,
    patientRegistrationData,
    handlePatientRegisteredChanges,
    handleBackButton,
    fetchPatientByPhoneNumberState,
    handlePatientRegisterSubmit,
    screen,
  } = useIpdOpdContainer();
  return (
    <>
      <HeaderAndDrawer />
      <Box className="min-w-full min-h-screen flex flex-col">
        <Box className="flex justify-end items-center my-2 p-2">
          <Button onClick={() => setOpen(true)} label="Book Appointment" />
        </Box>
        <AppointmentBookingList />
        <Modal onClose={() => setOpen(false)} open={open}>
          <Box className="bg-white relative md:w-[50%] w-[40%] sm:w-[90%] min-h-[50%] p-5 flex flex-col justify-center items-center">
            {(screen.patientAppointmentScreen ||
              screen.patientRegisterScreen) && (
              <Button
                onClick={handleBackButton}
                label="Back"
                style={{ position: "absolute", top: 10, left: 10 }}
              />
            )}
            {screen.patientExistScreen && (
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
            {screen.patientRegisterScreen && (
              <RegisterPatient
                onRegisterClick={handlePatientRegisterSubmit}
                onChange={handlePatientRegisteredChanges}
                data={patientRegistrationData.patient}
                phoneNumber={phoneNumber.phoneNumber}
              />
            )}
            {screen.patientAppointmentScreen && (
              <BookAppointment patientData={patientRegistrationData.patient} />
            )}
          </Box>
        </Modal>
      </Box>
      <Footer />
    </>
  );
};

export default IPD_OPD;
