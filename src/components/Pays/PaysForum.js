import React from 'react';
import { useState } from 'react';
import '../Profil/ProfilEdit.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Sidebar from '../Sidebar/Sidebar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import axios from 'axios';
import Navbar from '../Sidebar/Navbar';
import { useNavigate } from 'react-router-dom';

export default function PaysForum() {
    const [label, setlabel] = useState("")
    const [code, setcode] = useState("")
    const [statut, setstatut] = useState(0)
    const [error, setError] = useState("")
    const [loading, setloading] = useState("")
    const history=useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const userInfo = localStorage.getItem("userInfo");
            console.log(userInfo);
            console.log("gffgfggf", userInfo.slice(10, userInfo.length - 2));

            const config = {
                headers: {
                    "Content-type": "application/json",
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };
            console.log(config);
            setloading(true);

            const { data } = await axios.post("https://127.0.0.1:8000/api/pays",
                {
                    label,
                    code,
                    statut,
                },
                config
            );
            setloading(false);
            setError(false);
            history("/Pays")
        } catch (error) {
            setError(error.response.data.message);
            setloading(false);
            setError(true);
        }
        console.log(label, code, statut);
    }

    return (
        <>
            <Navbar />
            <div class="container">
                <div class="main-body">
                    <div class="row">
                        <nav aria-label="breadcrumb" class="main-breadcrumb" style={{ background: '#CBC0D3' }}>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/Dashboard">Acceuil</a></li>
                                <li class="breadcrumb-item"><a href="/Pays">Liste des pays</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Ajouter Pays</li>
                            </ol>
                        </nav>
                        <br />
                        <br />
                        <div class="container">
                            <div class="row">
                                <Form onSubmit={submitHandler}>
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
                                                            required
                                                            value={label}
                                                            onChange={(e) => setlabel(e.target.value)} />
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
                                                            required
                                                            value={code}
                                                            onChange={(e) => setcode(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-sm-3">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Statut:</h6>
                                                    </div>
                                                    <div class="col-sm-9 text-secondary">
                                                        <Form.Select
                                                            aria-label="Default select example"
                                                            required
                                                            onChange={(e) => setstatut(parseInt(e.target.value))}
                                                        >
                                                            {console.log('satut', typeof (statut))}
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
                                        <Button variant="primary" type="submit" className="button" style={{ fontFamily: 'bold', fontSize: '19px', background: '#5a406d' }}>
                                            Enregistrer
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
