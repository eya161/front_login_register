import React from 'react';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FcViewDetails } from "react-icons/fc";
import '../Commande/CommandeTab.css';
import ProduitSearch from './ProduitSearch';
import { useNavigate } from 'react-router-dom';
import { BsCheckCircle } from "react-icons/bs";
import { ImBlocked } from "react-icons/im";
import axios from 'axios';
import Navbar from '../Sidebar/Navbar';

export default function Produit() {
    const [produits, setproduits] = useState([])
    const navigate = useNavigate();
    const getProduitData = async () => {
        try {
            const data = await axios.get(
                "https://127.0.0.1:8000/getallproduit"
            );
            console.log(data.data);
            setproduits(data.data.produits);
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
            `https://127.0.0.1:8000/api/produits/${id}`, config
        )
        console.log(data)
        window.location.reload()
    }

    useEffect(() => {
        getProduitData();
    }, []);
    return (
        <div >
            <Navbar />
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
                            {produits
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
                                            <td>{item.reference}</td>
                                            <td>{item.designation}</td>
                                            <td>{item.description}</td>
                                            <td>{item.categorie}</td>
                                            <td>{item.statut}</td>
                                            <td>Admin</td>
                                            <td>{item.createdAt}</td>
                                            <td>
                                                <Button variant="primary" type="details"  >
                                                    <FcViewDetails />
                                                </Button>
                                            </td>
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
