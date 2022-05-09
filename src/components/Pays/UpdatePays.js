import React from 'react';
import {useState, useEffect} from 'react';
import '../Profil/ProfilEdit.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Sidebar from '../Sidebar/Sidebar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Sidebar/Navbar';

export default function PaysForum() {
    const navigate = useNavigate();
    const [label, setlabel] = useState("")
    const [code, setcode] = useState("")
    const [statut, setstatut] = useState(0)
    const [pays, setpays] = useState([])
    const { id } = useParams();
    const [error, setError] = useState("")
    const [loading, setloading] = useState("")
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
            axios.get(`https://127.0.0.1:8000/api/pays/${id}`,config)
                .then(res => {
                    console.log(res);
                    setpays(res.data);
                    setlabel(res.data.label);
                    setcode(res.data.code)
                    setstatut(res.data.statut)
                })
                .catch(err => {
                    console.log(err)
                })
            
        }
    }, []);
    console.log(id)
    console.log(pays.label)
    console.log(pays.code)
    console.log(pays.statut)

    const update = async(id) => {
        const userInfo = localStorage.getItem("userInfo");
        console.log("id:",id);
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        const data = await axios.put(`http://127.0.0.1:8000/api/pays/${id}`,
        {
            label,
            code,
            statut
        }, config)
        .then((res) => {
            navigate('/Pays');
        })
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
                                <li class="breadcrumb-item"><a href="/Pays">Liste des pays</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Ajouter Pays</li>
                            </ol>
                        </nav>
                        <br />
                        <br />
                        <br />
                        <Form onSubmit={update(id)}>
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        {error && <ErrorMessage />}
                                        {loading && <Loading />}
                                        <div class="row mb-4">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Nom de pays:</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input 
                                                    type="text" 
                                                    class="form-control"
                                                    name='label'
                                                    defaultValue={label}
                                                    onChange={(e)=> setlabel(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code de pays:</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input 
                                                    type="text" 
                                                    class="form-control"
                                                    name='code'
                                                    defaultValue={code}
                                                    onChange={(e)=> setcode(e.target.value)} />
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
                                <Button variant="primary" type="submit" className="button" style={{ fontFamily: 'bold', fontSize: '19px', background: '#4A4E69' }}>
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
