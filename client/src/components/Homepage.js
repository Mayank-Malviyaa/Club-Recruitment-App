import React from "react";

function HomePage() {
  return (
    <div>
      <header style={{ padding: "20px", background: "#f8f9fa" }}>
        <h1>CLUBify</h1>
        <p>Your one-stop platform for college club recruitments and events.</p>
      </header>

      <main style={{ padding: "20px" }}>
        <section>
          <h2>Available Clubs</h2>
          <ul>
            <li>The Hit Inside</li>
            <li>IEEE</li>
            <li>Samarpan</li>
          </ul>
        </section>

        <section>
          <h2>Why Join Us?</h2>
          <p>Explore, learn, grow and network through various college clubs and activities.</p>
        </section>

        <section>
          <button>Apply Now</button>
        </section>
      </main>

      <footer style={{ padding: "20px", background: "#f8f9fa" }}>
        <p>© 2025 College Vibes. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
