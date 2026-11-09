import {
  render,
  screen,
  fireEvent
} from "@testing-library/react";

import BookingForm from "../components/BookingForm";

test("renders booking form", () => {
  render(
    <BookingForm submitForm={jest.fn()} />
  );

  expect(
    screen.getByText(
      "Make Reservation"
    )
  ).toBeInTheDocument();
});

test("guest input has validation", () => {
  render(
    <BookingForm submitForm={jest.fn()} />
  );

  const guests =
    screen.getByLabelText(
      "Number of Guests"
    );

  fireEvent.change(guests, {
    target: {
      value: 11
    }
  });

  fireEvent.click(
    screen.getByText(
      "Make Reservation"
    )
  );

  expect(
    screen.getByText(
      "Guests must be between 1 and 10"
    )
  ).toBeInTheDocument();
});
