import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StudyPage from "./pages/StudyPage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/study" element={<StudyPage />} />
            <Route path="*" element={<h1>Error 404: Page not found! </h1>} />
        </Routes>
    )
}

export default AppRoutes