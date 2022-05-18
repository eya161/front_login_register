import React, { useState, useEffect } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";

import { IconContext } from "react-icons";

// ROUTING

import { Link, useNavigate } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Navbar.css";
import { basePlacements } from "@popperjs/core";
import { NavDropdown } from "react-bootstrap";
import axios from "axios";

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [nbvalide, setnbvalide] = useState(0);
    const [nbimpression, setnbimpression] = useState(0);
    const [nblivraison, setnblivraison] = useState(0);

    const showSidebar = () => setSidebar(!sidebar);

    const history = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        history("/Login");
    };

    const getNbvalideData = async () => {
        try {
            const userInfo = localStorage.getItem("userInfo");
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };
            console.log(config);
            const data = await axios.get(
                "https://127.0.0.1:8000/api/commandes/getcountcommandeenattentedevalidation",config
            );
            console.log(data.data.nbcommandeenattentedevalidation);
            setnbvalide(data.data.nbcommandeenattentedevalidation);
        } catch (e) {
            console.log(e);
        }
    };

    const getNbimpressionData = async () => {
        try {
            const userInfo = localStorage.getItem("userInfo");
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };
            console.log(config);
            const data = await axios.get(
                "https://127.0.0.1:8000/api/commandes/getcountcommandeenattenteimpression",config
            );
            console.log(data.data.nbcommandeenattenteimpression);
            setnbimpression(data.data.nbcommandeenattenteimpression);
        } catch (e) {
            console.log(e);
        }
    };

    const getlivraisonData = async () => {
        try {
            const userInfo = localStorage.getItem("userInfo");
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };
            console.log(config);
            const data = await axios.get(
                "https://127.0.0.1:8000/api/commandes/getcountcommandeenattentelivraison",config
            );
            console.log(data.data.nbcommandeenattentelivraison);
            setnblivraison(data.data.nbcommandeenattentelivraison);
        } catch (e) {
            console.log(e);
        }
    };
    
    useEffect(() => {
        getNbvalideData();
        getNbimpressionData();
        getlivraisonData();
        return()=>{
            setnbvalide(nbvalide);
            setnbimpression(nbimpression);
            setnblivraison(nblivraison);
        }
    }, [])
    

    return (
        <>
            <IconContext.Provider value={{ color: "#FFF" }} >
                {/* All the icons now are white */}
                <div className="navbars">
                    <a>
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link></a>
                    <a style={{marginRight:'400px'}}>
                        <NavDropdown color='white' title={<><MdIcons.MdNotificationsNone style={{fontSize:'36px'}}/><b style={{color:'#fff'}}>{nbvalide+nblivraison+nbimpression}</b></>} id="collasible-nav-dropdown" style={{marginTop:"5px"}} >
                            <NavDropdown.Item key={nbvalide}>Attente de validation: {nbvalide}</NavDropdown.Item>
                            <NavDropdown.Item key={nbimpression}>En cours d'impression: {nbimpression}</NavDropdown.Item>
                            <NavDropdown.Item key={nblivraison}>En cours de livraison: {nblivraison}</NavDropdown.Item>
                        </NavDropdown>
                    </a>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <li>
                            <h2 href="/Dashboard" style={{ textAlign: 'center', color: "#fff", fontSize: "20px" }}> <b>GMJ</b> </h2>
                            <hr />
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName} style={{ height: '45px' }}>
                                    <Link to={item.path} >
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        <li onClick={handleLogout} style={{ padding: "8px 0 8px 16px", color: "#fff", fontSize: "18px", height: '45px', cursor: "pointer" }} className="hovring">
                            <BiIcons.BiLogOutCircle />  <h7 style={{ padding: "0 10px" }}> Logout</h7>
                        </li>
                        <li>
                            <hr />
                            <p style={{ textAlign: 'center', color: "#fff" }}>&copy; Tanit Web-2022</p>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}
