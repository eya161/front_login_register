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
import Navbar from '../Sidebar/Navbar';

export default function CommandeTab() {

    const [commande, setcommande] = useState([])
    const getCommandeData = async () => {
        try {
            const data = await axios.get(
                "https://127.0.0.1:8000/getCommandesall"
            );
            console.log(data.data);
            setcommande(data.data.commandes);
        } catch (e) {
            console.log(e);
        }
    };
   
    const deleteData = async (id) => {
        const userInfo = localStorage.getItem("userInfo");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        let data = await axios.delete(
            `https://127.0.0.1:8000/api/commandes/${id}`, config
        )
        console.log(data)
        window.location.reload()
    }    
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
            <Navbar />
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
                        {commande
                                .map((item) => {
                                    if (item.statut == 10) {
                                        item.statut = <b>Commande en cours</b>
                                    }
                                    if (item.statut == 1) {
                                        item.statut = <b>Nouvelle commande</b>
                                    }
                                    if (item.statut == 2) {
                                        item.statut = <b>En Attente de validation</b>
                                    }
                                    if (item.statut == 3) {
                                        item.statut = <b>Bat réfusé</b>
                                    }
                                    if (item.statut == 4) {
                                        item.statut = <b>Bat Accepté</b>
                                    }
                                    if (item.statut == 5) {
                                        item.statut = <b>En cours d'impression</b>
                                    }
                                    if (item.statut == 6) {
                                        item.statut = <b>En cours de livraison</b>
                                    }
                                    if (item.statut == 7) {
                                        item.statut = <b>Facturation</b>
                                    }
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.createdAt}</td>
                                            <td>{item.referencecommerciale}</td>
                                            <td>{item.quantite}</td>
                                            <td>{item.rs_facturation}</td>
                                            <td>{item.villelivraison}</td>
                                            <td>{item.codeclient}</td>
                                            <td>{item.reference}</td>
                                            <td>
                                               {item.Designation}
                                            </td>
                                          <td>{item.statut}</td>
                                          <td>
                                                <Button variant="danger" type="delete" style={{ marginLeft: '25px' }} onClick={()=>deleteData(item.id)}>
                                                    <RiDeleteBin5Line />
                                                </Button>
                                            </td>                                          
                                        </tr>
                                    );
                                    })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
