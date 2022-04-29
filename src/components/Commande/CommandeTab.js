import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FcViewDetails } from "react-icons/fc";
import { BsCheckCircle } from "react-icons/bs";
import { ImBlocked } from "react-icons/im";
import Search from './Search';
import './CommandeTab.css';
import Pagination from 'react-bootstrap/Pagination';
import axios from "axios";
import Sidebar from '../Sidebar/Sidebar';

export default function CommandeTab() {

    const [commandes, setcommandes] = useState([])
    const getCommandeData = async () => {
        try {
            const userInfo = localStorage.getItem("userInfo");
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };
            console.log(config);
            const data = await axios.get(
                "http://127.0.0.1:8000/api/commandes", config
            );
            console.log(data);
            setcommandes(data.data);
        } catch (e) {
            console.log(e);
        }
    };
    console.log(commandes)
    console.log(commandes.quantite)

    // const deleteData = async (id) => {
    //     const userInfo = localStorage.getItem("userInfo");
    //     const config = {
    //         headers: {
    //             'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
    //         },
    //     };
    //     let data = await axios.delete(
    //         `http://127.0.0.1:8000/api/commandes/${id}`, config
    //     )
    //     console.log(data)
    //     window.location.reload()
    // }

    useEffect(() => {
        getCommandeData();
    }, []);

    return (
        <div >
            <Sidebar />
            <br />
            <Search />
            <br />
            <div class="container horizontal-scrollable" >
                <div class="row text-center">
                    <Table striped bordered hover>
                        <thead style={{ background: '#CBC0D3' }}>
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
                            {commandes
                                .map((item) => {
                                    if (item.statut === 0) {
                                        item.statut = <BsCheckCircle style={{ color: 'green' }}></BsCheckCircle>
                                    } else {
                                        if (item.statut === 1) {
                                            item.statut = <ImBlocked style={{ color: 'red' }}></ImBlocked>
                                        }
                                    }
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.updatedAt}</td>
                                            <td>{item.reference_commerciale}</td>
                                            <td>{item.quantite}</td>
                                            <td>{item.RSfacturation}</td>
                                            <td>{item.ville}</td>
                                            <td></td>
                                            <td>{item.designation}</td>
                                            <td>{item.statut}</td>
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
                                                            <Button variant="danger" type="delete" style={{ marginLeft: '25px' }} /*onClick={() => deleteData(item.id)}*/>
                                                                <RiDeleteBin5Line />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            } 
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
