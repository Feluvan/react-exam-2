import React from 'react'
import { TbMessagesFilled } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import profileimg from "../../assets/Profile Picture.png";
import "./Teachers.css";
import { GiDinosaurRex } from "react-icons/gi";
import { FaFrog } from "react-icons/fa";
import { VscSnake } from "react-icons/vsc";
import profile from "../../assets/Profile Picture (1).png";

 function Teachers() {
  return (
    <div>
      <div className="dashboard">
        <input className="search" type="text" placeholder="🔍Search" />
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
          <h1>All Teachers List</h1>
          <input className="search" type="text" placeholder="Search by ID, Name, or Subject" />
          <button className="dinosaur"><GiDinosaurRex /></button>
          <button className="frog"><FaFrog /></button>
          <button className="snake"><VscSnake /></button>
      </div>
      <div className="all-teacher">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Teacher Name</th>
              <th>School ID</th>
              <th>Subject</th>
              <th>Class(es)</th>
              <th>Phone Number</th>
              <th>Address</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="teacher-name">
                <img src={profile} alt="Teacher" />
                <div>
                  <p>Ms. Elizabeth Johnson</p>
                  <p>johnson@eduprohigh.edu</p>
                </div>
              </td>
              <td>SJ-ENG-123</td>
              <td>English Literature</td>
              <td>9A, 10B</td>
              <td>(555) 101-0101</td>
              <td>123 Elm St, Springfield, IL</td>
              
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="teacher-name">
                <img src={profile} alt="Teacher" />
                <div>
                  <p>Ms. Elizabeth Johnson</p>
                  <p>johnson@eduprohigh.edu</p>
                </div>
              </td>
              <td>SJ-ENG-123</td>
              <td>English Literature</td>
              <td>9A, 10B</td>
              <td>(555) 101-0101</td>
              <td>123 Elm St, Springfield, IL</td>
              
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="teacher-name">
                <img src={profile} alt="Teacher" />
                <div>
                  <p>Ms. Elizabeth Johnson</p>
                  <p>johnson@eduprohigh.edu</p>
                </div>
              </td>
              <td>SJ-ENG-123</td>
              <td>English Literature</td>
              <td>9A, 10B</td>
              <td>(555) 101-0101</td>
              <td>123 Elm St, Springfield, IL</td>
             
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="teacher-name">
                <img src={profile} alt="Teacher" />
                <div>
                  <p>Ms. Elizabeth Johnson</p>
                  <p>johnson@eduprohigh.edu</p>
                </div>
              </td>
              <td>SJ-ENG-123</td>
              <td>English Literature</td>
              <td>9A, 10B</td>
              <td>(555) 101-0101</td>
              <td>123 Elm St, Springfield, IL</td>
             
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="teacher-name">
                <img src={profile} alt="Teacher" />
                <div>
                  <p>Ms. Elizabeth Johnson</p>
                  <p>johnson@eduprohigh.edu</p>
                </div>
              </td>
              <td>SJ-ENG-123</td>
              <td>English Literature</td>
              <td>9A, 10B</td>
              <td>(555) 101-0101</td>
              <td>123 Elm St, Springfield, IL</td>
             
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="teacher-name">
                <img src={profile} alt="Teacher" />
                <div>
                  <p>Ms. Elizabeth Johnson</p>
                  <p>johnson@eduprohigh.edu</p>
                </div>
              </td>
              <td>SJ-ENG-123</td>
              <td>English Literature</td>
              <td>9A, 10B</td>
              <td>(555) 101-0101</td>
              <td>123 Elm St, Springfield, IL</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="teacher-name">
                <img src={profile} alt="Teacher" />
                <div>
                  <p>Ms. Elizabeth Johnson</p>
                  <p>johnson@eduprohigh.edu</p>
                </div>
              </td>
              <td>SJ-ENG-123</td>
              <td>English Literature</td>
              <td>9A, 10B</td>
              <td>(555) 101-0101</td>
              <td>123 Elm St, Springfield, IL</td>

            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="teacher-name">
                <img src={profile} alt="Teacher" />
                <div>
                  <p>Ms. Elizabeth Johnson</p>
                  <p>johnson@eduprohigh.edu</p>
                </div>
              </td>
              <td>SJ-ENG-123</td>
              <td>English Literature</td>
              <td>9A, 10B</td>
              <td>(555) 101-0101</td>
              <td>123 Elm St, Springfield, IL</td>

            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="teacher-name">
                <img src={profile} alt="Teacher" />
                <div>
                  <p>Ms. Elizabeth Johnson</p>
                  <p>johnson@eduprohigh.edu</p>
                </div>
              </td>
              <td>SJ-ENG-123</td>
              <td>English Literature</td>
              <td>9A, 10B</td>
              <td>(555) 101-0101</td>
              <td>123 Elm St, Springfield, IL</td>

            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="teacher-name">
                <img src={profile} alt="Teacher" />
                <div>
                  <p>Ms. Elizabeth Johnson</p>
                  <p>johnson@eduprohigh.edu</p>
                </div>
              </td>
              <td>SJ-ENG-123</td>
              <td>English Literature</td>
              <td>9A, 10B</td>
              <td>(555) 101-0101</td>
              <td>123 Elm St, Springfield, IL</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Teachers