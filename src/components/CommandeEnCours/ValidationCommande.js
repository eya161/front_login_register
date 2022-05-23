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
    const [etatvalidation, setetatvalidation] = useState(0)
    const [statutBAT, setstatutBAT] = useState(0)
    const [commande, setcommande] = useState([])
    const navigate = useNavigate();
    const [smShow, setSmShow] = useState(false);
    const [commentShow, setcommentShow] = useState(false);
    const [commentaire, setcommentaire] = useState("");

    const onchange = async(e) =>{
        if(etatvalidation==1){
            setetatvalidation(e.target.value);
            setcommentShow(true);
        }
    }


    const updateStatut = async (id) => {
        console.log("id:", id);
        await axios.put(`https://127.0.0.1:8000/validerBAT/${id}`,
            {
                statutBAT
            })
    }

    const updateEtat = async (id) => {
        console.log("id:", id);
        await axios.put(`https://127.0.0.1:8000/etatvalidation/${id}`,
            {
                etatvalidation
            })
    }

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const userInfo = localStorage.getItem("userInfo");
    //         console.log(userInfo);
    //         console.log("gffgfggf", userInfo.slice(10, userInfo.length - 2));

    //         const config = {
    //             headers: {
    //                 "Content-type": "application/json",
    //                 'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
    //             },
    //         };
    //         console.log(config);
    //         setloading(true);

    //         const { data } = await axios.post(`https://127.0.0.1:8000/validerBAT/${id}`,
    //             {
    //                 etatvalidation,
    //                 commentaire,
    //             },
    //             config
    //         );
    //         history("/Categorie")
    //         setloading(false);
    //         setError(false);
    //     } catch (error) {
    //         setError(error.response.data.message);
    //         setloading(false);
    //         setError(true);
    //     }
    //     console.log(titre, statut);
    // }
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
    const visualiserBAT = async () => {
        console.log(id);
        const userInfo = localStorage.getItem("userInfo");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        navigate(`/VisualiserBAT/${id}`);
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
                                <Form >
                                    <div className="row">

                                        <div className="col-md-6 mb-3">
                                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                                <div className="card-body">
                                                    <div className="row mb-3">
                                                        <h6 className="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Fichier BAT:</h6>
                                                        <div className="col-sm-6 mb-3">
                                                            <b><img src={`https://127.0.0.1:8000/api/getbat/${item.id}`} width="100px" alt='image' /></b>
                                                        </div>
                                                        <div className="col-sm-6 mb3">
                                                            <Button variant="primary" type="submit" onClick={() => visualiserBAT(item.id)} className="button" style={{ fontFamily: 'bold', fontSize: '19px', backgroundColor: '#004b88b6' }}>
                                                                Visualiser
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <Form.Select
                                                            aria-label="Default select example"
                                                            required
                                                            value={statutBAT}
                                                            onChange={(e) => setstatutBAT(parseInt(e.target.value))}
                                                        >
                                                            <option value='0'>Réfusé</option>
                                                            <option value='1' >Confirmé</option>
                                                        </Form.Select>
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
                                        <div className="row">
                                            <div className="col-md-10 mb-3"></div>
                                            <div className="col-md-2 mb-3">
                                                <Button
                                                    variant="primary"
                                                    type="submit"
                                                    onClick={(event) => {
                                                        console.log(statutBAT)
                                                        if (statutBAT == 1) {
                                                            event.preventDefault();
                                                            setSmShow(true);
                                                        } else {
                                                            updateStatut(item.id);
                                                            navigate("/Categorie");
                                                        }
                                                        // updateEtat(id);

                                                    }}
                                                    className="button"
                                                    style={{ fontFamily: 'bold', fontSize: '19px', backgroundColor: '#004b88b6' }}>
                                                    Enregistrer
                                                </Button>
                                            </div>
                                        </div>
                                        <Modal
                                            size="md"
                                            show={smShow}
                                            onHide={() => setSmShow(false)}
                                            
                                            aria-labelledby="example-modal-sizes-title-sm"
                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-modal-sizes-title-sm">
                                                    VALIDATION DE BON A TIRER
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div className='row'>
                                                    <b>Raison sociale:</b>
                                                </div>
                                                <div className='row'>
                                                    <b>Réf : {item.reference}</b>
                                                </div>
                                                <div className='row'>
                                                    <b>Quantité : {item.quantite}</b>
                                                </div>
                                                <div className='row'>
                                                    <b>N° de dossier : {item.referencecommerciale}</b>
                                                </div>
                                                <div className='row'>
                                                    <b>Epreuve :</b>
                                                </div>
                                                <hr />
                                                <div className='row'>
                                                    <b>Important :</b>
                                                    <p>nous vous conseillons de bien relire tous les textes et vérifier précisément tous les chiffres figurant dans l’image ci-dessus. Après validation du Bon à Tirer (BAT), il ne sera plus possible de le modifier. En cas d’erreur constatée à posteriori, nous ne pourrons être tenu pour responsable. Si un retirage est nécessaire, il sera à vos frais.</p>
                                                </div>
                                                <hr />
                                                <div className='row'>
                                                    <b>Cocher la case :</b>
                                                    <Form>
                                                        {['radio'].map((type) => (
                                                            <div key={`inline-${type}`}
                                                                className="mb-3"
                                                                value={etatvalidation}
                                                                onChange={(e) => setetatvalidation(parseInt(e.target.value))}>
                                                                <Form.Check
                                                                    inline
                                                                    value='0'
                                                                    label={<b> Validé sans modification</b>}
                                                                    name="group1"
                                                                    type={type}
                                                                    id={`inline-${type}-1`}
                                                                // value={etatvalidation}
                                                                // onChange={(e) => setetatvalidation(parseInt(e.target.value))}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    value='1'
                                                                    label={<b>Validé avec modifications</b>}
                                                                    name="group1"
                                                                    type={type}
                                                                    id={`inline-${type}-2`}
                                                                // value={etatvalidation}
                                                                // onChange={(e) => setetatvalidation(parseInt(e.target.value))}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>
                                                </div>
                                                <div className='row'  visibility={commentShow==false ? "visible": "hidden"}>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Merci de prendre en compte ces modifications et de me représenter une nouvelle épreuve :</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={3}
                                                            value={commentaire}
                                                            onChange={(e) => setcommentaire(e.target.value)} />
                                                    </Form.Group>
                                                </div>
                                                <div className='row'>
                                                    <Button
                                                        variant="primary"
                                                        type="submit"
                                                        // onClick={(event) => {
                                                        //     console.log(etatvalidation)
                                                        //     if (etatvalidation == 0) {
                                                        //         updateStatut(item.id);
                                                        //     } else {
                                                        //         event.preventDefault();
                                                        //         updateEtat(item.id);
                                                        //         updateStatut(item.id);
                                                        //     }

                                                        // }}
                                                        className="button"
                                                        style={{ fontFamily: 'bold', fontSize: '19px', backgroundColor: '#004b88b6' }}>
                                                        Enregistrer
                                                    </Button>
                                                </div>
                                            </Modal.Body>
                                        </Modal>
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
