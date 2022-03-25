import './App.css';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CommandeTab from './components/Commande/CommandeTab';
import Sidebar from './components/Sidebar/Sidebar';
// import Login from './components/LoginTemp/Login';
// import Forum from './components/Forum/Forum';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        {/* <CommandeTab /> */}
        {/* <Login/> */}
        {/* <Forum /> */}
      </div>
    </Router>
  );
}

export default App;
