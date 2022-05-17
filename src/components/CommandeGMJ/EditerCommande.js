import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavbarUser from '../Navbar/NavbarUser';
import Footer from '../Footer/Footer';
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function AddBAT() {
    const { id } = useParams();
    const [commande, setcommande] = useState([])
    const navigate=useNavigate();
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
    const visualisergraph=async()=>{
        console.log(id);
        const userInfo = localStorage.getItem("userInfo");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        navigate(`/Visualisergraph/${id}`);
    }
    const visualiserpiece=async()=>{
        console.log(id);
        const userInfo = localStorage.getItem("userInfo");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        navigate(`/Visualiserpiece/${id}`);
    }
    useEffect(() => {
        getCommandeData(id);
    }, [])

    return (
        <>
            <NavbarUser />
            <div class="container" style={{ paddingBottom: '100px' }}>
                <div class="row mb-1">
                    <nav aria-label="breadcrumb" class="mb-5" style={{ marginTop: '15px', backgroundColor: '#c9def7be ' }}>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/Home">Acceuil</a></li>
                            <li class="breadcrumb-item"><a href="/CommandeGMJ">Liste des nouveaux commandes</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Modifier la commande</li>
                        </ol>
                    </nav>
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
                            <Form /*onSubmit={submitHandler}*/ key={item.id}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card" style={{ backgroundColor: '#c9def7be ' }}>
                                            <div class="card-body">
                                                <div class="row mb-3">
                                                    <div class="col-sm-4">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Référence Commerciale: <b>{item.referencecommerciale}</b></h6>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Référence Client: <b>{item.codeclient}</b></h6>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Groupement: <b>{item.groupement}</b></h6>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <div class="col-sm-4">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Personne à contacter: <b>{item.personnecontacter}</b></h6>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Fax: <b>{item.fax}</b></h6>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Statut: <b>{item.statut}</b></h6>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <div class="col-sm-12">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Téléphone: <b>{item.telephone}</b></h6>
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
                                                    <div class="col-sm-12 mb-3">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>RS Facturation: <b>{item.rs_facturation}</b></h6>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <div class="col-sm-12">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 1: <b>{item.adressfacturation1}</b></h6>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <div class="col-sm-12">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 2: <b>{item.adressfacturation2}</b></h6>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <div class="col-sm-4">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Ville: <b>{item.villefacturation}</b></h6>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code Postal: <b>{item.codepostalfacturation}</b></h6>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Pays:</h6><b></b>
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
                                                    <div class="col-sm-12 mb-3">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>RS Livraison: <b>{item.rslivraison}</b></h6>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <div class="col-sm-12">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 1: <b>{item.adresslivraison1}</b></h6>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <div class="col-sm-12">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 2: <b>{item.adresslivraison2}</b></h6>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <div class="col-sm-4">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Ville: <b>{item.villelivraison}</b></h6>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code Postal: <b>{item.codepostallivraison}</b></h6>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Pays:</h6><b></b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card" style={{ backgroundColor: '#c9def7be ' }}>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-sm-8">
                                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Date de Commande: <b>{item.createdAt}</b></h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Référence Produit:</label>
                                                        <Select
                                                        // options={reference}
                                                        // onChange={(e) => setSelectedRefID(e.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <hr />
                                                <div class="row mb-3">
                                                    <div class="col-sm-2">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Prix d'achat H.T(€):</label>
                                                        <input
                                                            type="code"
                                                            class="form-control"
                                                        />
                                                    </div>
                                                    <div class="col-sm-2">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Frais de port H.T(€):</label>
                                                        <input
                                                            type="code"
                                                            class="form-control"
                                                        />
                                                    </div>
                                                    <div class="col-sm-3">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Prix de vente H.T(€):</label>
                                                        <input
                                                            type="code"
                                                            class="form-control"
                                                        />
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Quantité:</label>
                                                        <Select
                                                        // options={quantity}
                                                        // onChange={(e) => setSelectedQuantityID(e.value)}
                                                        />
                                                    </div>
                                                    <div class="col-sm-3">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Total(€):</label>
                                                        <input
                                                            type="code"
                                                            class="form-control"
                                                        />
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
                                                    <h6 class="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Liste des fichiers graphiques:</h6>
                                                    <div class="col-sm-6 mb-3">
                                                        <b><img src={`https://127.0.0.1:8000/api/pieceJointe/${item.id}`} width="100px" alt='image'/></b>
                                                    </div>
                                                    <div class="col-sm-6 mb3">
                                                        <Button variant="primary" type="submit" onClick={()=>visualiserpiece(item.id)} className="button" style={{ fontFamily: 'bold', fontSize: '19px', backgroundColor: '#004b88b6' }}>
                                                            Visualiser
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="card" style={{ backgroundColor: '#c9def7be ' }}>
                                            <div class="card-body">
                                                <div class="row mb-3">
                                                    <h6 class="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Liste des fichiers BAT:</h6>
                                                    <div class="col-sm-6 mb-3">
                                                        <b><img src={`https://127.0.0.1:8000/api/fichierGraphique/${item.id}`} width="100px" alt='image'/></b>
                                                    </div>
                                                    <div class="col-sm-6 mb3">
                                                        <Button variant="primary" type="submit" onClick={()=>visualisergraph(item.id)} className="button" style={{ fontFamily: 'bold', fontSize: '19px', backgroundColor: '#004b88b6' }}>
                                                            Visualiser
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                        )
                    })}
            </div>
            <Footer />
        </>
    )
}
