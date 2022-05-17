import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Pays from '../Pays/Pays';
import Navbar from '../Sidebar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './Profil.css';
import avatar from './profile.png'

export default function Profil() {
    const [profil, setprofil] = useState([])
    const history=useNavigate()
    const getProfilData = async () => {
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
                `https://127.0.0.1:8000/api/users/?roles=["ROLE_ADMIN"]`,config
            );
            console.log(data.data);
            setprofil(data.data);
        } catch (e) {
            console.log(e);
        }
    };

    const editProfile=async(id) => {
        console.log(id);
        const userInfo = localStorage.getItem("userInfo");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        history(`/ProfilEdit/${id}`);
    }

    useEffect(() => {
        getProfilData();
    }, [])
    

    return (
        <>
        <Navbar />
        <div class="container">
            <div class="main-body">
                <nav aria-label="breadcrumb" class="main-breadcrumb" style={{ marginTop: '15px', background: '#CBC0D3' }}>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/Dashboard">Acceuil</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Profil</li>
                    </ol>
                </nav>
                <br/>
                <br/>
                {profil
                    .map((item) => {
                        return(
                <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src={avatar} alt="Admin" class="rounded-circle p-1" style={{backgroundColor:"#5a406d"}} width="150" />
                                    <div class="mt-3">
                                        <h4>{item.username}</h4>
                                        <p class="text-secondary mb-1">Super Administrateur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Username</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {item.username}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {item.email}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Mobile</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {item.telephone}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-12">
                                        <a class="btn" style={{backgroundColor:"#5a406d",color:"black"}} onClick={ () => editProfile(item.id)} >Edit</a>
                                    </div>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                        )})}
            </div>
        </div>
        </>
    )
}
