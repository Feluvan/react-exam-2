import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Teachers from "./pages/teachers/Teachers";
import Students from "./pages/students/Students";
import Attendance from "./pages/attendance/Attendance";

import { TbChalkboard } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./App.css";
import { IoMdSchool } from "react-icons/io";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
      <div className="left-nav">
        <div className="logo6767">
          <IoMdSchool />
          <h1>school hub</h1>
        </div>
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
        <p></p>
      </div>
    </div>
  );
}

export default App;
