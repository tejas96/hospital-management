import React, { useCallback, useState } from "react";
import { useApi } from "src/hooks";
import { ApiMethods, Patient } from "src/model";
import produce from "immer";
import toast from "react-hot-toast";

interface AppointmentBookingState {
  patient: Patient | null;
  error: any;
}
const useIpdOpdContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState<{
    phoneNumber: string;
    error: string;
  }>({
    phoneNumber: "",
    error: "",
  });

  const [screen, setScreen] = useState({
    patientExistScreen: true,
    patientRegisterScreen: false,
    patientAppointmentScreen: false,
  });
  const [patientRegistrationData, setPatientRegistrationData] =
    useState<AppointmentBookingState>({
      patient: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        age: 0,
      },
      error: null,
    });
  const [fetchPatientByPhoneNumber, fetchPatientByPhoneNumberState] =
    useApi<Patient>();
  const [registerPatient] = useApi();

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
          setPatientRegistrationData({
            patient: r.data,
            error: null,
          });

          setScreen({
            patientExistScreen: false,
            patientRegisterScreen: false,
            patientAppointmentScreen: true,
          });
        })
        .catch((err) => {
          setPatientRegistrationData({
            patient: {
              firstName: "",
              lastName: "",
              phoneNumber: "",
              age: 0,
            },
            error: err,
          });

          setScreen({
            patientExistScreen: false,
            patientRegisterScreen: true,
            patientAppointmentScreen: false,
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneNumber]);

  const handlePatientRegisteredChanges = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setPatientRegistrationData(
        produce((draft: AppointmentBookingState) => {
          draft.patient[name] = value;
        })
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleBackButton = useCallback(() => {
    setScreen((prev) => ({
      patientExistScreen: true,
      patientRegisterScreen: false,
      patientAppointmentScreen: false,
    }));
  }, []);

  const handlePatientRegisterSubmit = useCallback(() => {
    toast.promise(
      registerPatient("/ipd-opd/patient", ApiMethods.POST, {
        ...patientRegistrationData.patient,
        phoneNumber: phoneNumber.phoneNumber,
      }),
      {
        loading: "Registering Patient",
        success: "Done",
        error: "Error!!!",
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patientRegistrationData, phoneNumber]);

  return {
    phoneNumber,
    setPhoneNumber,
    handlePhoneNumberSubmit,
    handlePatientRegisterSubmit,
    handlePatientRegisteredChanges,
    handleBackButton,
    fetchPatientByPhoneNumberState,
    screen,
    patientRegistrationData,
  };
};

export default useIpdOpdContainer;
