import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FcViewDetails } from "react-icons/fc";
import '../Commande/CommandeTab.css';
import Pagination from 'react-bootstrap/Pagination';
import SearchCategorie from './SearchCategorie';
import Sidebar from '../Sidebar/Sidebar';
import axios, { Axios } from 'axios';
import { config } from '@fortawesome/fontawesome-svg-core';

export default function () {
    const [category, setcategory] = useState([])
    const getCategoryData = async () => {
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
                "http://127.0.0.1:8000/api/categories",config
            );
            console.log(data.data);
            setcategory(data.data);
        } catch (e) {
            console.log(e);
        }
    };

    // const handleDelete=async(id)=>{
    //     const userInfo = localStorage.getItem("userInfo");
    //     const config = {
    //         headers: {
    //             'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
    //         },
    //     };
    // const {data}= await axios.delete(
    //         `http://127.0.0.1:8000/api/categories/${id}`,config
    //     )
    //     console.log(data);
    // //    setcategory(category.filter(item=>item.id !==category.id))

    // }

    const deleteData = async (id) => {
        const userInfo = localStorage.getItem("userInfo");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        let data = await axios.delete(
            `http://127.0.0.1:8000/api/categories/${id}`,config
        )
        console.log(data)
       // let user = value.user.filter((item) => item.id != id);
    }

    useEffect(() => {
        getCategoryData();
      //  handleDelete();
    }, []);
    
   
    
    return (
        <div >
            <Sidebar />
            <br />
            <SearchCategorie />
            <div class="container horizontal-scrollable" >
                <div class="row text-center">
                    <Table striped bordered hover >
                        <thead style={{ background: '#CBC0D3' }}>
                            <tr>
                                <th>Titre</th>
                                <th>Statut</th>
                                <th>Créé par</th>
                                <th>Date de création</th>
                                <th>Editer</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {category
                                .map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.titre}</td>
                                            <td>{item.statut}</td>
                                            <td>Admin </td>
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
