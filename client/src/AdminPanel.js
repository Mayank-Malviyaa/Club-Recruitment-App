import React, { useEffect, useState } from "react";

function AdminPanel({ onLogout }) {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("https://club-recruitment-app.onrender.com/api/club/all");
        const data = await res.json();
        setApplications(data);
      } catch (error) {
        console.error("❌ Failed to fetch applications", error);
        alert("❌ Failed to fetch applications. Please refresh or try again.");
      }
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <h2>🛠 Admin Panel</h2>
      <button onClick={onLogout}>🔙 Logout</button>
      <br />
      <br />
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Club Name</th>
            <th>Why Join</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app._id}>
              <td>{app.fullName}</td>
              <td>{app.branch}</td>
              <td>{app.year}</td>
              <td>{app.email}</td>
              <td>{app.mobile}</td>
              <td>{app.clubName}</td>
              <td>{app.whyJoin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;