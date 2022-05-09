import React from 'react';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FcViewDetails } from "react-icons/fc";
import { BsCheckCircle } from "react-icons/bs";
import { ImBlocked } from "react-icons/im";
import '../Commande/CommandeTab.css';
import Pagination from 'react-bootstrap/Pagination';
import SearchPays from './SearchPays';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Sidebar/Navbar';

export default function Pays() {
    const [pays, setpays] = useState([])
    const navigate = useNavigate();
    const getPaysData = async () => {
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
                "https://127.0.0.1:8000/api/pays",config
            );
            console.log(data.data);
            setpays(data.data);
        } catch (e) {
            console.log(e);
        }
    };

    const editCountry=async(id) => {
        console.log(id);
        const userInfo = localStorage.getItem("userInfo");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        navigate(`/UpdatePays/${id}`);
    }

    useEffect(() => {
        getPaysData();
      //  handleDelete();
    }, []);
  return (
    <div >
        <Navbar />
    <br />
    <SearchPays />
    <div class="container horizontal-scrollable" >
        <div class="row text-center">
            <Table striped bordered hover >
                <thead style={{ background: '#CBC0D3' }}>
                    <tr>
                        <th>Pays</th>
                        <th>Code</th>
                        <th>Statut</th>
                        <th>Créé par</th>
                        <th>Date de création</th>
                        <th>Editer</th>
                    </tr>
                </thead>
                <tbody>
                {pays
                    .map((item) => {
                        if (item.statut === 0) {
                            item.statut=<BsCheckCircle style={{color:'green'}}></BsCheckCircle>
                        }else{
                            if(item.statut===1){
                            item.statut=<ImBlocked style={{color:'red'}}></ImBlocked>}
                        }
                     return (
                    <tr>
                        <td>{item.label}</td>
                        <td>{item.code}</td>
                        <td>{item.statut}</td>
                        <td>Admin</td>
                        <td>{item.createdAt}</td>
                        <td>
                            <Button variant="primary" type="details" onClick={ () => editCountry(item.id)} >
                                <FcViewDetails />
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
