import React from 'react';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ErrorMessagePWD from '../ErrorMessage/ErrorMessagePWD';
import NavbarUser from '../Navbar/NavbarUser';
import Footer from '../Footer/Footer';
import { GrAdd } from 'react-icons/gr';
import { FaSearch } from 'react-icons/fa';
import { FcViewDetails } from 'react-icons/fc';
import { RiDeleteBin5Line } from 'react-icons/ri';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import {useNavigate, useParams} from 'react-router-dom';

export default function ClientForum() {
    const [password, setpassword] = useState("");
    const [password2, setpassword2] = useState("");
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();
    const [pays, setpays] = useState([])
    const [commande, setcommande] = useState([])
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
                `https://127.0.0.1:8000/api/pays/?statut=0`, config
            );
            console.log(data.data);
            setpays(data.data);
        } catch (e) {
            console.log(e);
        }
    };

    const getCommandeData = async (id) => {
        try {
            // const userInfo = localStorage.getItem("userInfo");
            // console.log("id:", id);
            // //  console.log(userInfo);
            // const config = {
            //     headers: {
            //         'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            //     },
            // };
            // console.log(config);
            const data = await axios.get(
                `https://127.0.0.1:8000/getcommandebyidproduituser/${id}`
            );
            console.log(data.data);
            setcommande(data.data.commandes);
        } catch (e) {
            console.log(e);
        }
    };


    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setpassword("");
            setpassword2("");
            return setError("Password do not match")
        } else {
            setMessage(null)
        }
    }

    const editCategory=async(id) => {
        console.log(id);
        const userInfo = localStorage.getItem("userInfo");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        navigate(`/AjoutCommande/${id}`);
    }

    useEffect(() => {
        getPaysData();
        getCommandeData(id);
        //  handleDelete();
    }, [])

    return (
        <>
            <NavbarUser />
            <div class="container" style={{ paddingBottom: '100px' }}>
                <div class="row mb-1">
                    <nav aria-label="breadcrumb" class="mb-5" style={{ marginTop: '15px', backgroundColor: '#c9def7be ' }}>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/Home">Acceuil</a></li>
                            <li class="breadcrumb-item"><a href="/ClientGMJ">Liste des Clients</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Modifier</li>
                        </ol>
                    </nav>
                </div>
                <div class="row mb-5">
                    <div class="col-md-10">
                        <h6 style={{ fontFamily: 'bold', fontSize: '35px' }}>Fiche de client</h6>
                    </div>
                </div>
                <Form onSubmit={submitHandler} >
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <div class="col-sm-7 mb-4" style={{ marginTop: '14px' }}>
                                            <div className="input-group col-sm-7" style={{ background: 'white', fontFamily: 'bold', fontSize: '18px' }}>
                                                <div className="input-group-prepend">
                                                </div>
                                                <div className="custom-file">
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="inputGroupFile01"
                                                    // aria-describedby="inputGroupFileAddon01"
                                                    // value={photo}
                                                    // onChange={(e)=> setPhoto(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-5">
                                            <div class="row flex">
                                                <div class="col-lg-12">
                                                    <div class="col-sm-2 col-lg-offset-2 mb-2" style={{ margintop: '-100px' }}>
                                                        <label style={{ fontFamily: 'bold', fontSize: '18px' }}>Statut</label>
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            style={{ backgroundColor: '#c9def7be ' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code Client:</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                required=''
                                            />
                                        </div>
                                        <div class="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Email:</label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                required=''
                                            />
                                        </div>
                                        <div class="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Groupement:</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Téléphone:</label>
                                            <input
                                                type="mobile"
                                                class="form-control"
                                            />
                                        </div>
                                        <div class="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Personne a contacté:</label>
                                            <input
                                                type="name"
                                                class="form-control"
                                            />
                                        </div>
                                        <div class="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Fax:</label>
                                            <input
                                                type="Fax"
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3 form-check">
                                        <div class="col-sm-6">
                                            <input
                                                id="Check1"
                                                type="checkbox"
                                                class="form-check-input"
                                            />
                                            <label for="Check1" class="form-check-label" style={{ float: 'left', fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Utiliser la même adresse pour la facturation et la livraison</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <h6 class="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Facturation</h6>
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>RS facturation:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                class="form-control"
                                                required=''
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 1:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="address"
                                                class="form-control"
                                                required=''
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 2:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="address"
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">

                                        <div class="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Ville:</label>
                                            <input
                                                type="country"
                                                class="form-control"
                                                required=''
                                            />
                                        </div>
                                        <div class="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code Postal:</label>
                                            <input
                                                type="code"
                                                class="form-control"
                                                required=''
                                            />
                                        </div>

                                        <div class="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Pays:</label>
                                            <Form.Select aria-label="Default select example" >
                                                {pays
                                                    .map((item) => {
                                                        return (
                                                            <option key={item.id} value={item.id} >{item.label}</option>
                                                        )
                                                    })}
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <h6 class="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Livraison</h6>
                                        <div class="col-sm-3 mb-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>RS livraison:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                class="form-control"
                                                required=''
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 1:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="address"
                                                class="form-control"
                                                required=''
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 2:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="address"
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Ville:</label>
                                            <input
                                                type="country"
                                                class="form-control"
                                                required=''
                                            />
                                        </div>
                                        <div class="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code Postal:</label>
                                            <input
                                                type="code"
                                                class="form-control"
                                                required=''
                                            />
                                        </div>
                                        <div class="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Pays:</label>
                                            <Form.Select aria-label="Default select example" >
                                                {pays
                                                    .map((item) => {
                                                        return (
                                                            <option key={item.id} value={item.id} >{item.label}</option>
                                                        )
                                                    })}
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1"></div>
                        <div class="col-lg-10">
                            <div class="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <h6 class="mb-4 text-center" style={{ fontFamily: 'bold', fontSize: '30px', color: 'black' }}>Paramètres</h6>
                                        {error && <ErrorMessagePWD />}
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Username:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="username"
                                                class="form-control"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Mot de Passe:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="password"
                                                class="form-control"
                                                required
                                                value={password}
                                                onChange={(e) => setpassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Mot de Passe à nouveau:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="password"
                                                class="form-control"
                                                required
                                                value={password2}
                                                onChange={(e) => setpassword2(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1"></div>
                        <div class="col-lg-10">
                            <div class="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Commentaire:</h6>
                                        </div>
                                        <Form.Group className="col-sm-9 mb-3" controlId="comment">
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Port:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                class="form-control"
                                                required=''
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-10 mb-3"></div>
                        <div class="col-md-2 mb-3">
                            <Button variant="primary" type="submit" className="button" style={{ fontFamily: 'bold', fontSize: '19px', backgroundColor: '#004b88b6' }}>
                                Enregistrer
                            </Button>
                        </div>
                    </div>
                </Form>
                <div class="row mb-5" style={{ padding: '20px 0' }}>
                    <div class="col-md-8"></div>
                    <div class="col-md-4">
                        <form >
                            <div class="input-group" style={{ height: '50%' }}>
                                <input type="text" placeholder="Entrer le numéro de commande" name="search" class="form-control" />
                                <div class="input-group-btn">
                                    <button class="btn btn-lg btn-primary" type="submit" style={{ backgroundColor: '#004b88b6' }}>
                                        <FaSearch />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mb-1">
                    <div class="col-md-9">
                        <h6 style={{ fontFamily: 'bold', fontSize: '35px' }}>Commandes en Cours</h6>
                    </div>
                    <div class="col-md-3">
                        <Button style={{ backgroundColor: '#004b88b6' }} type="submit" className="button" href='/AddClient'>
                            <GrAdd /> Nouvelle Commande
                        </Button>
                    </div>
                </div>
                <div class="container horizontal-scrollable" >
                    <div class="row text-center ">
                        <Table striped bordered hover>
                            <thead style={{ backgroundColor: '#c9def7be ' }}>
                                <tr>
                                    <th>N° commande</th>
                                    <th>Date de commande</th>
                                    <th>Réf du produit</th>
                                    <th>Désignation</th>
                                    <th>Quantités</th>
                                    <th>Statut commande</th>
                                    <th>N° Dossier</th>
                                    <th>Date d'impression</th>
                                    <th>ville de livraison</th>
                                    <th>RS de livraison</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {commande
                                .map((item) => {
                                    if (item.statut==10) {
                                        item.statut=<b>Commande en cours</b>
                                    }
                                    if (item.statut==1) {
                                        item.statut=<b>Nouvelle commande</b>
                                    }
                                    if (item.statut==2) {
                                        item.statut=<b>En Attente de validation</b>
                                    }
                                    if (item.statut==3) {
                                        item.statut=<b>Bat réfusé</b>
                                    }
                                    if (item.statut==4) {
                                        item.statut=<b>Bat Accepté</b>
                                    }
                                    if (item.statut==5) {
                                        item.statut=<b>En cours d'impression</b>
                                    }
                                    if (item.statut==6) {
                                        item.statut=<b>En cours de livraison</b>
                                    }
                                    if (item.statut==7  ) {
                                        item.statut=<b>Facturation</b>
                                    }
                                    return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.createdAt}</td>
                                    <td>{item.reference}</td>
                                    <td>{item.Designation}</td>
                                    <td>{item.quantite}</td>
                                    <td>{item.statut}</td>
                                    <td>{item.referencecommerciale}</td>
                                    <td>{item.dateimpression}</td>
                                    <td>{item.villelivraison}</td>
                                    <td>{item.rslivraison}</td>
                                    <td>
                                        <div class="container">
                                            <div class="row flex">
                                                <div class="col-lg-2 mb-1" >
                                                    <Button variant="primary" type="details" onClick={ () => editCategory(item.id)} >
                                                        <FcViewDetails />
                                                    </Button>
                                                </div>
                                                <div class="col-lg-2 mb-1">
                                                    <Button variant="danger" type="delete" style={{ marginLeft: '25px' }} /*onClick={() => deleteData(item.id)}*/>
                                                        <RiDeleteBin5Line />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                    )})}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
