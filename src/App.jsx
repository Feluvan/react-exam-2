import { NavLink, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Teachers from "./pages/teachers/Teachers";
import Students from "./pages/students/Students";
import Attendance from "./pages/attendance/Attendance";

import { TbChalkboard } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
      <div className="left-nav">
        <h1>school</h1>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/teachers">Teachers</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/attendance">Attendance</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
