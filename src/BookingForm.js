import { useState } from "react";

function BookingForm({ submitForm }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.date)
      newErrors.date = "Please select a date";

    if (!formData.time)
      newErrors.time = "Please select a time";

    if (!formData.guests)
      newErrors.guests = "Number of guests required";

    if (
      formData.guests &&
      (formData.guests < 1 || formData.guests > 10)
    ) {
      newErrors.guests =
        "Guests must be between 1 and 10";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      submitForm(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reserve a Table</h2>

      <label htmlFor="date">
        Choose Date
      </label>
      <input
        id="date"
        type="date"
        value={formData.date}
        onChange={(e) =>
          setFormData({
            ...formData,
            date: e.target.value
          })
        }
      />
      {errors.date && <p>{errors.date}</p>}

      <label htmlFor="time">
        Choose Time
      </label>
      <select
        id="time"
        value={formData.time}
        onChange={(e) =>
          setFormData({
            ...formData,
            time: e.target.value
          })
        }
      >
        <option value="">
          Select Time
        </option>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
      </select>

      <label htmlFor="guests">
        Number of Guests
      </label>

      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        value={formData.guests}
        onChange={(e) =>
          setFormData({
            ...formData,
            guests: e.target.value
          })
        }
      />

      {errors.guests && (
        <p>{errors.guests}</p>
      )}

      <label htmlFor="occasion">
        Occasion
      </label>

      <select
        id="occasion"
        value={formData.occasion}
        onChange={(e) =>
          setFormData({
            ...formData,
            occasion: e.target.value
          })
        }
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">
        Make Reservation
      </button>
    </form>
  );
}

export default BookingForm;
