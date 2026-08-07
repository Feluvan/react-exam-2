import React from "react";
import { TbMessagesFilled } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import profileimg from "../../assets/Profile Picture.png";
import "./Dashboard.css";
import row from "../../assets/row.png";
import row1 from "../../assets/row1.png";
import gitara from "../../assets/Rectangle 3.png";
import profile from "../../assets/Profile Picture (1).png";
import agenda from "../../assets/agenda.png";
function Dashboard() {
  return (
    <div>
      <div className="dashboard">
        <input className="search" type="text" placeholder="Search" />
        <button className="message">
          <TbMessagesFilled />
        </button>
        <button className="notification">
          <FaBell />
        </button>
        <div className="profile-container">
          <div className="profile">
            <p>Linda Adora</p>
            <p>Admin</p>
          </div>
          <div className="profile-img">
            <img src={profileimg} alt="Profile" />
          </div>
        </div>
      </div>
      <div className="dashboard-row">
      <div className="dashboard-left">
      <div className="dashboard-content">
        <div className="cards">
          <p>^15%</p>
          <h1>124,684</h1>
          <p>students</p>
        </div>
        <div className="cards">
          <p>^15%</p>
          <h1>124,684</h1>
          <p>students</p>
        </div>
        <div className="cards">
          <p>^15%</p>
          <h1>124,684</h1>
          <p>students</p>
        </div>
        <div className="cards">
          <p>^15%</p>
          <h1>124,684</h1>
          <p>students</p>
        </div>
      </div>
      <div className="dashboard-content2">
        <img src={row} alt="Row" />
        <img src={row1} alt="Row" />
      </div>
      <div className="dashboard-content4">
        <div className="dashboard-content3">
          <h1>Notice Board</h1>
          <h3>Regional Robotics Champion</h3>
          <p>Winning robots triumph in engineering challenge</p>
          <h3>Regional Robotics Champion</h3>
          <p>Winning robots triumph in engineering challenge</p>
          <h3>Regional Robotics Champion</h3>
          <p>Winning robots triumph in engineering challenge</p>
        </div>
        <div>
          <div className="dashboard-content5">
            <img src={gitara} alt="Gitara" />
            <p>Math Olympiad Competition</p>
            <p>04/18/2030</p>
            <p>By Ms. Jackson (Math Teacher)</p>
            <p>325</p>
          </div>
          <div className="dashboard-content5">
            <img src={gitara} alt="Gitara" />
            <p>Math Olympiad Competition</p>
            <p>04/18/2030</p>
            <p>By Ms. Jackson (Math Teacher)</p>
            <p>325</p>
          </div>
          <div className="dashboard-content5">
            <img src={gitara} alt="Gitara" />
            <p>Math Olympiad Competition</p>
            <p>04/18/2030</p>
            <p>By Ms. Jackson (Math Teacher)</p>
            <p>325</p>
          </div>
          <div className="dashboard-content5">
            <img src={gitara} alt="Gitara" />
            <p>Math Olympiad Competition</p>
            <p>04/18/2030</p>
            <p>By Ms. Jackson (Math Teacher)</p>
            <p>325</p>
          </div>
        </div>
      </div>
      <div className="dashboard-content6">
        <div className="dashboard-content5">
          <img src={profile} alt="Profile" />
          <p>Ms. Johnson assigned new English Literature homework</p>
          <p>20 minutes ago</p>
        </div>
        <div className="dashboard-content5">
          <img src={profile} alt="Profile" />
          <p>Ms. Johnson assigned new English Literature homework</p>
          <p>20 minutes ago</p>
        </div>
        <div className="dashboard-content5">
          <img src={profile} alt="Profile" />
          <p>Ms. Johnson assigned new English Literature homework</p>
          <p>20 minutes ago</p>
        </div>
        <div className="dashboard-content5">
          <img src={profile} alt="Profile" />
          <p>Ms. Johnson assigned new English Literature homework</p>
          <p>20 minutes ago</p>
        </div>
      </div>
      </div>
      <div className="dashboard-right">
      <div className="calendar">
        <div>
          <p>◀️</p>
          <p>September 2030</p>
          <p>▶️</p>
        </div>
        <p>sun</p>
        <p>mon</p>
        <p>tue</p>
        <p>wed</p>
        <p>thu</p>
        <p>fri</p>
        <p>sat</p>
        <div className="calendar-content">
          <p>19</p>
          <p>20</p>
          <p>21</p>
          <p>22</p>
          <p>23</p>
          <p>24</p>
          <p>25</p>
        </div>
        <div>
          <h3>Agenda</h3>
          <img src={agenda} alt="Agenda" />
          <img src={agenda} alt="Agenda" />
          <img src={agenda} alt="Agenda" />
        </div>
      </div>
      <div className="calendar-content">
        <div>
          <img src={profile} alt="" />
          <h3>Dr. Lila Ramirez</h3>
          <p>
            Please ensure the monthly attendance report is accurate before the
            April 30th deadline.
          </p>
        </div>
        <div>
          <img src={profile} alt="" />
          <h3>Dr. Lila Ramirez</h3>
          <p>
            Please ensure the monthly attendance report is accurate before the
            April 30th deadline.
          </p>
        </div>
        <div>
          <img src={profile} alt="" />
          <h3>Dr. Lila Ramirez</h3>
          <p>
            Please ensure the monthly attendance report is accurate before the
            April 30th deadline.
          </p>
        </div>
        <div>
          <img src={profile} alt="" />
          <h3>Dr. Lila Ramirez</h3>
          <p>
            Please ensure the monthly attendance report is accurate before the
            April 30th deadline.
          </p>
        </div>
        <div>
          <img src={profile} alt="" />
          <h3>Dr. Lila Ramirez</h3>
          <p>
            Please ensure the monthly attendance report is accurate before the
            April 30th deadline.
          </p>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
