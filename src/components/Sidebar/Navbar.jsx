import React, { useState , useEffect } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

import { IconContext } from "react-icons";

// ROUTING

import { Link, useNavigate } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Navbar.css";
import { basePlacements } from "@popperjs/core";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const history = useNavigate();
  const handleLogout = () => {
      localStorage.removeItem('userInfo');
      history("/Login");
  };
 

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }} >
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li>
                <h2 href="/Dashboard" style={{textAlign:'center', color:"#fff", fontSize:"20px"}}> <b>GMJ</b> </h2>
                <hr/>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} style={{height: '45px'}}>
                  <Link to={item.path} >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li onClick={handleLogout} style={{padding:"8px 0 8px 16px", color:"#fff", fontSize:"18px", height: '45px',cursor:"pointer"}} className="hovring">
                <BiIcons.BiLogOutCircle />  <h7 style={{padding:"0 10px"}}> Logout</h7>
            </li>
            <li>
                <hr/>
                <p style={{textAlign:'center', color:"#fff"}}>&copy; Tanit Web-2022</p>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
