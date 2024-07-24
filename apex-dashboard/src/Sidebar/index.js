
import React from 'react';
import { FaHome, FaUser, FaBook, FaChartLine } from 'react-icons/fa';
import './index.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <div className="logo">
        <img src='/Images/apex_logo.png' alt='logo' height={100}></img>
      </div>

      <hr></hr>
      <div className="menu-item">
        <FaHome />
        <span>Overview</span>
      </div>

      <hr></hr>
      <div className="menu-item active">
        <FaUser />
        <span>Registered Teachers</span>
      </div>

      <hr></hr>
      <div className="menu-item">
        <FaBook />
        <span>Courses</span>
      </div>

      <hr></hr>
      <div className="menu-item">
        <FaChartLine />
        <span>Teachers Progress</span>
      </div>
    </div>
  );
};

export default Sidebar;
