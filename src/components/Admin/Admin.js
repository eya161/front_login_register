import React from 'react';
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FcViewDetails } from "react-icons/fc";
import { RiDeleteBin5Line } from "react-icons/ri";
import '../Commande/CommandeTab.css';
import Pagination from 'react-bootstrap/Pagination';
import SearchAdmin from './SearchAdmin';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Sidebar/Navbar';
import axios from 'axios';

export default function Admin() {
    const [user, setuser] = useState([])
    // const navigate = useNavigate();
    const getUserData = async () => {
        try {
            const userInfo = localStorage.getItem("userInfo");
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };
            console.log(config);
            const data = await axios.get(
                "https://127.0.0.1:8000/getuserbyRole",config
            );
            console.log(data)
            console.log(data.data);
            setuser(data.data.users);
            
        } catch (e) {
            console.log(e);
        }
    };
    console.log(user);

    

    // const getImageData = async () => {
    //     try {
    //         const userInfo = localStorage.getItem("userInfo");
    //         const config = {
    //             headers: {
    //                 'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
    //             },
    //         };
    //         console.log(config);
    //         const data = await axios.get(
    //             `https://127.0.0.1:8000/api/userimage/${user[1]}`,config
    //         );
    //         console.log(data)
    //         console.log(data.data);
    //         setimages(data.data)
            
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

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

    useEffect((id) => {
        getUserData();
    }, [])
    
    return (
        <div >
            <Navbar />
            <br />
            <SearchAdmin />
            <div class="container horizontal-scrollable" >
                <div class="row text-center">
                    <Table striped bordered hover >
                        <thead style={{ background: '#CBC0D3' }}>
                            <tr>
                                <th>Photo</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Téléphone</th>
                                <th>Roles</th>
                                <th>Date de création</th>
                                <th>Editer</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                        {user
                                .map((item) => {
                                    return (
                            <tr key={item[0]}>
                                <td><img src={`https://127.0.0.1:8000/api/userimage/${item[0]}`} width="50px" alt='image'/></td>
                                <td>{item[1]}</td>
                                <td>{item[2]}</td>
                                <td>{item[3]}</td>
                                <td>{item[4]}</td>
                                <td>{item[5]}</td>
                                
                                <td>
                                    <Button variant="primary" type="details"  >
                                        <FcViewDetails />
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="danger" type="delete" style={{ marginLeft: '25px' }} onClick={()=>deleteData(item[0])}>
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
