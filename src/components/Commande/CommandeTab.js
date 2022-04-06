import React from 'react';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FcViewDetails } from "react-icons/fc";
import Search from './Search';
import './CommandeTab.css';
import Pagination from 'react-bootstrap/Pagination';
import axios from "axios";

export default function CommandeTab() {

    const [commandes, setCommandes] = useState([])

    const fetchCommandes = async() =>{
        const {data}=await axios.get('/getall')
        setCommandes(data)
    };
    console.log(commandes)
    useEffect(() => {
      fetchCommandes();
    }, [])
    
    return (
        <div >
            <br />
                <Search />
            <br />
            <div class="container horizontal-scrollable" >
                <div class="row text-center">
                    <Table striped bordered hover>
                        <thead style={{ background: 'beige' }}>
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
                                                <Button variant="danger" type="delete" style={{ marginLeft: '25px' }}>
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
