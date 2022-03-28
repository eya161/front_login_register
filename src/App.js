import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CommandeTab from './components/Commande/CommandeTab';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/LoginTemp/Login';
import Forum from './components/Forum/Forum';
import Dashboard from './components/Dashboard/Dashboard';
import Profil from './components/Profil/Profil';
import ProfilEdit from './components/Profil/ProfilEdit';
import ProfilPWD from './components/Profil/ProfilPWD';

function App() {
  return (
    <Router>
      <div className="App"></div>
        <Sidebar />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/CommandeTab" element={<CommandeTab />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/ProfilEdit" element={<ProfilEdit />} />
          <Route path="/ProfilPWD" element={<ProfilPWD />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        {/* <CommandeTab /> */}
        {/* <Login/> */}
        {/* <Forum /> */}
      
    </Router>
  );
}

export default App;
