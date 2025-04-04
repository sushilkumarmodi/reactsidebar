import React, { useState } from 'react';
import '../Sidebar.css'; // Ensure to include your CSS styles

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h3 className="brand">
          <i className="fas fa-anchor"></i>
          <span>MyApp</span>
        </h3>
        <div className="toggle-btn" onClick={toggleSidebar}>
          <i className={`fas ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'} toggle-icon`}></i>
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#" className="nav-item">
            <span className="nav-icon"><i className="fas fa-home"></i></span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-item">
            <span className="nav-icon"><i className="fas fa-user"></i></span>
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-item">
            <span className="nav-icon"><i className="fa-solid fa-chart-line"></i></span>
            <span>Dashboard</span>
          </a>
        </li>
        <li className={`dropdown ${activeDropdown === 0 ? 'active' : ''}`}>
          <a href="#" className="nav-item dropdown-toggle" onClick={() => toggleDropdown(0)}>
            <div>
              <span className="nav-icon"><i className="fas fa-cogs"></i></span>
              <span>Settings</span>
            </div>
            <i className={`fas ${activeDropdown === 0 ? 'fa-chevron-down' : 'fa-chevron-right'} dropdown-icon`}></i>
          </a>
          <ul className="dropdown-menu">
            <li><a href="#" className="dropdown-item">General</a></li>
            <li><a href="#" className="dropdown-item">Privacy</a></li>
            <li><a href="#" className="dropdown-item">Notifications</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;