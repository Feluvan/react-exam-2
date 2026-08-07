import React from "react";
import { TbMessagesFilled } from "react-icons/tb";
import {
  FaBell,
  FaRobot,
  FaTrophy,
  FaThumbsUp,
  FaRegEye,
  FaSlidersH,
} from "react-icons/fa";
import profileimg from "../../assets/Profile Picture.png";
import "./Dashboard.css";
import profile from "../../assets/Profile Picture (1).png";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

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
          <div className="dashboard-row-1">
            <div className="chart-card students-card">
              <div className="chart-card-header">
                <h3>Students</h3>
                <MoreHorizIcon className="card-menu-icon" />
              </div>
              <div className="pie-wrapper">
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 47, color: "#8ecdf0" },
                        { id: 1, value: 53, color: "#f6c945" },
                      ],
                      innerRadius: 55,
                      outerRadius: 85,
                      paddingAngle: 3,
                      cornerRadius: 8,
                    },
                  ]}
                  width={190}
                  height={190}
                  slotProps={{ legend: { hidden: true } }}
                  tooltip={{ trigger: "none" }}
                />
                <div className="pie-center-icon">
                  <GroupsRoundedIcon />
                </div>
              </div>
              <div className="colors">
                <div className="color">
                  <span
                    className="dot"
                    style={{ background: "#8ecdf0" }}
                  />
                  <div>
                    <b>45.414</b>
                    <p>Boys (47%)</p>
                  </div>
                </div>
                <div className="color">
                  <span
                    className="dot"
                    style={{ background: "#f6c945" }}
                  />
                  <div>
                    <b>40.270</b>
                    <p>Girls (53%)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="chart-card attendance-card">
              <div className="chart-card-header">
                <h3>Attendance</h3>
                <div className="chart-filters">
                  <button className="filter-btn">
                    Weekly <KeyboardArrowDownIcon fontSize="inherit" />
                  </button>
                  <button className="filter-btn">
                    Grade 3 <KeyboardArrowDownIcon fontSize="inherit" />
                  </button>
                </div>
              </div>
              <div className="top-colors">
                <span>
                  <span
                    className="dot"
                    style={{ background: "#f6c945" }}
                  />
                  Total Present
                </span>
                <span>
                  <span
                    className="dot"
                    style={{ background: "#8ecdf0" }}
                  />
                  Total Absent
                </span>
              </div>
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                  },
                ]}
                series={[
                  { data: [64, 78, 95, 70, 82], color: "#f6c945" },
                  { data: [48, 66, 88, 60, 74], color: "#8ecdf0" },
                ]}
                height={230}
                margin={{ left: 30, right: 10, top: 10, bottom: 24 }}
                borderRadius={6}
                slotProps={{ legend: { hidden: true } }}
              />
            </div>
          </div>

          <div className="dashboard-row-2">
            <div className="chart-card earnings-card">
              <div className="chart-card-header">
                <h3>Earnings</h3>
                <div className="top-colors">
                  <span>
                    <span
                      className="dot"
                      style={{ background: "#8ecdf0" }}
                    />
                    Income
                  </span>
                  <span>
                    <span
                      className="dot"
                      style={{ background: "#c7b6f5" }}
                    />
                    Expense
                  </span>
                </div>
              </div>
              <LineChart
                xAxis={[
                  {
                    scaleType: "point",
                    data: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                    ],
                  },
                ]}
                yAxis={[{ min: 0, max: 1000000 }]}
                series={[
                  {
                    data: [
                      420000, 680000, 520000, 780000, 610000, 720000, 590000,
                      837000, 700000,
                    ],
                    color: "#8ecdf0",
                    showMark: false,
                    curve: "natural",
                  },
                  {
                    data: [
                      300000, 420000, 380000, 500000, 460000, 470000, 400000,
                      500000, 480000,
                    ],
                    color: "#c7b6f5",
                    showMark: false,
                    curve: "natural",
                  },
                ]}
                height={260}
                margin={{ left: 50, right: 20, top: 20, bottom: 24 }}
                slotProps={{ legend: { hidden: true } }}
              />
            </div>

            <div className="stat-cards-col">
              <div className="stat-card">
                <div
                  className="stat-icon-box"
                  style={{ background: "#e4e1ff" }}
                >
                  <SchoolRoundedIcon style={{ color: "#7c6ae0" }} />
                </div>
                <div className="stat-card-info">
                  <h2>24,680</h2>
                  <p>Olympic Students</p>
                  <span className="stat-badge">+15%</span>
                </div>
              </div>
              <div className="stat-card">
                <div
                  className="stat-icon-box"
                  style={{ background: "#d9f5e6" }}
                >
                  <AssignmentRoundedIcon style={{ color: "#2fb475" }} />
                </div>
                <div className="stat-card-info">
                  <h2>3,000</h2>
                  <p>New Assignments</p>
                </div>
              </div>
            </div>
          </div>

          <div className="activity-row">
            <div className="chart-card">
              <div className="chart-card-header">
                <h3>Student Activity</h3>
                <a className="view-all">View All</a>
              </div>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-icon" style={{ background: "#dcf0ff" }}>
                    <FaRobot />
                  </span>
                  <div>
                    <b>Regional Robotics Champion</b>
                    <p>Winning robots triumph in engineering challenge</p>
                    <span className="activity-time">2 days ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon" style={{ background: "#ece5ff" }}>
                    <FaTrophy />
                  </span>
                  <div>
                    <b>Won Regional Debate Competition</b>
                    <p>Debate team's compelling arguments reach national stage</p>
                    <span className="activity-time">10 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon" style={{ background: "#fff3d6" }}>
                    <FaThumbsUp />
                  </span>
                  <div>
                    <b>2nd Place at Science State Fair</b>
                    <p>Science Club claims silver at science showcase</p>
                    <span className="activity-time">3 weeks ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="chart-card">
              <div className="chart-card-header">
                <h3>Notice Board</h3>
                <FaSlidersH className="card-menu-icon" />
              </div>
              <div className="notice-list">
                <div className="notice-item">
                  <span className="notice-thumb" />
                  <b className="notice-title">Math Olympiad Competition</b>
                  <span className="notice-date">04/18/2030</span>
                  <span className="notice-by">By Ms. Jackson (Math Teacher)</span>
                  <span className="notice-views">
                    <FaRegEye /> 325
                  </span>
                </div>
                <div className="notice-item">
                  <span className="notice-thumb" />
                  <b className="notice-title">Yearbook Photo Submissions Wanted</b>
                  <span className="notice-date">04/15/2030</span>
                  <span className="notice-by">By Yearbook Committee</span>
                  <span className="notice-views">
                    <FaRegEye /> 587
                  </span>
                </div>
                <div className="notice-item">
                  <span className="notice-thumb" />
                  <b className="notice-title">Reminder: School Play Auditions This Week</b>
                  <span className="notice-date">04/12/2030</span>
                  <span className="notice-by">By Mr. Rodriguez (Drama Teacher)</span>
                  <span className="notice-views">
                    <FaRegEye /> 1.2K
                  </span>
                </div>
                <div className="notice-item">
                  <span className="notice-thumb" />
                  <b className="notice-title">Lost and Found Overflowing!</b>
                  <span className="notice-date">04/10/2030</span>
                  <span className="notice-by">By School Administration</span>
                  <span className="notice-views">
                    <FaRegEye /> 492
                  </span>
                </div>
                <div className="notice-item">
                  <span className="notice-thumb" />
                  <b className="notice-title">Important Update: School Uniform Policy</b>
                  <span className="notice-date">04/09/2030</span>
                  <span className="notice-by">By Principal Smith</span>
                  <span className="notice-views">
                    <FaRegEye /> 192
                  </span>
                </div>
              </div>
            </div>

            <div className="chart-card">
              <div className="chart-card-header">
                <h3>Recent Activity</h3>
                <a className="view-all">View All</a>
              </div>
              <p className="section-label">Today</p>
              <div className="recent-list">
                <div className="recent-item">
                  <span className="recent-avatar" />
                  <div>
                    <p>Ms. Johnson assigned new English Literature homework</p>
                    <span className="activity-time">20 minutes ago</span>
                  </div>
                </div>
                <div className="recent-item">
                  <span className="recent-avatar" />
                  <div>
                    <p>David Lee already submitted quiz in History</p>
                    <span className="activity-time">1 hour ago</span>
                  </div>
                </div>
                <div className="recent-item">
                  <span className="recent-avatar" />
                  <div>
                    <p>Permission Slip Reminder: Science Museum Field Trip</p>
                    <span className="activity-time">3 hours ago</span>
                  </div>
                </div>
                <div className="recent-item">
                  <span className="recent-avatar" />
                  <div>
                    <p>Permission Slip Reminder: Science Museum Field Trip</p>
                    <span className="activity-time">5 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-right">
          <div className="calendar">
            <div className="calendar-header">
              <button className="calendar-nav-btn">
                <ChevronLeftIcon fontSize="small" />
              </button>
              <p className="calendar-month">September 2030</p>
              <button className="calendar-nav-btn">
                <ChevronRightIcon fontSize="small" />
              </button>
            </div>
            <div className="calendar-days-row">
              <div className="calendar-day">
                <span className="day-label">Sun</span>
                <span className="day-num">19</span>
              </div>
              <div className="calendar-day">
                <span className="day-label">Mon</span>
                <span className="day-num">20</span>
              </div>
              <div className="calendar-day">
                <span className="day-label">Tue</span>
                <span className="day-num">21</span>
              </div>
              <div className="calendar-day active">
                <span className="day-label">Wed</span>
                <span className="day-num">22</span>
              </div>
              <div className="calendar-day">
                <span className="day-label">Thu</span>
                <span className="day-num">23</span>
              </div>
              <div className="calendar-day">
                <span className="day-label">Fri</span>
                <span className="day-num">24</span>
              </div>
              <div className="calendar-day">
                <span className="day-label">Sat</span>
                <span className="day-num">25</span>
              </div>
            </div>
            <div className="agenda-section">
              <div className="agenda-header">
                <h3>Agenda</h3>
                <MoreHorizIcon className="card-menu-icon" />
              </div>
              <div className="agenda-list">
                <div className="agenda-item" style={{ background: "#ece5ff" }}>
                  <span className="agenda-time">08:00 am</span>
                  <div>
                    <b>All Grade</b>
                    <p>Homeroom & Announcement</p>
                  </div>
                </div>
                <div className="agenda-item" style={{ background: "#fff3d6" }}>
                  <span className="agenda-time">10:00 am</span>
                  <div>
                    <b>Grade 3-5</b>
                    <p>Math Review & Practice</p>
                  </div>
                </div>
                <div className="agenda-item" style={{ background: "#dcf0ff" }}>
                  <span className="agenda-time">10:30 am</span>
                  <div>
                    <b>Grade 6-8</b>
                    <p>Science Experiment & Discussion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="calendar-messages">
            <div>
              <img src={profile} alt="" />
              <h3>Dr. Lila Ramirez</h3>
              <p>
                Please ensure the monthly attendance report is accurate
                before the April 30th deadline.
              </p>
            </div>
            <div>
              <img src={profile} alt="" />
              <h3>Dr. Lila Ramirez</h3>
              <p>
                Please ensure the monthly attendance report is accurate
                before the April 30th deadline.
              </p>
            </div>
            <div>
              <img src={profile} alt="" />
              <h3>Dr. Lila Ramirez</h3>
              <p>
                Please ensure the monthly attendance report is accurate
                before the April 30th deadline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
