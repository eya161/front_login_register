import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FcViewDetails } from "react-icons/fc";
import '../Commande/CommandeTab.css';
import Pagination from 'react-bootstrap/Pagination';
import SearchClient from './SearchClient';
import Navbar from '../Sidebar/Navbar';
import { BsCheckCircle } from "react-icons/bs";
import { ImBlocked } from "react-icons/im";
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

    const deleteData = async (id) => {
        const userInfo = localStorage.getItem("userInfo");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        let data = await axios.delete(
            `https://127.0.0.1:8000/api/users/${id}`,config
        )
        console.log(data)
        window.location.reload()
       // let user = value.user.filter((item) => item.id != id);
    }

    useEffect(() => {
        getClientData();
    }, [])
    

    return (
        <div >
            <Navbar />
            <br />
            <SearchClient />
            <br />
            <div class="container horizontal-scrollable" >
                <div class="row text-center">
                    <Table striped bordered hover>
                        <thead style={{ background: '#CBC0D3' }}>
                            <tr>
                                <th>Photo</th>
                                <th>Information générales</th>
                                <th>Statut</th>
                                <th>Voir détails</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
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
                                <td><img src={`https://127.0.0.1:8000/api/userimage/${item.id}`} width="50px" alt='image'/></td>
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
                                <td>{item.statut}</td>
                                <td>
                                    <Button variant="primary" type="details"  >
                                        <FcViewDetails />
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="danger" type="delete" onClick={()=>deleteData(item.id)} style={{ marginLeft: '25px' }}>
                                        <RiDeleteBin5Line />
                                    </Button>
                                </td>
                            </tr>
                                    )})}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
