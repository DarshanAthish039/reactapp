// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./DonorList.css";

// // const DonorList = () => {
// //   const [donors, setDonors] = useState([]);

// //   useEffect(() => {
// //     const fetchDonors = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:8080/api/users/donors");
// //         setDonors(res.data);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     fetchDonors();
// //   }, []);

// //   return (
// //     <div className="p-4">
// //       <h3>Available Donors</h3>
// //       <div className="table-responsive">
// //         <table className="table table-hover align-middle">
// //           <thead className="table-light">
// //             <tr>
// //               <th>Name</th>
// //               <th>Email</th>
// //               <th>Blood Group</th>
// //               <th>Phone</th>
// //               <th>City</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {donors.map(d => (
// //               <tr key={d.id}>
// //                 <td>{d.name}</td>
// //                 <td>{d.email}</td>
// //                 <td>{d.bloodGroup}</td>
// //                 <td>{d.phone}</td>
// //                 <td>{d.city}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DonorList;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const DonorList = () => {
// //   const [donors, setDonors] = useState([]);

// //   useEffect(() => {
// //     axios.get("http://localhost:8080/api/donors")
// //       .then(response => setDonors(response.data))
// //       .catch(error => console.error("Error fetching donors:", error));
// //   }, []);

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-xl font-bold mb-4">Registered Donors</h2>
// //       <div className="grid gap-4">
// //         {donors.length > 0 ? (
// //           donors.map(donor => (
// //             <div key={donor.id} className="p-4 border rounded shadow bg-white">
// //               <h3 className="font-semibold">{donor.fullName}</h3>
// //               <p>Blood Group: <span className="text-red-600">{donor.bloodGroup}</span></p>
// //               <p>Location: {donor.location}</p>
// //               <p>Contact: {donor.contact}</p>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No donors found.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default DonorList;

// // import React, { useState, useEffect } from 'react';
// // // import DonorList from './DonorList';
// // import DonorList from './components/DonorList';

// // import { FaUser, FaEnvelope, FaLock, FaVenusMars, FaCalendarAlt, FaTint, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

// // const DonorList = () => {
// //   const [donors, setDonors] = useState([]);
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     gender: '',
// //     dateOfBirth: '',
// //     bloodGroup: '',
// //     address: '',
// //     phone: ''
// //   });
// //   const [errors, setErrors] = useState({});

// //   const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
// //   const genders = ['Male', 'Female', 'Other', 'Prefer not to say'];

// //   // Load donors from localStorage
// //   useEffect(() => {
// //     const storedDonors = JSON.parse(localStorage.getItem('donors')) || [];
// //     setDonors(storedDonors);
// //   }, []);

// //   // Handle input change
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //   };

// //   // Validation
// //   const validate = () => {
// //     const newErrors = {};
// //     if (!formData.fullName.trim()) newErrors.fullName = 'Full name required';
// //     if (!formData.email) {
// //       newErrors.email = 'Email required';
// //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //       newErrors.email = 'Invalid email';
// //     }
// //     if (!formData.password) newErrors.password = 'Password required';
// //     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
// //     if (!formData.gender) newErrors.gender = 'Gender required';
// //     if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth required';
// //     if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood group required';
// //     if (!formData.address) newErrors.address = 'Address required';
// //     if (!formData.phone) {
// //       newErrors.phone = 'Phone required';
// //     } else if (!/^\d{10}$/.test(formData.phone)) {
// //       newErrors.phone = 'Phone must be 10 digits';
// //     }
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   // Handle form submit
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!validate()) return;

// //     const newDonor = { ...formData };
// //     const updatedDonors = [...donors, newDonor];
// //     localStorage.setItem('donors', JSON.stringify(updatedDonors));
// //     setDonors(updatedDonors);

// //     // Reset form
// //     setFormData({
// //       fullName: '',
// //       email: '',
// //       password: '',
// //       confirmPassword: '',
// //       gender: '',
// //       dateOfBirth: '',
// //       bloodGroup: '',
// //       address: '',
// //       phone: ''
// //     });
// //     setErrors({});
// //   };

// //   return (
// //     <div className="container py-5">
// //       <h2 className="text-center text-danger mb-4">Register as Blood Donor</h2>

// //       {/* Donor Form */}
// //       <div className="card mb-5 shadow">
// //         <div className="card-body">
// //           <form onSubmit={handleSubmit} noValidate>
// //             <div className="mb-3">
// //               <label className="form-label"><FaUser className="me-2" />Full Name</label>
// //               <input type="text" name="fullName" className={`form-control ${errors.fullName ? 'is-invalid' : ''}`} value={formData.fullName} onChange={handleChange} />
// //               {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label"><FaEnvelope className="me-2" />Email</label>
// //               <input type="email" name="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} value={formData.email} onChange={handleChange} />
// //               {errors.email && <div className="invalid-feedback">{errors.email}</div>}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label"><FaLock className="me-2" />Password</label>
// //               <input type="password" name="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} value={formData.password} onChange={handleChange} />
// //               {errors.password && <div className="invalid-feedback">{errors.password}</div>}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label"><FaLock className="me-2" />Confirm Password</label>
// //               <input type="password" name="confirmPassword" className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} value={formData.confirmPassword} onChange={handleChange} />
// //               {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label"><FaVenusMars className="me-2" />Gender</label>
// //               <select name="gender" className={`form-select ${errors.gender ? 'is-invalid' : ''}`} value={formData.gender} onChange={handleChange}>
// //                 <option value="">Select Gender</option>
// //                 {genders.map(g => <option key={g} value={g}>{g}</option>)}
// //               </select>
// //               {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label"><FaCalendarAlt className="me-2" />Date of Birth</label>
// //               <input type="date" name="dateOfBirth" className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`} value={formData.dateOfBirth} onChange={handleChange} max={new Date().toISOString().split('T')[0]} />
// //               {errors.dateOfBirth && <div className="invalid-feedback">{errors.dateOfBirth}</div>}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label"><FaTint className="me-2" />Blood Group</label>
// //               <select name="bloodGroup" className={`form-select ${errors.bloodGroup ? 'is-invalid' : ''}`} value={formData.bloodGroup} onChange={handleChange}>
// //                 <option value="">Select Blood Group</option>
// //                 {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
// //               </select>
// //               {errors.bloodGroup && <div className="invalid-feedback">{errors.bloodGroup}</div>}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label"><FaMapMarkerAlt className="me-2" />Address</label>
// //               <textarea name="address" className={`form-control ${errors.address ? 'is-invalid' : ''}`} value={formData.address} onChange={handleChange}></textarea>
// //               {errors.address && <div className="invalid-feedback">{errors.address}</div>}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label"><FaPhone className="me-2" />Phone</label>
// //               <input type="tel" name="phone" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} value={formData.phone} onChange={handleChange} />
// //               {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
// //             </div>

// //             <button type="submit" className="btn btn-danger btn-lg w-100">Register</button>
// //           </form>
// //         </div>
// //       </div>

// //       {/* Donor Table */}
// //       <h2 className="text-center text-danger mb-4">Registered Donors</h2>
// //       {donors.length === 0 ? (
// //         <p className="text-center">No donors registered yet.</p>
// //       ) : (
// //         <div className="table-responsive">
// //           <table className="table table-bordered table-hover">
// //             <thead className="table-dark">
// //               <tr>
// //                 <th>#</th>
// //                 <th>Name</th>
// //                 <th>Email</th>
// //                 <th>Blood Group</th>
// //                 <th>Location</th>
// //                 <th>Contact</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {donors.map((donor, index) => (
// //                 <tr key={index}>
// //                   <td>{index + 1}</td>
// //                   <td>{donor.fullName}</td>
// //                   <td>{donor.email}</td>
// //                   <td>{donor.bloodGroup}</td>
// //                   <td>{donor.address}</td>
// //                   <td>{donor.phone}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default DonorList;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const DonorList = () => {
// //   const [donors, setDonors] = useState([]);
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     gender: '',
// //     dateOfBirth: '',
// //     bloodGroup: '',
// //     address: '',
// //     phone: '',
// //     referredBy: ''
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
// //   const genders = ['Male', 'Female', 'Other', 'Prefer not to say'];

// //   // Handle input change
// //   const handleChange = e => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //   };

// //   // Validation
// //   const validate = () => {
// //     const newErrors = {};
// //     if (!formData.fullName) newErrors.fullName = 'Full name required';
// //     if (!formData.email) newErrors.email = 'Email required';
// //     if (!formData.password) newErrors.password = 'Password required';
// //     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
// //     if (!formData.bloodGroup) newErrors.bloodGroup = 'Select blood group';
// //     if (!formData.phone) newErrors.phone = 'Phone required';
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   // Fetch existing donors
// //   const fetchDonors = async () => {
// //     try {
// //       const res = await axios.get('http://localhost:8080/api/users/donors'); // adjust backend endpoint
// //       setDonors(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchDonors();
// //   }, []);

// //   // Submit new donor
// //   const handleSubmit = async e => {
// //     e.preventDefault();
// //     if (!validate()) return;
// //     setIsSubmitting(true);
// //     try {
// //       const res = await axios.post('http://localhost:8080/api/users/register', {
// //         ...formData,
// //         role: 'DONOR'
// //       });
// //       if (res.status === 200 || res.status === 201) {
// //         alert('Donor added successfully!');
// //         setFormData({
// //           fullName: '',
// //           email: '',
// //           password: '',
// //           confirmPassword: '',
// //           gender: '',
// //           dateOfBirth: '',
// //           bloodGroup: '',
// //           address: '',
// //           phone: '',
// //           referredBy: ''
// //         });
// //         fetchDonors();
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       alert('Error adding donor');
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="container py-5">
// //       <h2 className="mb-4 text-center">Donor List & Registration</h2>

// //       {/* Donor Form */}
// //       <form onSubmit={handleSubmit} className="mb-5">
// //         <div className="row">
// //           <div className="col-md-6 mb-3">
// //             <input
// //               type="text"
// //               name="fullName"
// //               value={formData.fullName}
// //               onChange={handleChange}
// //               placeholder="Full Name"
// //               className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
// //             />
// //             {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
// //           </div>
// //           <div className="col-md-6 mb-3">
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               placeholder="Email"
// //               className={`form-control ${errors.email ? 'is-invalid' : ''}`}
// //             />
// //             {errors.email && <div className="invalid-feedback">{errors.email}</div>}
// //           </div>
// //           <div className="col-md-6 mb-3">
// //             <input
// //               type="password"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               placeholder="Password"
// //               className={`form-control ${errors.password ? 'is-invalid' : ''}`}
// //             />
// //             {errors.password && <div className="invalid-feedback">{errors.password}</div>}
// //           </div>
// //           <div className="col-md-6 mb-3">
// //             <input
// //               type="password"
// //               name="confirmPassword"
// //               value={formData.confirmPassword}
// //               onChange={handleChange}
// //               placeholder="Confirm Password"
// //               className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
// //             />
// //             {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
// //           </div>
// //           <div className="col-md-6 mb-3">
// //             <select name="gender" value={formData.gender} onChange={handleChange} className="form-select">
// //               <option value="">Select Gender</option>
// //               {genders.map(g => <option key={g} value={g}>{g}</option>)}
// //             </select>
// //           </div>
// //           <div className="col-md-6 mb-3">
// //             <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="form-control" />
// //           </div>
// //           <div className="col-md-6 mb-3">
// //             <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className={`form-select ${errors.bloodGroup ? 'is-invalid' : ''}`}>
// //               <option value="">Select Blood Group</option>
// //               {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
// //             </select>
// //             {errors.bloodGroup && <div className="invalid-feedback">{errors.bloodGroup}</div>}
// //           </div>
// //           <div className="col-md-6 mb-3">
// //             <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} />
// //             {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
// //           </div>
// //           <div className="col-12 mb-3">
// //             <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="form-control"></textarea>
// //           </div>
// //         </div>
// //         <button type="submit" className="btn btn-danger" disabled={isSubmitting}>
// //           {isSubmitting ? 'Saving...' : 'Add Donor'}
// //         </button>
// //       </form>

// //       {/* Donor Table */}
// //       <table className="table table-bordered">
// //         <thead>
// //           <tr>
// //             <th>Full Name</th>
// //             <th>Email</th>
// //             <th>Phone</th>
// //             <th>Blood Group</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {donors.length ? (
// //             donors.map(d => (
// //               <tr key={d.id}>
// //                 <td>{d.fullName}</td>
// //                 <td>{d.email}</td>
// //                 <td>{d.phone}</td>
// //                 <td>{d.bloodGroup}</td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr><td colSpan="4" className="text-center">No donors found</td></tr>
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default DonorList;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DonorList = () => {
//   const [donors, setDonors] = useState([]);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     gender: '',
//     dateOfBirth: '',
//     bloodGroup: '',
//     address: '',
//     phone: '',
//     referredBy: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const [searchBloodGroup, setSearchBloodGroup] = useState('');
//   const [searchPlace, setSearchPlace] = useState('');
  
//   const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
//   const genders = ['Male', 'Female', 'Other', 'Prefer not to say'];

//   // Handle input change
//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Validation
//   const validate = () => {
//     const newErrors = {};
//     if (!formData.fullName) newErrors.fullName = 'Full name required';
//     if (!formData.email) newErrors.email = 'Email required';
//     if (!formData.password) newErrors.password = 'Password required';
//     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
//     if (!formData.bloodGroup) newErrors.bloodGroup = 'Select blood group';
//     if (!formData.phone) newErrors.phone = 'Phone required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Fetch existing donors
//   const fetchDonors = async () => {
//     try {
//       const res = await axios.get('http://localhost:8080/api/users/donors'); // adjust backend endpoint
//       setDonors(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchDonors();
//   }, []);

//   // Submit new donor
//   const handleSubmit = async e => {
//     e.preventDefault();
//     if (!validate()) return;
//     setIsSubmitting(true);
//     try {
//       const res = await axios.post('http://localhost:8080/api/users/register', {
//         ...formData,
//         role: 'DONOR'
//       });
//       if (res.status === 200 || res.status === 201) {
//         alert('Donor added successfully!');
//         setFormData({
//           fullName: '',
//           email: '',
//           password: '',
//           confirmPassword: '',
//           gender: '',
//           dateOfBirth: '',
//           bloodGroup: '',
//           address: '',
//           phone: '',
//           referredBy: ''
//         });
//         fetchDonors();
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Error adding donor');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Filtered donors
//   const filteredDonors = donors.filter(d => {
//     return (
//       (!searchBloodGroup || d.bloodGroup === searchBloodGroup) &&
//       (!searchPlace || d.address.toLowerCase().includes(searchPlace.toLowerCase()) || d.fullName.toLowerCase().includes(searchPlace.toLowerCase()))
//     );
//   });

//   return (
//     <div className="container py-5">
//       <h2 className="mb-4 text-center">Donor List & Registration</h2>

//       {/* Donor Form */}
//       <form onSubmit={handleSubmit} className="mb-5">
//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               placeholder="Full Name"
//               className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
//             />
//             {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
//           </div>
//           <div className="col-md-6 mb-3">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//             />
//             {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//           </div>
//           <div className="col-md-6 mb-3">
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//               className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//             />
//             {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//           </div>
//           <div className="col-md-6 mb-3">
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm Password"
//               className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
//             />
//             {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
//           </div>
//           <div className="col-md-6 mb-3">
//             <select name="gender" value={formData.gender} onChange={handleChange} className="form-select">
//               <option value="">Select Gender</option>
//               {genders.map(g => <option key={g} value={g}>{g}</option>)}
//             </select>
//           </div>
//           <div className="col-md-6 mb-3">
//             <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="form-control" />
//           </div>
//           <div className="col-md-6 mb-3">
//             <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className={`form-select ${errors.bloodGroup ? 'is-invalid' : ''}`}>
//               <option value="">Select Blood Group</option>
//               {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
//             </select>
//             {errors.bloodGroup && <div className="invalid-feedback">{errors.bloodGroup}</div>}
//           </div>
//           <div className="col-md-6 mb-3">
//             <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} />
//             {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
//           </div>
//           <div className="col-12 mb-3">
//             <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="form-control"></textarea>
//           </div>
//         </div>
//         <button type="submit" className="btn btn-danger" disabled={isSubmitting}>
//           {isSubmitting ? 'Saving...' : 'Add Donor'}
//         </button>
//       </form>

//       {/* Search / Filter */}
//       <div className="row mb-3">
//         <div className="col-md-3">
//           <select className="form-select" value={searchBloodGroup} onChange={e => setSearchBloodGroup(e.target.value)}>
//             <option value="">Filter by Blood Group</option>
//             {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
//           </select>
//         </div>
//         <div className="col-md-3">
//           <input className="form-control" placeholder="Filter by Name or Address" value={searchPlace} onChange={e => setSearchPlace(e.target.value)} />
//         </div>
//       </div>

//       {/* Donor Table */}
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Full Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Blood Group</th>
//             <th>Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredDonors.length ? (
//             filteredDonors.map(d => (
//               <tr key={d.id}>
//                 <td>{d.fullName}</td>
//                 <td>{d.email}</td>
//                 <td>{d.phone}</td>
//                 <td>{d.bloodGroup}</td>
//                 <td>{d.address}</td>
//               </tr>
//             ))
//           ) : (
//             <tr><td colSpan="5" className="text-center">No donors found</td></tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DonorList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [searchBloodGroup, setSearchBloodGroup] = useState('');
  const [searchPlace, setSearchPlace] = useState('');

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  // Fetch donors from backend
  const fetchDonors = async () => {
    try {
      const res = await axios.get('https://springapp-314t.onrender.com/api/users/donors'); // backend GET endpoint
      setDonors(res.data);
    } catch (err) {
      console.error('Error fetching donors:', err);
      alert('Error fetching donors');
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  // Delete donor
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this donor?')) return;

    try {
      await axios.delete(`https://springapp-314t.onrender.com/api/users/${id}`); // backend DELETE endpoint
      setDonors(prev => prev.filter(d => d.id !== id)); // remove from state immediately
      alert('Donor deleted successfully');
    } catch (err) {
      console.error('Error deleting donor:', err);
      alert('Error deleting donor');
    }
  };

  // Filter donors
  const filteredDonors = donors.filter(d => {
    return (
      (!searchBloodGroup || d.bloodGroup === searchBloodGroup) &&
      (!searchPlace || 
        d.address.toLowerCase().includes(searchPlace.toLowerCase()) || 
        d.fullName.toLowerCase().includes(searchPlace.toLowerCase())
      )
    );
  });

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Donor List</h2>

      {/* Search / Filter */}
      <div className="row mb-3">
        <div className="col-md-3">
          <select 
            className="form-select" 
            value={searchBloodGroup} 
            onChange={e => setSearchBloodGroup(e.target.value)}
          >
            <option value="">Filter by Blood Group</option>
            {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
          </select>
        </div>
        <div className="col-md-3">
          <input 
            className="form-control" 
            placeholder="Filter by Name or Address" 
            value={searchPlace} 
            onChange={e => setSearchPlace(e.target.value)} 
          />
        </div>
      </div>

      {/* Donor Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Blood Group</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredDonors.length ? (
            filteredDonors.map(d => (
              <tr key={d.id}>
                <td>{d.fullName}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.bloodGroup}</td>
                <td>{d.address}</td>
                <td>
                  <button 
                    className="btn btn-sm btn-danger" 
                    onClick={() => handleDelete(d.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No donors found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DonorList;

