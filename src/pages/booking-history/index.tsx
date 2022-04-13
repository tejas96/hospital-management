import { Box, CircularProgress } from "@material-ui/core";
import moment from "moment";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer, HeaderAndDrawer, Text } from "src/common/components";
import { useApi } from "src/hooks";
import { ApiMethods, Booking } from "src/model";

const BookingHistory = () => {
  const searchParams = useLocation().search;
  const patientId = searchParams.split("=")[1];
  const [fetchBookings, fetchBookingState] = useApi<Array<Booking>>();
  useEffect(() => {
    fetchBookings(`/ipd-opd/patient/bookings/${patientId}`, ApiMethods.GET);
  }, []);
  return (
    <>
      <HeaderAndDrawer showHamburgerIcon={false} />
      <Text variant="h4" align="left">
        Your Booking History
      </Text>
      <Box className="min-h-screen w-screen justify-center items-center flex gap-10">
        {fetchBookingState.loading ? (
          <CircularProgress />
        ) : fetchBookingState.error || !fetchBookingState.data?.length ? (
          <Text variant="h5">No bookings found</Text>
        ) : (
          fetchBookingState.data.map((booking) => (
            <Box className="p-4 rounded shadow-2xl flex flex-col gap-2 justify-start items-start bg-gradient-to-tr from-secondary to-primary text-white">
              <Text variant="body1">
                <strong>Booking date :</strong>{" "}
                {moment(Number(booking.createdAt)).format("DD MMM YYYY hh:mm")}
              </Text>
              <Text variant="body1">
                <strong>Appointment date :</strong>{" "}
                {moment(Number(booking.dateAndTime)).format(
                  "DD MMM YYYY hh:mm"
                )}
              </Text>
              <Text variant="body1">
                <strong>Treatment :</strong> {booking.treatmentType}
              </Text>
              <Text variant="body1">
                <strong>Ward :</strong> {booking.wardType}
              </Text>
            </Box>
          ))
        )}
      </Box>
      <Footer />
    </>
  );
};

export default BookingHistory;
