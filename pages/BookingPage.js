import { useState } from "react";
import BookingForm from "../components/BookingForm";
import ConfirmedBooking from "../components/ConfirmedBooking";
import { submitAPI } from "../api";

function BookingPage() {
  const [confirmed, setConfirmed] =
    useState(false);

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      setConfirmed(true);
    }
  };

  return (
    <>
      {confirmed ? (
        <ConfirmedBooking />
      ) : (
        <BookingForm
          submitForm={submitForm}
        />
      )}
    </>
  );
}

export default BookingPage;
