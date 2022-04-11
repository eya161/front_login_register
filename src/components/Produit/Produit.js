import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FcViewDetails } from "react-icons/fc";
import '../Commande/CommandeTab.css';
import Pagination from 'react-bootstrap/Pagination';
import ProduitSearch from './ProduitSearch';
import Sidebar from '../Sidebar/Sidebar';

export default function Produit() {
    return (
        <div >
            <Sidebar />
            <br />
            <ProduitSearch />
            <div class="container horizontal-scrollable" >
                <div class="row text-center">
                    <Table striped bordered hover >
                        <thead style={{ background: '#CBC0D3' }}>
                            <tr>
                                <th>Référence</th>
                                <th>Désignation</th>
                                <th>Description</th>
                                <th>Catégorie</th>
                                <th>Statuts</th>
                                <th>Créé par</th>
                                <th>Date de création</th>
                                <th>Editer</th>
                                <th>Supprimer</th>
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
                                <td>
                                    <Button variant="primary" type="details"  >
                                        <FcViewDetails />
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="danger" type="delete" style={{ marginLeft: '25px' }}>
                                        <RiDeleteBin5Line />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xs-4 col-lg-4"></div>
                    <div class="col-xs-4 col-lg-4" style={{ display: 'block', width: 700 }}>
                        <Pagination>
                            <Pagination.Prev />
                            <Pagination.Ellipsis />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Next />
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    )
}
