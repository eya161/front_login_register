import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AiOutlineProfile } from 'react-icons/ai';
import NavbarUser from '../Navbar/NavbarPrinter';
import Footer from '../Footer/FooterPrinter';
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function AddBAT() {
    const { id } = useParams();
    const [form, setform] = useState({})
    const [commande, setcommande] = useState([])
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const data = new FormData();

    // const onChangeHandler = (e) =>{
    //     setform({
    //         ...form,
    //         [e.target.name]:e.target.value,
    //     })
    // }

    const submitHandler = async (e) => {
        e.preventDefault();
        data.append('fichierBAT',form.fichierBAT)
        try {
            return axios.post(`https://127.0.0.1:8000/envoyerBAT/${id}`,
                data
            ),
                navigate("/CommandeEnCoursPrinter"),
                setError(false);
        } catch (error) {
            setError(error.response.data.message);
            setError(true);
        }
    };
    console.log(data)

    const getCommandeData = async (id) => {
        try {
            const data = await axios.get(
                `https://127.0.0.1:8000/getcommandebyid/${id}`
            );
            console.log(data.data);
            setcommande(data.data.commandes);
        } catch (e) {
            console.log(e);
        }
    };
    const visualisergraph = async () => {
        console.log(id);
        const userInfo = localStorage.getItem("userInfo");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        navigate(`/Visualisergraph/${id}`);
    }
    // const visualiserpiece = async () => {
    //     console.log(id);
    //     const userInfo = localStorage.getItem("userInfo");
    //     const config = {
    //         headers: {
    //             'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
    //         },
    //     };
    //     navigate(`/Visualiserpiece/${id}`);
    // }
    // const visualiserBAT = async () => {
    //     console.log(id);
    //     const userInfo = localStorage.getItem("userInfo");
    //     const config = {
    //         headers: {
    //             'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
    //         },
    //     };
    //     navigate(`/VisualiserBAT/${id}`);
    // }
    useEffect(() => {
        getCommandeData(id);
    }, [])

    return (
        <>
            <NavbarUser />
            <div className="container" style={{ paddingBottom: '100px' }}>
                <div className="row mb-1">
                    <nav aria-label="breadcrumb" className="mb-5" style={{ marginTop: '15px', backgroundColor: '#c9def7be ' }}>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/HomePrinter">Acceuil</a></li>
                            <li className="breadcrumb-item"><a href="/CommandeEnCoursPrinter">Liste des Commandes en Cours</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Détails</li>
                        </ol>
                    </nav>
                </div>
                <div class="row mb-5">
                    <div class="col-md-10">
                        <h6 style={{ fontFamily: 'bold', fontSize: '35px' }}>Commande en Cours</h6>
                    </div>
                </div>
                {commande
                    .map((item) => {
                        if (item.statut == 10) {
                            item.statut = <b>Commande en cours</b>
                        }
                        if (item.statut == 1) {
                            item.statut = <b>Nouvelle commande</b>
                        }
                        if (item.statut == 2) {
                            item.statut = <b>En Attente de validation</b>
                        }
                        if (item.statut == 3) {
                            item.statut = <b>Bat réfusé</b>
                        }
                        if (item.statut == 4) {
                            item.statut = <b>Bat Accepté</b>
                        }
                        if (item.statut == 5) {
                            item.statut = <b>En cours d'impression</b>
                        }
                        if (item.statut == 6) {
                            item.statut = <b>En cours de livraison</b>
                        }
                        if (item.statut == 7) {
                            item.statut = <b>Facturation</b>
                        }
                        return (
                            <div key={item.id}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className='col-sm-2'>
                                                        <AiOutlineProfile style={{ marginLeft: '15px', fontSize: '100px' }} />
                                                    </div>
                                                    <div className='col-sm-10'>
                                                        <div className='row mb-3'>
                                                            <div className="col-sm-4">
                                                                <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Référence Dossier:<b>{item.reference}</b></h6>
                                                            </div>
                                                            <div className="col-sm-5">
                                                                <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Statut: <b>{item.statut}</b></h6>
                                                            </div>
                                                            <div className="col-sm-2">
                                                                <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Numéro cliché:</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mb-3">
                                        <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <h6 className="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Livraison</h6>
                                                    <hr />
                                                    <div className="col-sm-12">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>RS Livraison: <b>{item.rslivraison}</b></h6>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-sm-12">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 1: <b>{item.adresslivraison1}</b></h6>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-sm-12">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 2: <b>{item.adresslivraison2}</b></h6>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Ville: <b>{item.villelivraison}</b></h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code Postal: <b>{item.codepostallivraison}</b></h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Pays:</h6><b></b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Date de commande: <b>{item.createdAt}</b></h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Référence: <b>{item.reference}</b></h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Désignation: <b>{item.designation}</b></h6>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Frais de port H.T(€): <b>{item.frais_port}</b></label>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Prix de vente H.T(€): <b>{item.prixvente}</b></label>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Quantité: <b>{item.quantite}</b></label>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Total(€): <b>{(item.frais_port + item.prixvente + item.prix_achat) * item.quantite}</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <h6 className="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Liste des fichiers BAT:</h6>
                                                    <div className="col-sm-6 mb-3">
                                                        <b><img src={`https://127.0.0.1:8000/api/fichierGraphique/${item.id}`} width="100px" alt='image' /></b>
                                                    </div>
                                                    <div className="col-sm-6 mb3">
                                                        <Button variant="primary" type="submit" onClick={() => visualisergraph(item.id)} className="button" style={{ fontFamily: 'bold', fontSize: '19px', backgroundColor: '#004b88b6' }}>
                                                            Visualiser
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col-sm-12">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Text à repiquer: <b>{item.texterepiquer}</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Form onSubmit={submitHandler}>
                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                            <div className="card-body">
                                                <div className='row'>
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Envoyer le BAT:</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary custom-file" style={{ background: 'white', fontFamily: 'bold', fontSize: '18px' }}>
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="inputGroupFile01"
                                                        name='image'
                                                        onChange={(e)=>setform({...data,fichierBAT:e.target.files[0]})}
                                                    />
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-10 mb-3"></div>
                                        <div className="col-md-2 mb-3">
                                            <Button variant="primary" type="submit" className="button" style={{ fontFamily: 'bold', fontSize: '19px', backgroundColor: '#004b88b6' }}>
                                                Enregistrer
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                </Form>
                            </div>
                        )
                    })}
            </div>
            <Footer />
        </>
    )
}
