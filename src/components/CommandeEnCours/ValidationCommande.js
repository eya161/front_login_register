import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import NavbarUser from '../Navbar/NavbarUser';
import Footer from '../Footer/Footer';
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function ValidationCommande() {
    const { id } = useParams();
    const [commande, setcommande] = useState([])
    const navigate = useNavigate();
    const [smShow, setSmShow] = useState(false);
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
    const visualiserpiece = async () => {
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
            <div className="container" style={{ paddingBottom: '100px' }}>
                <div className="row mb-1">
                    <nav aria-label="breadcrumb" className="mb-5" style={{ marginTop: '15px', backgroundColor: '#c9def7be ' }}>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/Home">Acceuil</a></li>
                            <li className="breadcrumb-item"><a href="/CommandeEncours">Liste des Commandes en Cours</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Détails</li>
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
                            <div key={item.id}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Référence Dossier: <b>{item.reference}</b></h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Référence Commerciale: <b>{item.referencecommerciale}</b></h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Statut: <b>{item.statut}</b></h6>
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
                                                <h6 className="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Informations Client</h6>
                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code Client: <b>{item.codeclient}</b></h6>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Groupement: <b>{item.groupement}</b></h6>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Personne à contacter: <b>{item.personnecontacter}</b></h6>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Email: <b>{item.email}</b></h6>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Téléphone <b>{item.telephone}</b></h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Port: <b>{item.pôrt}</b></h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Fax: <b>{item.fax}</b></h6>
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
                                                    <h6 className="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Facturation</h6>
                                                    <div className="col-sm-12 mb-3">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>RS Facturation: <b>{item.rs_facturation}</b></h6>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-sm-12">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 1: <b>{item.adressfacturation1}</b></h6>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-sm-12">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 2: <b>{item.adressfacturation2}</b></h6>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Ville: <b>{item.villefacturation}</b></h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code Postal: <b>{item.codepostalfacturation}</b></h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Pays:</h6><b></b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <h6 className="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Livraison</h6>
                                                    <div className="col-sm-12 mb-3">
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
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Date de Commande: <b>{item.createdAt}</b></h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Référence et Désignation du Produit:<b>{item.reference}</b></label>|<b>{item.designation}</b>
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
                                                    <h6 className="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Fichier BAT:</h6>
                                                    <div className="col-sm-6 mb-3">
                                                        <b><img src={`https://127.0.0.1:8000/api/pieceJointe/${item.id}`} width="100px" alt='image' /></b>
                                                    </div>
                                                    <div className="col-sm-6 mb3">
                                                        <Button variant="primary" type="submit" onClick={() => visualiserpiece(item.id)} className="button" style={{ fontFamily: 'bold', fontSize: '19px', backgroundColor: '#004b88b6' }}>
                                                            Visualiser
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <Form.Select
                                                        aria-label="Default select example"
                                                        required

                                                    >
                                                        <option value='0' onClick={() => setSmShow(true)}>Confirmé</option>
                                                        <option value='1'>Réfusé</option>
                                                    </Form.Select>
                                                    <Modal
                                                        size="sm"
                                                        show={smShow}
                                                        onHide={() => setSmShow(false)}
                                                        aria-labelledby="example-modal-sizes-title-sm"
                                                    >
                                                        <Modal.Header closeButton>
                                                            <Modal.Title id="example-modal-sizes-title-sm">
                                                                Small Modal
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>...</Modal.Body>
                                                    </Modal>
                                                </div>
                                                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog" role="document">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                ...
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-primary">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Text à repiquer: <b>{item.texterepiquer}</b></label>
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
                                                    <h6 className="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Liste des fichiers graphiques:</h6>
                                                    <div className="col-sm-6 mb-3">
                                                        <b><img src={`https://127.0.0.1:8000/api/pieceJointe/${item.id}`} width="100px" alt='image' /></b>
                                                    </div>
                                                    <div className="col-sm-6 mb3">
                                                        <Button variant="primary" type="submit" onClick={() => visualiserpiece(item.id)} className="button" style={{ fontFamily: 'bold', fontSize: '19px', backgroundColor: '#004b88b6' }}>
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
                                </div>
                            </div>
                        )
                    })}
            </div>
            <Footer />
        </>
    )
}
