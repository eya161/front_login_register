import React from 'react';
import {useState, useEffect} from 'react'
import team from './users.jpg';
import order from './order.png';
import product from './order.jpg';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";
import NavbarUser from '../Navbar/NavbarUser';
import Footer from '../Footer/Footer';
import './Statistique.css'
import axios from 'axios';

export default function Statistique() {
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
        <>
        <NavbarUser />
        <div class="container" style={{paddingBottom:'100px'}}>
                <div class="row mb-2">
                    <nav aria-label="breadcrumb" class="mb-5" style={{ marginTop: '15px', backgroundColor: '#c9def7be ' }}>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/Home">Acceuil</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Statistique</li>
                        </ol>
                    </nav>
                </div>
                <div class="row mb-3" >
                    <div class="col-lg-4 mb-3 ">
                        <div class="content">
                            <div class="content-overlay"></div> <img alt="users" class="content-image" src={team} style={{width:'117%'}} />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title" style={{ fontFamily:'bold', fontSize: '20px', color:'black' }}>{client.length} Utilisateurs</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="content">
                            <div class="content-overlay"></div> <img alt="orders" class="content-image" src={order} style={{width:'102%'}} />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title" style={{ fontFamily:'bold', fontSize: '20px',  color:'black' }}>{commande.length}Commandes</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="content">
                            <div class="content-overlay"></div> <img alt="products" class="content-image" src={product} style={{width:'98%'}}/>
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title" style={{ fontFamily:'bold', fontSize: '20px',  color:'black' }}>{produit.length}Produits</h3>
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
                            <Button variant="primary" type="submit" className="button" style={{ backgroundColor: '#004b88b6' }}>
                                <FaSearch />
                            </Button>
                        </div>
                    </div>
                </Form>
                <div >
                    <div class="row text-center">
                        <div class="col-xs-12 col-sm-6 col-xl-6 mb-3">
                            <Table striped bordered hover >
                                <thead style={{ background: '#c9def7be' }}>
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
                                <thead style={{ background: '#c9def7be' }}>
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
        <Footer />
        </>
    )
}
