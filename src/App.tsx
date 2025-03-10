import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes"
import "./styles/studyPage.css";
import "./App.css";
import NavBar from "./components/NavBar.tsx";

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App;
