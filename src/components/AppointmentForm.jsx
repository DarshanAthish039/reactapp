import React, { useState } from "react";
import axios from "axios";

const AppointmentForm = ({ userId, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    centerId: "",
    appointmentDate: "",
    appointmentTime: "",
    donationType: "Blood",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:8080/appointments/book", {
        userId,
        ...formData,
      });
      setMessage("✅ Appointment booked successfully!");
      onSuccess();
      setTimeout(() => {
        setMessage("");
        onClose();
      }, 1500);
    } catch (err) {
      setMessage("❌ Error booking appointment. Try another slot.");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 animate-fadeIn">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Book Appointment
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Donation Center */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Donation Center ID
            </label>
            <input
              type="number"
              name="centerId"
              value={formData.centerId}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
              required
            />
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Appointment Date
            </label>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
              required
            />
          </div>

          {/* Time */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Appointment Time
            </label>
            <input
              type="time"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
              required
            />
          </div>

          {/* Donation Type */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Donation Type
            </label>
            <select
              name="donationType"
              value={formData.donationType}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
            >
              <option value="Blood">Blood</option>
              <option value="Plasma">Plasma</option>
              <option value="Platelets">Platelets</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg"
            >
              {loading ? "Booking..." : "Confirm"}
            </button>
          </div>
        </form>

        {message && (
          <p className="mt-4 text-center font-medium text-gray-700">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AppointmentForm;
