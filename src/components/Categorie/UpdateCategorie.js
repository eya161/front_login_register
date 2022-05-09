import React from 'react';
import { useState, useEffect } from 'react';
import '../Profil/ProfilEdit.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import Navbar from '../Sidebar/Navbar';

export default function UpdateCategorie() {
    const navigate = useNavigate();
    const [titre, settitre] = useState("")
    const [statut, setstatut] = useState(0)
    const [category, setcategory] = useState([])
    const { id } = useParams();
    const [error, setError] = useState("")
    const [loading, setloading] = useState("")
    // const getById = async (id) => {
    //     try {
    //         const userInfo = localStorage.getItem("userInfo");
    //         console.log(id);
    //         // const Id = localStorage.getItem("ID");
    //         // console.log(Id);
    //         const config = {
    //             headers: {
    //                 'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
    //             },
    //         };
    //         console.log(config);
    //         const data = await axios.get(
    //             `http://127.0.0.1:8000/api/categories/${id}`, config
    //         );
    //         console.log(data.data);
    //         setcategory(data.data);
            
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    // console.log(category.titre);
    // console.log(category.statut);

    // useEffect(() => {
    //     getById();
    // }, [])

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
            console.log(id);
            // const Id = localStorage.getItem("ID");
            // console.log(Id);
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };
        if ( id ) {
            axios.get(`https://127.0.0.1:8000/api/categories/${id}`,config)
                .then(res => {
                    console.log(res);
                    setcategory(res.data);
                    settitre(res.data.titre);
                    setstatut(res.data.statut)
                })
                .catch(err => {
                    console.log(err)
                })
            
        }
    }, []);
    console.log(id)
    console.log(category.titre)
    console.log(category.statut)

    const update = async(id) => {
        const userInfo = localStorage.getItem("userInfo");
        // const Id = localStorage.getItem("ID");
        console.log("id:",id);
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        const data = await axios.put(`https://127.0.0.1:8000/api/categories/${id}`,
        {
            titre,
            statut
        }, config)
        .then((res) => {
            // console.log(data)
            // console.log(res.data)
            // setcategory(res.data)
        })
        navigate('/Categorie');
    }

    return (
        <>
            <Navbar />
            <div class="container">
                <div class="main-body">
                    <div class="row">
                        <nav aria-label="breadcrumb" class="main-breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/Dashboard">Acceuil</a></li>
                                <li class="breadcrumb-item"><a href="/Categorie">Liste des catégories</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Ajouter Catégorie</li>
                            </ol>
                        </nav>
                        <br />
                        <br />
                        <br />
                        <Form>
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        {error && <ErrorMessage />}
                                        {loading && <Loading />}
                                <div class="row mb-4">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Nom de Catégorie:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            name='titre'
                                            defaultValue={titre}
                                            onChange={(e)=> settitre(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Statut:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <Form.Select 
                                            aria-label="Default select example"
                                            name='statut'
                                            defaultValue={statut}
                                            value={statut}
                                            onChange={(e)=> setstatut(parseInt(e.target.value))}
                                        >
                                            {console.log('satut',typeof(statut))}
                                            <option value='0'>Activé</option>
                                            <option value='1'>Bloqué</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                    </div>
                                </div>
                            </div>
                              
                            <div class="col-md-10 mb-3"></div>
                            <div class="col-md-1 mb-3">
                                <Button variant="primary" type="submit" onClick={()=>update(id)} className="button" style={{ fontFamily: 'bold', fontSize: '19px', background: '#4A4E69' }}>
                                    Enregistrer
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div >
        </>
    )
}