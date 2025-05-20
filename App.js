import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Episode from "./Episode";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Anime Watch</h1>
      <ul>
        <li>
          <Link to="/aot-1">Attack on Titan - Bölüm 1</Link>
        </li>
        <li>
          <Link to="/aot-2">Attack on Titan - Bölüm 2</Link>
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aot-1" element={<Episode id="abc123" title="Bölüm 1 - Türkçe Altyazılı" />} />
        <Route path="/aot-2" element={<Episode id="def456" title="Bölüm 2 - Türkçe Altyazılı" />} />
      </Routes>
    </Router>
  );
}

export default App;