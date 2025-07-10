import React, { useState } from "react";
import AdminPanel from "./AdminPanel";
import "./App.css";

function App() {
  const [view, setView] = useState("form"); // 'form', 'login', 'admin'
  const [admin, setAdmin] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    if (admin.email === "admin@college.com" && admin.password === "admin123") {
      setView("admin");
    } else {
      alert("❌ Invalid admin credentials");
    }
  };

  return (
    <div className="App">
      {view === "form" && (
        <>
          <button onClick={() => setView("login")} style={{ marginBottom: "20px" }}>
            🔐 Admin Login
          </button>
          <h2>📋 College Club Recruitment Form</h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = {
                fullName: e.target.fullName.value,
                branch: e.target.branch.value,
                year: e.target.year.value,
                email: e.target.email.value,
                mobile: e.target.mobile.value,
                clubName: e.target.clubName.value,
                whyJoin: e.target.whyJoin.value,
              };
              try {
                const res = await fetch("https://club-recruitment-app.onrender.com/api/club/apply", {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json" },
                  body: JSON.stringify(formData),
                });
                const data = await res.json();
                if (res.ok) {
                  alert("✅ Submitted!");
                  e.target.reset();
                } else {
                  alert("❌ Failed" + data.message);
                }
              } catch (err) {
                 console.error("❌ Frontend Error:", err);
                alert("❌ Error submitting" + err.message);
              }
            }}
          >
            <input name="fullName" placeholder="Full Name" required />
            <input name="branch" placeholder="Branch" required />
            <input name="year" placeholder="Year" required />
            <input name="email" type="email" placeholder="Email" required />
            <input name="mobile" placeholder="Mobile" required />
            <input name="clubName" placeholder="Club Name" required />
            <textarea name="whyJoin" placeholder="Why do you want to join?" required />
            <button type="submit">Submit</button>
          </form>
        </>
      )}

      {view === "login" && (
        <>
          <h2>🔐 Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Admin Email"
              value={admin.email}
              onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={admin.password}
              onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
              required
            />
            <button type="submit">Login</button>
          </form>
          <br />
          <button onClick={() => setView("form")}>🔙 Back</button>
        </>
      )}

      {view === "admin" && <AdminPanel onLogout={() => setView("form")} />}
    </div>
  );
}


export default App;
