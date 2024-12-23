import React, { useState } from "react"; // Unused import (useState)
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1 style={{ color: "red", fontSize: 25 }}>Home Page</h1>; // Inline style (bad practice)
}

function About() {
  return (
    <React.Fragment>
      <h1>About Page</h1>
      <h1>Duplicate Heading</h1> {/* Duplicate heading, semantic issue */}
    </React.Fragment>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/nonexistent">Broken Link</Link>
          </li>{" "}
          {/* Broken link */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
