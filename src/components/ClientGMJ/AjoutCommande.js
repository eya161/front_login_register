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


    const [produits, setProduits] = useState([]);
    const [referenceArray, setReferenceArray] = useState([]);
    
    const [designation, setDesignation] = useState("");
    const [prixAchat, setPrixAchat] = useState();
    const [fraisPort, setFraisPort] = useState();
    // fichier1 useState
    // fichier2  useState

    useEffect(() => {
        const fetchData = async () => {
            const userInfo = localStorage.getItem("userInfo");
            const config = {
                headers: {
                    Authorization: "Bearer " + userInfo.slice(10, userInfo.length - 2),
                },
            };
            // https://127.0.0.1:8000/api/produits
            const res = await axios.get("https://localhost:8000/api/produits", config);
            setProduits(res.data);
            const mappedReferences = res.data.map((produit) => {
                return { label: produit.reference, value: produit.id };
            });
            setReferenceArray(mappedReferences);
        }
        fetchData();
    }, [])

    const handleReferenceChange = (e) => {
        const produit = produits.find((produit) => produit.id === e.value);
        console.log(produit);
        setDesignation(produit.designation)
        setPrixAchat(produit.prix_achat);
        setFraisPort(produit.frais_port);
      }



    // const onChangeHandler = (e) =>{
    //     setform({
    //         ...form,
    //         [e.target.name]:e.target.value,
    //     })
    // }

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     data.append('fichierBAT',form.fichierBAT)
    //     try {
    //         return axios.post(`https://127.0.0.1:8000/envoyerBAT/${id}`,
    //             data
    //         ),
    //             navigate("/CommandeEnCoursPrinter"),
    //             setError(false);
    //     } catch (error) {
    //         setError(error.response.data.message);
    //         setError(true);
    //     }
    // };
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
    // const visualisergraph = async () => {
    //     console.log(id);
    //     const userInfo = localStorage.getItem("userInfo");
    //     const config = {
    //         headers: {
    //             'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
    //         },
    //     };
    //     navigate(`/Visualisergraph/${id}`);
    // }
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
                            <li className="breadcrumb-item"><a href="/ModifyClient">Détails</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Nouvelle Commande</li>
                        </ol>
                    </nav>
                </div>
                <div class="row mb-5">
                    <div class="col-md-10">
                        <h6 style={{ fontFamily: 'bold', fontSize: '35px' }}>Nouvelle Commande:</h6>
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
                                                                <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code client:<b>{item.codeclient}</b></h6>
                                                            </div>
                                                            <div className="col-sm-5">
                                                                <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Groupement: <b>{item.groupement}</b></h6>
                                                            </div>
                                                            <div className="col-sm-2">
                                                                <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Personne à cntacter: <b>{item.personnecontacter}</b></h6>
                                                            </div>
                                                        </div>
                                                        <div className='row mb-3'>
                                                            <div className="col-sm-4">
                                                                <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Email: <b>{item.email}</b></h6>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Téléphone: <b>{item.telephone}</b></h6>
                                                            </div>
                                                            <div className="col-sm-2">
                                                                <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Port: <b>{item.port}</b></h6>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Fax: {item.fax}</h6>
                                                            </div>
                                                        </div>
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
                                <Form >
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                                <div className="card-body">
                                                    <div className="row mb-3">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Référence:</label>
                                                        <Select
                                                            name="reference"
                                                            options={referenceArray}
                                                            onChange={handleReferenceChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                                <div className="card-body">
                                                    <div className="row mb-3">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Désignation:</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name='des' 
                                                            value={designation} 
                                                            onChange={(e) => setDesignation(e.target.value)}
                                                            />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                                <div className="card-body">
                                                    <div className="row mb-3">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Référence Commerciale:</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name='ref' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                                <div className="card-body">
                                                    <div className="row mb-3">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Quantité:</label>
                                                        <Select
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                                <div className="card-body">
                                                    <div className="row mb-3">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Prix d'Achat:</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name='prix_achat' 
                                                            value={prixAchat}
                                                            onChange={(e)=> setPrixAchat(e.target.value)}
                                                            />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                                <div className="card-body">
                                                    <div className="row mb-3">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Frais Port:</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name='frais' 
                                                            value={fraisPort}
                                                            onChange={(e)=> setFraisPort(e.target.value)}
                                                            />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                                <div className="card-body">
                                                    <div className="row mb-3">
                                                        <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Prix de vente:</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name='prix' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                                <div className="card-body">
                                                    <div className='row'>
                                                        <div className="col-sm-3">
                                                            <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Fichier graphiques:</h6>
                                                        </div>
                                                        <div className="col-sm-9 text-secondary custom-file" style={{ background: 'white', fontFamily: 'bold', fontSize: '18px' }}>
                                                            <input
                                                                type="file"
                                                                className="custom-file-input"
                                                                id="inputGroupFile01"
                                                                name='image'
                                                            // onChange={(e)=>setform({...data,fichierBAT:e.target.files[0]})}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                                <div className="card-body">
                                                    <div className='row'>
                                                        <div className="col-sm-3">
                                                            <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Pieces jointes:</h6>
                                                        </div>
                                                        <div className="col-sm-9 text-secondary custom-file" style={{ background: 'white', fontFamily: 'bold', fontSize: '18px' }}>
                                                            <input
                                                                type="file"
                                                                className="custom-file-input"
                                                                id="inputGroupFile01"
                                                                name='image'
                                                            // onChange={(e)=>setform({...data,fichierBAT:e.target.files[0]})}
                                                            />
                                                        </div>
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
                                </Form>
                            </div>
                        )
                    })}
            </div>
            <Footer />
        </>
    )
}
