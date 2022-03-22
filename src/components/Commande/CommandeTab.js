import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FcViewDetails } from "react-icons/fc";
import Forum from '../Forum/Forum';

export default function CommandeTab() {
    return (
        <div class="maincontainer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                    <ul class="breadcrumb" style={{background:'beige',marginTop:'15px'}}>
                        <li>
                            <a href="Forum.js">Acceuil</a>
                        </li>
                        <li class="active">
                            / Liste des Commandes
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="row" style={{ marginTop: '20px' }}>
                    < div class="col-sm-10 mb-4"></div>
                    <div class="col-sm-2 mb-4">
                        <Button variant="primary" type="add">
                            Ajouter
                        </Button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12" style={{ marginTop: '20px' }} >
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Date de Commande</th>
                                    <th>Référence Commerciale</th>
                                    <th>Quantité</th>
                                    <th>RS Facturation</th>
                                    <th>Ville</th>
                                    <th>Code Client</th>
                                    <th>Référence Produit</th>
                                    <th>Désignation</th>
                                    <th>Statut Commande</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div class="container">
                                            <div class="row flex">
                                                <div class="col-lg-2 mb-1" >
                                                    <Button variant="primary" type="details"  >
                                                        <FcViewDetails />
                                                    </Button>
                                                </div>

                                                <div class="col-lg-2 mb-1"> 
                                                    <Button variant="danger" type="delete" style={{ marginLeft:'25px' }}>
                                                        <RiDeleteBin5Line />
                                                    </Button>

                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                    </div>
                </div>
            </div>
        </div>
    )
}
