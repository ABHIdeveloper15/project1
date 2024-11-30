import React, { useState } from "react";
import { FaHome, FaList, FaCalendar } from "react-icons/fa";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = [
    { icon: <FaHome />, name: "Home" },
    { icon: <FaList />, name: "Work Orders" },
    { icon: <FaCalendar />, name: "Calendar" },
  ];

  return (
    <div className={isExpanded ? styles.expanded : styles.collapsed}>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.icon}
            {isExpanded && <span>{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
