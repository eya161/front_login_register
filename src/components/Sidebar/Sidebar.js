import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', background: '#eff5f8ad', marginTop:'-20px', position:'sticky' }}>
      <CDBSidebar textColor="#fff" backgroundColor="linear-gradient(to right, rgb(98, 182, 203),rgb(0, 126, 167),rgb(27, 73, 101))">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="../Commande/CommandeTab.js" className="text-decoration-none" style={{ color: 'inherit' }}>
            GMJ
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact tag={Link} to="/Dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink tag={Link} to="/Produit" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Produits</CDBSidebarMenuItem>
            </NavLink>
            <NavLink tag={Link} to="/Categorie" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Catégories</CDBSidebarMenuItem>
            </NavLink>
            <NavLink tag={Link} to="/Pays" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Pays</CDBSidebarMenuItem>
            </NavLink>
            <NavLink tag={Link} to="/Admin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Administrateur</CDBSidebarMenuItem>
            </NavLink>
            <NavLink tag={Link} to="/Client" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Client</CDBSidebarMenuItem>
            </NavLink>
            <NavLink tag={Link} to="CommandeTab" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Commandes</CDBSidebarMenuItem>
            </NavLink>
            <NavLink tag={Link} to="/Profil" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profil</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
           &copy; Tanit Web-2022
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

