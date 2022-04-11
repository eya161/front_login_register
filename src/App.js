import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CommandeTab from './components/Commande/CommandeTab';
import Login from './components/LoginTemp/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Profil from './components/Profil/Profil';
import ProfilEdit from './components/Profil/ProfilEdit';
import ProfilPWD from './components/Profil/ProfilPWD';
import Client from './components/Client/Client';
import Produit from './components/Produit/Produit';
import ProdForum from './components/Produit/ProdForum';
import ClientForum from './components/Client/ClientForum';
import Categorie from './components/Categorie/Categorie';
import CategorieForum from './components/Categorie/CategorieForum';
import Admin from './components/Admin/Admin';
import AdminForum from './components/Admin/AdminForum';
import Pays from './components/Pays/Pays';
import PaysForum from './components/Pays/PaysForum';
import ForgetPWD from './components/ForgetPWD/ForgetPWD';
import NewPWD from './components/ForgetPWD/NewPWD';


function App() {
  return (
    <Router>
      <div className="App"></div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/CommandeTab" element={<CommandeTab />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/ProfilEdit" element={<ProfilEdit />} />
          <Route path="/ProfilPWD" element={<ProfilPWD />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Produit" element={<Produit />} />
          <Route path="/ProdForum" element={<ProdForum />} />
          <Route path="/ClientForum" element={<ClientForum />} />
          <Route path="/Categorie" element={<Categorie />} />
          <Route path="/CategorieForum" element={<CategorieForum />} />
          <Route path="/Pays" element={<Pays />} />
          <Route path="/PaysForum" element={<PaysForum />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/AdminForum" element={<AdminForum />} />
          <Route path="/ForgetPWD" element={<ForgetPWD />} />
          <Route path="/NewPWD" element={<NewPWD />} />
        </Routes>      
    </Router>
  );
}

export default App;
