import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as GoIcons from "react-icons/go";
import * as MdIcons from "react-icons/md";




export const SidebarData = [
  {
    title: "Dashboard",
    path: "/Dashboard",
    icon: <AiIcons.AiOutlineDashboard />,
    cName: "nav-text"
  },
  {
    title: "Produits",
    path: "/Produit",
    icon: <GoIcons.GoPackage />,
    cName: "nav-text"
  },
  {
    title: "Catégories",
    path: "/Categorie",
    icon: <MdIcons.MdOutlineCategory />,
    cName: "nav-text"
  },
  {
    title: "Pays",
    path: "/Pays",
    icon: <FaIcons.FaCity />,
    cName: "nav-text"
  },
  {
    title: "Administrateur",
    path: "/Admin",
    icon: <MdIcons.MdOutlineAdminPanelSettings />,
    cName: "nav-text"
  },
  {
    title: "Client",
    path: "/Client",
    icon: <AiIcons.AiOutlineUser />,
    cName: "nav-text"
  },
  {
    title: "Commandes",
    path: "/CommandeTab",
    icon: <AiIcons.AiOutlineShoppingCart />,
    cName: "nav-text"
  },
  {
    title: "Profil",
    path: "/Profil",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text"
  }
];
