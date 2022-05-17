import React from 'react';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavbarUser from '../Navbar/NavbarUser';
import { ImUserPlus } from 'react-icons/im';
import { Button, Table } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { BsCheckCircle } from "react-icons/bs";
import { ImBlocked } from "react-icons/im";
import './Client.css'
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Client() {
    const [client, setclient] = useState([])
    const navigate = useNavigate();
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
                `https://127.0.0.1:8000/api/users/?roles=["ROLE_CLIENT"]`,config
            );
            console.log(data)
            console.log(data.data);
            setclient(data.data);
        } catch (e) {
            console.log(e);
        }
    };

    const editCategory=async(id) => {
        console.log(id);
        const userInfo = localStorage.getItem("userInfo");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        navigate(`/ModifyClient/${id}`);
    }


    useEffect(() => {
        getClientData();
    }, [])

    return (
        <>
            <NavbarUser />
            <div class="maincontainer mainer">
                <div class="container">
                    <div class="row mb-1">
                        <nav aria-label="breadcrumb" class="mb-5" style={{ marginTop: '15px', backgroundColor: '#c9def7be ' }}>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/Home">Acceuil</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Liste des Clients</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-10">
                            <h6 style={{ fontFamily: 'bold', fontSize: '35px' }}>Liste des clients</h6>
                        </div>
                        <div class="col-md-2">
                            <Button style={{ backgroundColor: '#004b88b6' }} type="submit" className="button" href='/AddClient'>
                                <ImUserPlus /> Nouveau Client
                            </Button>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-8"></div>
                        <div class="col-md-4">
                            <form >
                                <div class="input-group" style={{ height: '50%' }}>
                                    <input type="text" placeholder="Entrer le code de client" name="search" class="form-control" />
                                    <div class="input-group-btn">
                                        <button class="btn btn-lg btn-primary" type="submit" style={{ backgroundColor: '#004b88b6' }}>
                                            <FaSearch />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="container horizontal-scrollable" >
                        <div class="row text-center">
                            <Table striped bordered hover>
                                <tbody>
                                {client
                        .map((item) => {
                                    if (item.statut === 0) {
                                        item.statut=<BsCheckCircle style={{color:'green', fontSize:'25px'}}></BsCheckCircle>
                                    }else{
                                        if(item.statut===1){
                                        item.statut=<ImBlocked style={{color:'red', fontSize:'25px'}}></ImBlocked>}
                                    }
                                    return(
                                    <tr key={item.id}>
                                        <td class="align-middle"><img src={`https://127.0.0.1:8000/api/userimage/${item.id}`} width="50px" alt='image'/></td>
                                        <td>
                                        <ul id='otis' style={{display:'table-cell'}}>
                                                <li>
                                                    <b class="term">Code Client:      </b>
                                                    {item.codeclient}
                                                </li>
                                                <li>
                                                    <b>Facturation:       </b>
                                                    {item.adressfacturation1}
                                                </li>
                                                <li>
                                                    <b>Livraison:</b>
                                                    {item.adresslivraison1}
                                                </li>
                                            </ul>
                                        </td>
                                        <td class="align-middle">
                                            <Button  type="details" style={{background:'#004b88b6'}} onClick={ () => editCategory(item.id)}>
                                                Détails
                                            </Button>
                                        </td>
                                        <td class="align-middle">{item.statut}</td>
                                    </tr>
                                    );
                                })
                            }
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
