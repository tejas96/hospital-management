import React, { useCallback, useState } from "react";
import { useApi } from "src/hooks";
import { ApiMethods, Patient } from "src/model";
import produce from "immer";

interface AppointmentBookingState {
  isPatientRegistered: boolean;
  patient: Patient | null;
  error: any;
  show: boolean;
}
const useIpdOpdContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState<{
    phoneNumber: string;
    error: string;
  }>({
    phoneNumber: "",
    error: "",
  });
  const [openAppointmentBooking, setOpenAppointmentBooking] =
    useState<AppointmentBookingState>({
      isPatientRegistered: false,
      patient: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        age: 0,
      },
      error: null,
      show: false,
    });
  const [fetchPatientByPhoneNumber,fetchPatientByPhoneNumberState ] = useApi<Patient>();

  const handlePhoneNumberSubmit = useCallback(() => {
    if (
      !phoneNumber.phoneNumber ||
      !/^[6-9][0-9]{9}$/.test(phoneNumber.phoneNumber)
    ) {
      setPhoneNumber({
        phoneNumber: phoneNumber.phoneNumber,
        error: "Invalid Phone Number",
      });
    } else {
      fetchPatientByPhoneNumber(
        `/ipd-opd/patient/${phoneNumber.phoneNumber}`,
        ApiMethods.GET
      )
        .then((r) => {
          setOpenAppointmentBooking({
            isPatientRegistered: true,
            patient: r.data,
            error: null,
            show: true,
          });
        })
        .catch((err) => {
          setOpenAppointmentBooking({
            isPatientRegistered: false,
            patient: null,
            error: err,
            show: true,
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneNumber]);
  const handleBookAppointmentChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      console.log(name, value);
      setOpenAppointmentBooking(
        produce((draft: AppointmentBookingState) => {
          if (draft.patient) draft.patient[name] = value;
        })
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const handleBackButton = useCallback(() => {
    setOpenAppointmentBooking({
      isPatientRegistered: false,
      patient: null,
      error: null,
      show: false,
    });
  }, []);

  const handleBookAppointmentSubmit = useCallback(() => {}, []);
  return {
    phoneNumber,
    setPhoneNumber,
    handlePhoneNumberSubmit,
    openAppointmentBooking,
    handleBookAppointmentSubmit,
    handleBookAppointmentChange,
    handleBackButton,
    fetchPatientByPhoneNumberState
  };
};

export default useIpdOpdContainer;
