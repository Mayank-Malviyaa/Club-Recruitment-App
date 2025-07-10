import React, { useEffect, useState } from "react";

const AdminPanel = ({ onLogout }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/club/applications");
        const data = await res.json();
        setApplications(data);
      } catch (err) {
        console.error("❌ Failed to fetch applications", err);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <h2>📊 Admin Panel - Submitted Applications</h2>
      <button onClick={onLogout}>🚪 Logout</button>
      {applications.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Branch</th>
              <th>Year</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Club Name</th>
              <th>Why Join</th>
              <th>Submitted On</th>
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
                <td>{new Date(app.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPanel;
