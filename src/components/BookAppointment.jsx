// // // // import React, { useState, useEffect } from 'react';
// // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // import axios from 'axios';

// // // // const BookAppointment = () => {
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();
// // // //   const { centerId } = location.state || {};
// // // //   const [date, setDate] = useState('');
// // // //   const [time, setTime] = useState('');
// // // //   const [donationType, setDonationType] = useState('Blood');
// // // //   const [slots, setSlots] = useState([]);
// // // //   const [success, setSuccess] = useState(false);

// // // //   useEffect(() => {
// // // //     if (date) {
// // // //       axios
// // // //         .get(`http://localhost:8080/appointments/available-slots?centerId=${centerId}&date=${date}`)
// // // //         .then((res) => setSlots(res.data))
// // // //         .catch((err) => console.error(err));
// // // //     }
// // // //   }, [date, centerId]);

// // // //   const handleBooking = async () => {
// // // //     try {
// // // //       const user = JSON.parse(localStorage.getItem('user'));
// // // //       const formattedTime = time.length === 5 ? time + ':00' : time;

// // // //       await axios.post('http://localhost:8080/appointments/book', {
// // // //         userId: user.id,
// // // //         centerId: centerId,
// // // //         appointmentDate: date,
// // // //         appointmentTime: formattedTime,
// // // //         donationType,
// // // //       });

// // // //       setSuccess(true);
// // // //     } catch (error) {
// // // //       console.error(error.response?.data || error.message);
// // // //       alert(error.response?.data || 'Error booking appointment. Try another slot.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="container py-5">
// // // //       <div className="row justify-content-center">
// // // //         <div className="col-md-6">
// // // //           <h3 className="mb-3">Book Appointment</h3>

// // // //           {success ? (
// // // //             <div className="alert alert-success">
// // // //               Appointment booked successfully!
// // // //               <button className="btn btn-outline-success mt-2" onClick={() => navigate('/manage-appointments')}>
// // // //                 Go to My Appointments
// // // //               </button>
// // // //             </div>
// // // //           ) : (
// // // //             <>
// // // //               <div className="mb-3">
// // // //                 <label>Date:</label>
// // // //                 <input
// // // //                   type="date"
// // // //                   className="form-control"
// // // //                   value={date}
// // // //                   onChange={(e) => setDate(e.target.value)}
// // // //                 />
// // // //               </div>

// // // //               <div className="mb-3">
// // // //                 <label>Time:</label>
// // // //                 <select className="form-control" value={time} onChange={(e) => setTime(e.target.value)}>
// // // //                   <option value="">Select Slot</option>
// // // //                   {slots.map((slot, idx) => (
// // // //                     <option key={idx} value={slot}>
// // // //                       {slot}
// // // //                     </option>
// // // //                   ))}
// // // //                 </select>
// // // //               </div>

// // // //               <div className="mb-3">
// // // //                 <label>Donation Type:</label>
// // // //                 <select className="form-control" value={donationType} onChange={(e) => setDonationType(e.target.value)}>
// // // //                   <option value="Blood">Blood</option>
// // // //                   <option value="Plasma">Plasma</option>
// // // //                 </select>
// // // //               </div>

// // // //               <button className="btn btn-danger w-100" onClick={handleBooking}>
// // // //                 Book Appointment
// // // //               </button>
// // // //             </>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BookAppointment;
// // // import React, { useEffect, useState } from 'react';
// // // import { useLocation, useNavigate } from 'react-router-dom';
// // // import axios from 'axios';

// // // const BookAppointment = () => {
// // //   const navigate = useNavigate();
// // //   const { state } = useLocation();
// // //   const { centerId, userId } = state || {}; // userId from session/context

// // //   const [date, setDate] = useState('');
// // //   const [time, setTime] = useState('');
// // //   const [donationType, setDonationType] = useState('Blood');
// // //   const [availableSlots, setAvailableSlots] = useState([]);
// // //   const [message, setMessage] = useState('');

// // //   // Fetch available slots for selected date
// // //   useEffect(() => {
// // //     if (date) {
// // //       axios.get(`http://localhost:8080/appointments/available-slots`, {
// // //         params: { centerId, date }
// // //       })
// // //       .then(res => setAvailableSlots(res.data))
// // //       .catch(err => console.error(err));
// // //     }
// // //   }, [date, centerId]);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await axios.post('http://localhost:8080/appointments/book', {
// // //         userId,
// // //         centerId,
// // //         appointmentDate: date,
// // //         appointmentTime: time,
// // //         donationType
// // //       });
// // //       setMessage(res.data);
// // //       setTimeout(() => navigate('/appointments/upcoming'), 1500);
// // //     } catch (err) {
// // //       console.error(err);
// // //       setMessage(err.response?.data || 'Error booking appointment. Try another slot.');
// // //     }
// // //   };

// // //   return (
// // //     <div className="container py-5">
// // //       <h2 className="text-center mb-4">Book Appointment</h2>

// // //       {message && <div className="alert alert-info text-center">{message}</div>}

// // //       <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
// // //         <div className="mb-3">
// // //           <label className="form-label">Select Date</label>
// // //           <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
// // //         </div>

// // //         <div className="mb-3">
// // //           <label className="form-label">Select Time</label>
// // //           <select className="form-select" value={time} onChange={(e) => setTime(e.target.value)} required>
// // //             <option value="">--Select Time--</option>
// // //             {availableSlots.map(slot => (
// // //               <option key={slot} value={slot}>{slot}</option>
// // //             ))}
// // //           </select>
// // //         </div>

// // //         <div className="mb-3">
// // //           <label className="form-label">Donation Type</label>
// // //           <select className="form-select" value={donationType} onChange={(e) => setDonationType(e.target.value)}>
// // //             <option value="Blood">Blood</option>
// // //             <option value="Plasma">Plasma</option>
// // //             <option value="Platelets">Platelets</option>
// // //           </select>
// // //         </div>

// // //         <button type="submit" className="btn btn-danger w-100">Book Appointment</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default BookAppointment;
// // import React, { useState } from "react";
// // import axios from "axios";

// // const BookAppointmentForm = ({ userId, onSuccess }) => {
// //   const [formData, setFormData] = useState({
// //     appointmentDate: "",
// //     appointmentTime: "",
// //     donationType: "Blood",
// //     centerId: 1, // default center (you can make this dynamic later)
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post("http://localhost:8080/api/appointments", {
// //         userId,
// //         ...formData,
// //       });
// //       alert("✅ Appointment booked successfully!");
// //       if (onSuccess) onSuccess();
// //     } catch (error) {
// //       alert("❌ Error booking appointment. Try another slot.");
// //     }
// //   };

// //   return (
// //     <div className="p-6 bg-white rounded-xl shadow-md max-w-md mx-auto mt-4">
// //       <h2 className="text-xl font-bold mb-4">Book Appointment</h2>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label className="block font-medium">Date</label>
// //           <input
// //             type="date"
// //             name="appointmentDate"
// //             value={formData.appointmentDate}
// //             onChange={handleChange}
// //             required
// //             className="border p-2 w-full rounded"
// //           />
// //         </div>

// //         <div>
// //           <label className="block font-medium">Time</label>
// //           <input
// //             type="time"
// //             name="appointmentTime"
// //             value={formData.appointmentTime}
// //             onChange={handleChange}
// //             required
// //             className="border p-2 w-full rounded"
// //           />
// //         </div>

// //         <div>
// //           <label className="block font-medium">Donation Type</label>
// //           <select
// //             name="donationType"
// //             value={formData.donationType}
// //             onChange={handleChange}
// //             className="border p-2 w-full rounded"
// //           >
// //             <option value="Blood">Blood</option>
// //             <option value="Plasma">Plasma</option>
// //             <option value="Platelets">Platelets</option>
// //           </select>
// //         </div>

// //         <button
// //           type="submit"
// //           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// //         >
// //           Book Now
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default BookAppointmentForm;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BookAppointmentForm = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const userId = user?.id;

//   const [centers, setCenters] = useState([]);
//   const [formData, setFormData] = useState({
//     centerId: "",
//     appointmentDate: "",
//     appointmentTime: "",
//     donationType: "Blood",
//   });
//   const [availableSlots, setAvailableSlots] = useState([]);
//   const [message, setMessage] = useState("");

//   // Fetch centers from backend
//   useEffect(() => {
//     axios.get("http://localhost:8080/api/donationCenters")
//       .then(res => setCenters(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   // Fetch available slots when date or center changes
//   useEffect(() => {
//     if (formData.centerId && formData.appointmentDate) {
//       axios.get("http://localhost:8080/appointments/available-slots", {
//         params: { centerId: formData.centerId, date: formData.appointmentDate }
//       })
//       .then(res => setAvailableSlots(res.data))
//       .catch(err => setAvailableSlots([]));
//     }
//   }, [formData.centerId, formData.appointmentDate]);

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if(!userId) {
//       alert("User not logged in");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:8080/appointments/book", {
//         userId,
//         ...formData
//       });
//       setMessage("✅ Appointment booked successfully!");
//     } catch (err) {
//       setMessage(err.response?.data || "❌ Error booking appointment");
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded shadow max-w-md mx-auto mt-5">
//       <h2 className="text-xl font-bold mb-4">Book Appointment</h2>

//       {message && <div className="alert alert-info mb-4">{message}</div>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Center */}
//         <div>
//           <label className="block font-medium">Select Center</label>
//           <select
//             name="centerId"
//             value={formData.centerId}
//             onChange={handleChange}
//             required
//             className="border p-2 w-full rounded"
//           >
//             <option value="">-- Select Center --</option>
//             {centers.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
//           </select>
//         </div>

//         {/* Date */}
//         <div>
//           <label className="block font-medium">Date</label>
//           <input
//             type="date"
//             name="appointmentDate"
//             value={formData.appointmentDate}
//             onChange={handleChange}
//             required
//             className="border p-2 w-full rounded"
//           />
//         </div>

//         {/* Time */}
//         <div>
//           <label className="block font-medium">Time</label>
//           <select
//             name="appointmentTime"
//             value={formData.appointmentTime}
//             onChange={handleChange}
//             required
//             className="border p-2 w-full rounded"
//           >
//             <option value="">-- Select Slot --</option>
//             {availableSlots.map(slot => (
//               <option key={slot} value={slot}>{slot}</option>
//             ))}
//           </select>
//         </div>

//         {/* Donation Type */}
//         <div>
//           <label className="block font-medium">Donation Type</label>
//           <select
//             name="donationType"
//             value={formData.donationType}
//             onChange={handleChange}
//             className="border p-2 w-full rounded"
//           >
//             <option value="Blood">Blood</option>
//             <option value="Plasma">Plasma</option>
//             <option value="Platelets">Platelets</option>
//           </select>
//         </div>

//         <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600">
//           Book Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookAppointmentForm;
import React, { useState, useEffect } from "react";
import axios from "axios";

const BookAppointmentForm = ({ userId }) => {
  const [centers, setCenters] = useState([]);
  const [formData, setFormData] = useState({
    centerId: "",
    appointmentDate: "",
    appointmentTime: "",
    donationType: "Blood",
  });
  const [availableSlots, setAvailableSlots] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch donation centers on load
  useEffect(() => {
    axios
      .get("http://localhost:8080/centers")
      .then((res) => setCenters(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Fetch available slots when center or date changes
  useEffect(() => {
    if (formData.centerId && formData.appointmentDate) {
      axios
        .get("http://localhost:8080/appointments/available-slots", {
          params: {
            centerId: formData.centerId,
            date: formData.appointmentDate,
          },
        })
        .then((res) => setAvailableSlots(res.data))
        .catch((err) => console.error(err));
    }
  }, [formData.centerId, formData.appointmentDate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.centerId) {
      alert("Please select a donation center");
      return;
    }
    try {
      await axios.post("http://localhost:8080/appointments/book", {
        userId,
        ...formData,
      });
      setMessage("✅ Appointment booked successfully!");
      setFormData({
        centerId: "",
        appointmentDate: "",
        appointmentTime: "",
        donationType: "Blood",
      });
      setAvailableSlots([]);
    } catch (error) {
      setMessage("❌ Failed to book appointment: " + error.response?.data);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Book Appointment</h2>

      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
        <div className="mb-3">
          <label>Donation Center</label>
          <select
            className="form-select"
            name="centerId"
            value={formData.centerId}
            onChange={handleChange}
            required
          >
            <option value="">--Select Center--</option>
            {centers.map((center) => (
              <option key={center.id} value={center.id}>
                {center.name} ({center.city})
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Date</label>
          <input
            type="date"
            name="appointmentDate"
            className="form-control"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Available Time Slots</label>
          <select
            name="appointmentTime"
            className="form-select"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
          >
            <option value="">--Select Time--</option>
            {availableSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Donation Type</label>
          <select
            name="donationType"
            className="form-select"
            value={formData.donationType}
            onChange={handleChange}
          >
            <option value="Blood">Blood</option>
            <option value="Plasma">Plasma</option>
            <option value="Platelets">Platelets</option>
          </select>
        </div>

        <button type="submit" className="btn btn-danger w-100">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointmentForm;
