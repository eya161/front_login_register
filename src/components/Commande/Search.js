import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { FcViewDetails } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { MdNotifications } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import Dropdown from 'react-bootstrap/Dropdown'


export default function Search() {
    return (
        <div class="maincontainer">
            <div class="container">
            <div class="row">
                <nav aria-label="breadcrumb" class="main-breadcrumb mb-5" style={{ marginTop: '15px' }}>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/Forum">Acceuil</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Liste des Commandes</li>
                    </ol>
                </nav>
            </div>
                <Form>
                    <div class="row flex" style={{ marginTop: '20px' }}>
                        <div class="col-lg-1" style={{ marginLeft: '60px' }}></div>
                        <div class="col-lg-4">
                            <Form.Group className="" controlId="date">
                                <Form.Control className="border" type="month" placeholder="jj/mm/aaaa" />
                            </Form.Group>
                        </div>
                        <div class="col-lg-4">
                            <Form.Select className="" aria-label="Default select example">
                                <option value="1">Nouvelle commande</option>
                                <option value="2">En cours BAT</option>
                                <option value="3">Attente de validation du BAT</option>
                                <option value="3">BAT refusé</option>
                                <option value="3">BAT validé</option>
                                <option value="3">En cours d'impression</option>
                                <option value="3">En cours de livraison</option>
                                <option value="3">Facturé</option>
                            </Form.Select>
                        </div>
                        <div class="col-lg-1 ">
                            <Button variant="primary" type="submit" className="button" style={{background: "#412e4ee1"}}>
                                <FaSearch />
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>  
    )
}
