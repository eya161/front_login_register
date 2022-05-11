import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FcViewDetails } from "react-icons/fc";
import { BsCheckCircle } from "react-icons/bs";
import { ImBlocked } from "react-icons/im";
import '../Commande/CommandeTab.css';
import Pagination from 'react-bootstrap/Pagination';
import SearchCategorie from './SearchCategorie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Sidebar/Navbar';
import axios from 'axios';

export default function () {
    const [category, setcategory] = useState([])
    const navigate = useNavigate();
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
                "https://127.0.0.1:8000/api/categories",config
            );
            console.log(data)
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
            `https://127.0.0.1:8000/api/categories/${id}`,config
        )
        console.log(data)
        window.location.reload()
       // let user = value.user.filter((item) => item.id != id);
    }

    // const updateContactHandler = async (category) => {
    //     const response = await axios.put(`http://127.0.0.1:8000/api/categories/${category.id}`, category);
    //     const { id, titre, statut } = response.data;
    //     setcategory(
    //         category.map((contact) => {
    //         return contact.id === id ? { ...response.data } : category;
    //       })
    //     );
    //   };

    // const setID = (id) =>{
    //     console.log(id);
    //     localStorage.setItem('ID',id);
    // }
    
    const editCategory=async(id) => {
        console.log(id);
        const userInfo = localStorage.getItem("userInfo");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        navigate(`/UpdateCategorie/${id}`);
    }

    useEffect(() => {
        getCategoryData();
      //  handleDelete();
    }, []);
    
   
    
    return (
        <div >
            <Navbar />
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
                                    if (item.statut === 0) {
                                        item.statut=<BsCheckCircle style={{color:'green'}}></BsCheckCircle>
                                    }else{
                                        if(item.statut===1){
                                        item.statut=<ImBlocked style={{color:'red'}}></ImBlocked>}
                                    }
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.titre}</td>
                                            <td>{item.statut}</td>
                                            <td>Admin </td>
                                            <td>{item.createdAt}</td>
                                            <td>
                                                <Button variant="primary" onClick={ () => editCategory(item.id)} >
                                                    
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