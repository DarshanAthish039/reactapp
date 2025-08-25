import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayDonor = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch donors from backend
  const fetchDonors = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users");
      setDonors(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch donors. Try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  if (loading) return <p>Loading donors...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registered Donors</h2>
      {donors.length === 0 ? (
        <p>No donors registered yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Gender</th>
              <th style={thStyle}>Blood Group</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Address</th>
              <th style={thStyle}>Total Donations</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor) => (
              <tr key={donor.id}>
                <td style={tdStyle}>{donor.fullName}</td>
                <td style={tdStyle}>{donor.email}</td>
                <td style={tdStyle}>{donor.gender}</td>
                <td style={tdStyle}>{donor.bloodGroup}</td>
                <td style={tdStyle}>{donor.phone}</td>
                <td style={tdStyle}>{donor.address}</td>
                <td style={tdStyle}>{donor.totalDonations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// Simple styling for table
const thStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  backgroundColor: "#f2f2f2",
  textAlign: "left",
};

const tdStyle = {
  border: "1px solid #ddd",
  padding: "8px",
};

export default DisplayDonor;
