import React, { useState } from "react";

const BookAppointmentForm = ({ userId }) => {
  const [formData, setFormData] = useState({
    appointmentDate: "",
    appointmentTime: "",
    donationType: "Blood",
    centerId: 1,
  });

  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments") || "[]")
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new appointment to local state
    const newAppointment = { ...formData, userId, id: Date.now() };
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);

    // Save in localStorage (frontend "database")
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    alert("✅ Appointment stored in frontend!");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Book Appointment (Frontend Only)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Time:</label>
          <input
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Donation Type:</label>
          <select
            name="donationType"
            value={formData.donationType}
            onChange={handleChange}
          >
            <option value="Blood">Blood</option>
            <option value="Plasma">Plasma</option>
            <option value="Platelets">Platelets</option>
          </select>
        </div>

        <button type="submit">Book Appointment</button>
      </form>

      <h3>Saved Appointments (Frontend)</h3>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>
            {appt.appointmentDate} at {appt.appointmentTime} - {appt.donationType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookAppointmentForm;
