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

export default function BATRefuser() {
    const [commande, setcommande] = useState([])
    const navigate=useNavigate()
    const getCommandeData = async () => {
        try {
            const data = await axios.get(
                "https://127.0.0.1:8000/getCommandeBATrefuse"
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
        navigate(`/BATModifyPrinter/${id}`);
    }

    useEffect(() => {
        getCommandeData();
    }, [])
    
    return (
        <>
            <NavbarUser />
            <div class="maincontainer mainer">
                <div class="container">
                    <div class="row mb-1">
                        <nav aria-label="breadcrumb" class="mb-5" style={{ marginTop: '15px', backgroundColor: '#c9def7be ' }}>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/HomePrinter">Acceuil</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Liste des Commandes en Cours </li>
                            </ol>
                        </nav>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-10">
                            <h6 style={{ fontFamily: 'bold', fontSize: '35px' }}>Liste des Commandes en Cours</h6>
                        </div>
                    </div>
                    <div class="row mb-5" style={{backgroundColor: '#c9def7be ' }}>
                        <div class="row mb-3">
                            <b style={{fontSize: '20px ' }}>Zone De Recherche</b>
                        </div>
                        <div class="row" >
                            <div class="row flex">
                                <div class="col-md-2 mb-4">
                                    <Form.Group className="" controlId="date">
                                        <label style={{ fontFamily: 'bold', fontSize: '20px' }}>Réf Article</label>
                                        <Form.Control className="border" type="text" placeholder="Réf Article" />
                                    </Form.Group>
                                </div>
                                <div class="col-md-2 mb-4">
                                    <Form.Group className="" controlId="date">
                                        <label style={{ fontFamily: 'bold', fontSize: '20px' }}>N° Commande:</label>
                                        <Form.Control className="border" type="text" placeholder="N° Commande" />
                                    </Form.Group>
                                </div>
                                <div class="col-md-2 mb-4">
                                    <Form.Group className="" controlId="date">
                                        <label style={{ fontFamily: 'bold', fontSize: '20px' }}>N° Dossier:</label>
                                        <Form.Control className="border" type="text" placeholder="N° Dossier" />
                                    </Form.Group>
                                </div>
                                <div class="col-md-2 mb-4">
                                    <Form.Group className="" controlId="date">
                                        <label style={{ fontFamily: 'bold', fontSize: '20px' }}>De:</label>
                                        <Form.Control className="border" type="date" placeholder="jj/mm/aaaa" />
                                    </Form.Group>
                                </div>
                                <div class="col-md-2 mb-4">
                                    <Form.Group className="" controlId="date">
                                        <label style={{ fontFamily: 'bold', fontSize: '20px' }}>Jusqu'à:</label>
                                        <Form.Control className="border" type="date" placeholder="jj/mm/aaaa" />
                                    </Form.Group>
                                </div>
                                <div class="col-md-1 mb-4" style={{ marginTop: '30px' }}>
                                    <Button variant="primary" type="submit" className="button" style={{ background: "#004b88b6" }}>
                                        Recherche
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container horizontal-scrollable" >
                        <div class="row text-center ">
                            <Table striped bordered hover>
                                <thead style={{ backgroundColor: '#c9def7be ' }}>
                                    <tr>
                                        <th>N° Dossier</th>
                                        <th>Date de commande </th>
                                        <th>Réf du produit</th>
                                        <th>Désignation</th>
                                        <th>Quantités</th>
                                        <th>Statut commande</th>
                                        <th>Date d'impression</th>
                                        <th>RS de livraison</th>
                                        <th>Ville de livraison</th>
                                        <th>Détails</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {commande
                                       .map((item) => {
                                           if (item.statut==3) {
                                               item.statut=<b>BAT refusé</b>
                                           }
                                        return(
                                    <tr key={item.id}>
                                        <td>{item.referencecommerciale}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.reference}</td>
                                        <td>{item.Designation}</td>
                                        <td>{item.quantite}</td>
                                        <td>{item.statut}</td>
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
