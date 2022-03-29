import React from 'react';
import './Dashboard.css';
import team from './team.png';
import order from './box.png';
import product from './product.png';
import Table from 'react-bootstrap/Table';
import { MdNotifications } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";

export default function Dashboard() {
    return (
        <div class="maincontainer" style={{ marginLeft: '15px' }}>
            <div class="row">
                <nav aria-label="breadcrumb" class="main-breadcrumb mb-5" style={{ marginTop: '15px' }}>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/Forum">Acceuil</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                        <div class="row" style={{ marginLeft: '1020px' }}>
                            <div class="col-lg-6">
                                <li>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ borderRadius: '30px', background: "linear-gradient(to right, rgb(57, 115, 133),rgb(45, 94, 109),rgb(29, 61, 71))", width: "85%" }}>
                                            <MdNotifications />
                                            <span class="label label-success" id="notificationNumber">0</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1"></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </div>
                            <div class="col-lg-6" style={{ marginLeft: '-5px' }}>
                                <li>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ borderRadius: '30px', background: "linear-gradient(to right, rgb(57, 115, 133),rgb(45, 94, 109),rgb(29, 61, 71))", width: "85%" }}>
                                            <CgProfile />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/Profil">Profil</Dropdown.Item>
                                            <Dropdown.Item href="/Login">Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </div>
                        </div>
                    </ol>
                </nav>
            </div>
            <div class="row" style={{ marginLeft: '100px' }}>

                <div class="col-lg-1 mb-3 "></div>
                <div class="col-lg-3 mb-3 ">
                    <div class="content">
                        <div class="content-overlay"></div> <img class="content-image" src={team} />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Utilisateurs</h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 mb-3">
                    <div class="content">
                        <div class="content-overlay"></div> <img class="content-image" src={order} />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Commandes</h3>
                        </div></div>
                </div>
                <div class="col-lg-3 mb-3">
                    <div class="content">
                        <div class="content-overlay"></div> <img class="content-image" src={product} />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">Produits</h3>
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
                            <label style={{fontFamily:'bold', fontSize:'20px'}}>Date de début:</label>
                            <Form.Control className="border" type="date" placeholder="jj/mm/aaaa" />
                        </Form.Group>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <Form.Group className="" controlId="date">
                            <label style={{fontFamily:'bold', fontSize:'20px'}}>Date de fin:</label>
                            <Form.Control className="border" type="date" placeholder="jj/mm/aaaa" />
                        </Form.Group>
                    </div>
                    <div class="col-lg-1 mb-4" style={{marginTop:'30px'}}>
                        <Button variant="primary" type="submit" className="button">
                            <FaSearch />
                        </Button>
                    </div>
                </div>
            </Form>
            <div >
                <div class="row text-center">
                    <div class="col-xs-12 col-sm-6 col-xl-6 mb-3">
                        <Table striped bordered hover >
                            <thead style={{ background: 'beige' }}>
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
                            <thead style={{ background: 'beige' }}>
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
    )
}
