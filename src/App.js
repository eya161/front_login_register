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
import UpdateCategorie from './components/Categorie/UpdateCategorie';
import UpdatePays from './components/Pays/UpdatePays';
import LoginPage from './components/LoginPage/LoginPage';
import LoginPrinter from './components/LoginPage/LoginPrinter';
import NavbarUser from './components/Navbar/NavbarUser';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ClientGMJ from './components/ClientGMJ/Client';
import AddClient from './components/ClientGMJ/AddClient';
import ModifyClient from './components/ClientGMJ/ModifyClient';
import CommandeGMJ from './components/CommandeGMJ/Commande';
import Statistique from './components/StatistiqueGMJ/Statistique';

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
          <Route path="/UpdateCategorie/:id" element={<UpdateCategorie />} />
          <Route path="/UpdatePays/:id" element={<UpdatePays />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/LoginPrinter" element={<LoginPrinter />} />
          <Route path="/NavbarUser" element={<NavbarUser />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/ClientGMJ" element={<ClientGMJ />} />
          <Route path="/AddClient" element={<AddClient />} />
          <Route path="/ModifyClient" element={<ModifyClient />} />
          <Route path="/CommandeGMJ" element={<CommandeGMJ />} />
          <Route path="/Statistique" element={<Statistique />} />
        </Routes>      
    </Router>
  );
}

export default App;
