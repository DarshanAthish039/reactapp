import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaTint, FaUser, FaMedal, FaEdit, FaTrash, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import AppointmentForm from "./AppointmentForm"; // import your existing form component

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Dashboard = ({ userId }) => {
  const [appointments, setAppointments] = useState([]);
  const [editData, setEditData] = useState(null);
  const [centers, setCenters] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [searchPincode, setSearchPincode] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load appointments from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments") || "[]");
    setAppointments(stored.filter((a) => a.userId === userId));
  }, [userId]);

  // Load donation centers from backend
  useEffect(() => {
    fetchCenters();
  }, []);

  const fetchCenters = async () => {
    try {
      const res = await axios.get("https://springapp-314t.onrender.com/api/donationCenters");
      setCenters(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const searchByCity = async () => {
    if (!searchCity) return fetchCenters();
    try {
      const res = await axios.get(`https://springapp-314t.onrender.com/api/donationCenters/search/city?city=${searchCity}`);
      setCenters(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const searchByPincode = async () => {
    if (!searchPincode) return fetchCenters();
    try {
      const res = await axios.get(`https://springapp-314t.onrender.com/api/donationCenters/search/pincode?pincode=${searchPincode}`);
      setCenters(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveAppointment = () => {
    const stored = JSON.parse(localStorage.getItem("appointments") || "[]");
    setAppointments(stored.filter((a) => a.userId === userId));
    setEditData(null);
  };

  const handleEdit = (appt) => setEditData(appt);

  const handleDelete = (id) => {
    const stored = JSON.parse(localStorage.getItem("appointments") || "[]");
    const updated = stored.filter((a) => a.id !== id);
    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments(updated.filter((a) => a.userId === userId));
  };

  const today = new Date();
  const upcoming = appointments.filter((a) => new Date(`${a.appointmentDate}T${a.appointmentTime}`) >= today);

  const features = [
    { icon: <FaTint className="fs-2 text-danger mb-2" />, title: "Find Blood Donation Centers", description: "Search for donation centers by blood group and location instantly." },
    { icon: <FaCalendarAlt className="fs-2 text-danger mb-2" />, title: "Book Appointments", description: "Easily schedule your blood donation at nearby centers." },
    { icon: <FaUser className="fs-2 text-danger mb-2" />, title: "Profile & History", description: "View your donation history and track your impact." },
    { icon: <FaMedal className="fs-2 text-danger mb-2" />, title: "Recognition & Badges", description: "Earn rewards and badges for your valuable contributions." },
  ];

  return (
    <div className="container my-4">
      {/* Book Appointment Form */}
      <AppointmentForm
        userId={userId}
        onSave={handleSaveAppointment}
        editData={editData}
        onCancelEdit={() => setEditData(null)}
      />

      {/* Upcoming Appointments */}
      <div className="mb-4">
        <h4>Upcoming Appointments</h4>
        {upcoming.length === 0 ? <p>No upcoming appointments.</p> : (
          <ul className="list-group">
            {upcoming.map((appt) => (
              <li key={appt.id} className="list-group-item d-flex justify-content-between align-items-center">
                {appt.appointmentDate} at {appt.appointmentTime} - {appt.donationType} ({appt.bloodGroup || "N/A"})
                <div>
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(appt)}><FaEdit /></button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(appt.id)}><FaTrash /></button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Donation Tips / Features */}
      <h4>Donation Tips</h4>
      <div className="row mb-4">
        {features.map((f, idx) => (
          <div key={idx} className="col-md-6 mb-3">
            <div className="card shadow-sm p-3 h-100">
              <div className="text-center">{f.icon}</div>
              <h6 className="mt-2">{f.title}</h6>
              <p className="text-muted">{f.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Donation Centers */}
      <h4>Donation Centers</h4>
      <div className="row mb-3">
        <div className="col-md-5 mb-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search by city" value={searchCity} onChange={(e) => setSearchCity(e.target.value)} />
            <button className="btn btn-danger" onClick={searchByCity}><FaSearch /> Search</button>
          </div>
        </div>
        <div className="col-md-5 mb-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search by pincode" value={searchPincode} onChange={(e) => setSearchPincode(e.target.value)} />
            <button className="btn btn-danger" onClick={searchByPincode}><FaSearch /> Search</button>
          </div>
        </div>
        <div className="col-md-2 mb-2">
          <button className="btn btn-secondary w-100" onClick={fetchCenters}>Reset</button>
        </div>
      </div>

      {loading ? <p>Loading centers...</p> : (
        <>
          <div className="row">
            {centers.map(center => (
              <div key={center.id} className="col-md-6 mb-4">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{center.name}</h5>
                    <p className="mb-1">{center.address}, {center.city} - {center.pincode}</p>
                    <p className="mb-1"><strong>Contact:</strong> {center.contactNumber}</p>
                    <p className="mb-1"><strong>Operating Hours:</strong> {center.operatingHours}</p>
                    <p><strong>Accepted Blood Groups:</strong> {center.acceptedBloodGroups?.join(", ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map View */}
          <h5 className="mt-4">Centers Map</h5>
          <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "400px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {centers.map(center => center.latitude && center.longitude && (
              <Marker key={center.id} position={[center.latitude, center.longitude]}>
                <Popup>
                  <strong>{center.name}</strong><br />
                  {center.address}, {center.city}<br />
                  Contact: {center.contactNumber}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </>
      )}
    </div>
  );
};

export default Dashboard;
