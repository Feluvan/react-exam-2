import React from "react";
import { TbMessagesFilled } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import profileimg from "../../assets/Profile Picture.png";
import "./Attendance.css";
import row from "../../assets/row.png";
import row1 from "../../assets/row1.png";
import gitara from "../../assets/Rectangle 3.png";
import profile from "../../assets/Profile Picture (1).png";
import agenda from "../../assets/agenda.png";
export default function Attendance() {
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
      <div className="dashboard-content676767">
        <h1>Attendance</h1>
        <div className="attendance-filters">
          <select>
            <option>April 2024</option>
          </select>
          <select>
            <option>Week 2-3</option>
          </select>
          <select>
            <option>Class 11A</option>
          </select>
        </div>
      </div>
      <div className="all-attendance">
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>08</th>
              <th>09</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
              <th>16</th>
              <th>17</th>
              <th>18</th>
              <th>19</th>
              <th>20</th>
              <th>21</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lucas Johnson</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Lucas Johnson</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Lucas Johnson</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Lucas Johnson</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Lucas Johnson</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Lucas Johnson</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Lucas Johnson</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Lucas Johnson</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Lucas Johnson</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Lucas Johnson</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  );
}
