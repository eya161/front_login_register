import React from 'react';
import {useState, useEffect} from 'react';
import './Dashboard.css';
import team from './team.png';
import order from './box.png';
import product from './product.png';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

export default function Dashboard() {
    const [client, setclient] = useState([])
    const [commande, setcommande] = useState([])
    const [produit, setproduit] = useState([])
    const getClientData = async () => {
        try {
            const userInfo = localStorage.getItem("userInfo");
          //  console.log(userInfo);
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };
            console.log(config);
            const data = await axios.get(
                `http://127.0.0.1:8000/api/users/?roles=["ROLE_USER"]`,config
            );
            console.log(data.data);
            setclient(data.data);
        } catch (e) {
            console.log(e);
        }
    };

    const getCommandeData = async () => {
        try {
            const userInfo = localStorage.getItem("userInfo");
          //  console.log(userInfo);
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };
            console.log(config);
            const data = await axios.get(
               "http://127.0.0.1:8000/api/commandes",config
            );
            console.log(data.data);
            setcommande(data.data);
        } catch (e) {
            console.log(e);
        }
    };

    const getProduitData = async () => {
        try {
            const userInfo = localStorage.getItem("userInfo");
          //  console.log(userInfo);
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };
            console.log(config);
            const data = await axios.get(
               "http://127.0.0.1:8000/api/produits",config
            );
            console.log(data.data);
            setproduit(data.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getClientData();
        getCommandeData();
        getProduitData();
    }, []);

    return (
        <div class="main">
            <div class="row">
                <div class="col-sm-2">
                    <Sidebar /></div>
                <div class="col-sm-1"></div>
                <div class="col-sm-9">
                    <div class="container">
                        <div class="main-body">
                            <div class="row">
                                <nav aria-label="breadcrumb" class="main-breadcrumb mb-5" style={{ marginTop: '15px' }}>
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="/Forum">Acceuil</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                                        {/* <div class="col-lg-1" style={{ marginLeft: '760px' }}>
                                            <li>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ borderRadius: '30px', background: "linear-gradient(to right, rgb(98, 182, 203),rgb(0, 126, 167),rgb(27, 73, 101))", width: "59%" }}>
                                                        <MdNotifications />
                                                        <span class="label label-success" id="notificationNumber">0</span>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1"></Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </li>
                                        </div> */}
                                        {/* <div class="col-lg-1" style={{ marginLeft: '-20px' }} >
                                            <li>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ borderRadius: '30px', background: "linear-gradient(to right, rgb(98, 182, 203),rgb(0, 126, 167),rgb(27, 73, 101))" }}>
                                                        <CgProfile />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="/Profil">Profil</Dropdown.Item>
                                                        <hr />
                                                        <Dropdown.Item href="/Login">Logout</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </li>
                                        </div> */}
                                    </ol>
                                </nav>
                            </div>
                            <div class="row" style={{ marginLeft: '100px' }}>

                                <div class="col-lg-1 mb-3 "></div>
                                <div class="col-lg-3 mb-3 ">
                                    <div class="content">
                                        <div class="content-overlay"></div> <img alt="users" class="content-image" src={team} />
                                        <div class="content-details fadeIn-bottom">
                                            <h3 class="content-title" style={{ fontFamily:'bold', fontSize: '20px', color:'black' }}>{client.length}</h3><h3 class="content-title" style={{ fontFamily:'bold', fontSize: '20px', color:'black' }}>Utilisateurs</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 mb-3">
                                    <div class="content">
                                        <div class="content-overlay"></div> <img alt="orders" class="content-image" src={order} />
                                        <div class="content-details fadeIn-bottom">
                                            <h3 class="content-title" style={{ fontFamily:'bold', fontSize: '20px', color:'black' }}>{commande.length}</h3><h3 class="content-title" style={{ fontFamily:'bold', fontSize: '20px', color:'black' }}>Commandes</h3>
                                        </div></div>
                                </div>
                                <div class="col-lg-3 mb-3">
                                    <div class="content">
                                        <div class="content-overlay"></div> <img alt="products" class="content-image" src={product} />
                                        <div class="content-details fadeIn-bottom">
                                            <h3 class="content-title" style={{ fontFamily:'bold', fontSize: '20px', color:'black' }}>{produit.length}</h3><h3 class="content-title" style={{ fontFamily:'bold', fontSize: '20px', color:'black' }}>Produits</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <Form>
                                <div class="row flex">
                                    <div class="col-lg-1 mb-4" style={{ marginLeft: '60px' }}></div>
                                    <div class="col-lg-4 mb-4">
                                        <Form.Group className="" controlId="date">
                                            <label style={{ fontFamily: 'bold', fontSize: '20px' }}>Date de début:</label>
                                            <Form.Control className="border" type="date" placeholder="jj/mm/aaaa" />
                                        </Form.Group>
                                    </div>
                                    <div class="col-lg-4 mb-4">
                                        <Form.Group className="" controlId="date">
                                            <label style={{ fontFamily: 'bold', fontSize: '20px' }}>Date de fin:</label>
                                            <Form.Control className="border" type="date" placeholder="jj/mm/aaaa" />
                                        </Form.Group>
                                    </div>
                                    <div class="col-lg-1 mb-4" style={{ marginTop: '30px' }}>
                                        <Button variant="primary" type="submit" className="button" style={{ background: "linear-gradient(to right, rgb(98, 182, 203),rgb(0, 126, 167),rgb(27, 73, 101))" }}>
                                            <FaSearch />
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                            <div >
                                <div class="row text-center">
                                    <div class="col-xs-12 col-sm-6 col-xl-6 mb-3">
                                        <Table striped bordered hover >
                                            <thead style={{ background: '#CBC0D3' }}>
                                                <tr>
                                                    <th colSpan={3}>
                                                        Clients/Produits</th>
                                                </tr>
                                                <tr>
                                                    <th>RS Facturation</th>
                                                    <th>Nbr Commande</th>
                                                    <th>Montant Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-xl-6 mb-3">
                                        <Table striped bordered hover>
                                            <thead style={{ background: '#CBC0D3' }}>
                                                <tr>
                                                    <th colSpan={3}>
                                                        Produits/Commandes
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>Référence</th>
                                                    <th>Quantité</th>
                                                    <th>Nbr Commande</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div></div>
    )
}
