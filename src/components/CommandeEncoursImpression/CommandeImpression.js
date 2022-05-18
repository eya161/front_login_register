import React, {useState, useEffect} from 'react';
import { Table, Button } from 'react-bootstrap';
import { FcViewDetails } from 'react-icons/fc';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
import Footer from '../Footer/Footer';
import NavbarUser from '../Navbar/NavbarUser';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CommandeImpression() {
    const [commande, setcommande] = useState([])
    const navigate=useNavigate()
    const getCommandeData = async () => {
        try {
            const data = await axios.get(
                "https://127.0.0.1:8000/getCommandesEnAttenteImpression"
            );
            console.log(data.data);
            setcommande(data.data.commandes);
        } catch (e) {
            console.log(e);
        }
    };

    const editCategory=async(id) => {
        console.log(id);
        const userInfo = localStorage.getItem("userInfo");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        navigate(`/ConsulterImpression/${id}`);
    }

    useEffect(() => {
        getCommandeData();
    }, [])
    
    return (
        <>
            <NavbarUser />
            <div className="maincontainer mainer">
                <div className="container">
                    <div className="row mb-1">
                        <nav aria-label="breadcrumb" className="mb-5" style={{ marginTop: '15px', backgroundColor: '#c9def7be ' }}>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/Home">Acceuil</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Liste des Commandes en Cours </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-10">
                            <h6 style={{ fontFamily: 'bold', fontSize: '35px' }}>Liste des Commandes en Cours</h6>
                        </div>
                    </div>
                    <div className="row mb-5" style={{backgroundColor: '#c9def7be ' }}>
                        <div className="row mb-3">
                            <b style={{fontSize: '20px ' }}>Zone De Recherche</b>
                        </div>
                        <div className="row" >
                            <div className="row flex">
                                <div className="col-md-2 mb-4">
                                    <Form.Group classNameName="" controlId="date">
                                        <label style={{ fontFamily: 'bold', fontSize: '20px' }}>Réf Article</label>
                                        <Form.Control classNameName="border" type="text" placeholder="Réf Article" />
                                    </Form.Group>
                                </div>
                                <div className="col-md-2 mb-4">
                                    <Form.Group classNameName="" controlId="date">
                                        <label style={{ fontFamily: 'bold', fontSize: '20px' }}>N° Commande:</label>
                                        <Form.Control classNameName="border" type="text" placeholder="N° Commande" />
                                    </Form.Group>
                                </div>
                                <div className="col-md-2 mb-4">
                                    <Form.Group classNameName="" controlId="date">
                                        <label style={{ fontFamily: 'bold', fontSize: '20px' }}>N° Dossier:</label>
                                        <Form.Control classNameName="border" type="text" placeholder="N° Dossier" />
                                    </Form.Group>
                                </div>
                                <div className="col-md-2 mb-4">
                                    <Form.Group classNameName="" controlId="date">
                                        <label style={{ fontFamily: 'bold', fontSize: '20px' }}>De:</label>
                                        <Form.Control classNameName="border" type="date" placeholder="jj/mm/aaaa" />
                                    </Form.Group>
                                </div>
                                <div className="col-md-2 mb-4">
                                    <Form.Group classNameName="" controlId="date">
                                        <label style={{ fontFamily: 'bold', fontSize: '20px' }}>Jusqu'à:</label>
                                        <Form.Control classNameName="border" type="date" placeholder="jj/mm/aaaa" />
                                    </Form.Group>
                                </div>
                                <div className="col-md-1 mb-4" style={{ marginTop: '30px' }}>
                                    <Button variant="primary" type="submit" classNameName="button" style={{ background: "#004b88b6" }}>
                                        Recherche
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container horizontal-scrollable" >
                        <div className="row text-center ">
                            <Table striped bordered hover>
                                <thead style={{ backgroundColor: '#c9def7be ' }}>
                                    <tr>
                                        <th>N° Dossier</th>
                                        <th>Date de commande </th>
                                        <th>Réf du produit</th>
                                        <th>Désignation</th>
                                        <th>Quantités</th>
                                        <th>Statut commande</th>
                                        <th>N° commande</th>
                                        <th>Date d'impression</th>
                                        <th>RS de livraison</th>
                                        <th>Ville de livraison</th>
                                        <th>Détails</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {commande
                                       .map((item) => {
                                        return(
                                    <tr key={item.id}>
                                        <td>{item.referencecommerciale}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.reference}</td>
                                        <td>{item.Designation}</td>
                                        <td>{item.quantite}</td>
                                        <td><b>Attente Validation BAT</b></td>
                                        <td>{item.referencecommerciale}</td>
                                        <td>{item.dateimpression}</td>
                                        <td>{item.rslivraison}</td>
                                        <td>{item.villelivraison}</td>
                                        <td>
                                            <Button variant="primary" type="details" onClick={ () => editCategory(item.id)} >
                                                <FcViewDetails />
                                            </Button>

                                        </td>
                                    </tr>
                                        )})}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
