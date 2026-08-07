import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Teachers from "./pages/teachers/Teachers";
import Students from "./pages/students/Students";
import Attendance from "./pages/attendance/Attendance";

import "./App.css";
import { IoMdSchool } from "react-icons/io";
import {
  FaHome,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaClipboardCheck,
  FaDollarSign,
  FaRegStickyNote,
  FaRegCalendarAlt,
  FaBook,
  FaRegCommentDots,
  FaRegUserCircle,
  FaCog,
  FaSignOutAlt,
  FaChevronRight,
} from "react-icons/fa";

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
          <h1>SchoolHub</h1>
        </div>

        <p className="nav-label">MENU</p>
        <ul>
          <li>
            <NavLink to="/dashboard" className="nav-link">
              <FaHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/teachers" className="nav-link">
              <FaChalkboardTeacher /> Teachers
            </NavLink>
          </li>
          <li>
            <NavLink to="/students" className="nav-link">
              <FaUserGraduate /> Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/attendance" className="nav-link">
              <FaClipboardCheck /> Attendance
            </NavLink>
          </li>
          <li>
            <span className="nav-link">
              <FaDollarSign /> Finance <FaChevronRight className="nav-arrow" />
            </span>
          </li>
          <li>
            <span className="nav-link">
              <FaRegStickyNote /> Notice
            </span>
          </li>
          <li>
            <span className="nav-link">
              <FaRegCalendarAlt /> Calendar
            </span>
          </li>
          <li>
            <span className="nav-link">
              <FaBook /> Library
            </span>
          </li>
          <li>
            <span className="nav-link">
              <FaRegCommentDots /> Message
            </span>
          </li>
        </ul>

        <p className="nav-label">OTHER</p>
        <ul>
          <li>
            <span className="nav-link">
              <FaRegUserCircle /> Profile
            </span>
          </li>
          <li>
            <span className="nav-link">
              <FaCog /> Setting
            </span>
          </li>
          <li>
            <span className="nav-link">
              <FaSignOutAlt /> Log out
            </span>
          </li>
        </ul>

        <div className="nav-promo">
          <p>Let's Manage Your Data Better in Your Hand</p>
          <button>Download the App</button>
        </div>
      </div>
    </div>
  );
}

export default App;
