import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/studyPage.css";
import "./App.css";
import StudyPage from "./pages/StudyPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/study">Flashcards</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/study" element={<StudyPage/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
