import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";
import { MdNotifications } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import Dropdown from 'react-bootstrap/Dropdown'


export default function SearchClient() {
    return (
        <div class="maincontainer">
            <div class="container">
                <div class="row">
                    <nav aria-label="breadcrumb" class="main-breadcrumb mb-5" style={{ marginTop: '15px' }}>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/Dashboard">Acceuil</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Liste des clients</li>
                        </ol>
                    </nav>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <Form>
                            <div class="row flex">
                                <div class="col-lg-1" style={{ marginLeft: '60px' }}></div>
                                <div class="col-lg-4">
                                    <Form.Group className="" controlId="code">
                                        <Form.Control className="border" type="text" placeholder="Code Client"  />
                                    </Form.Group>
                                </div>
                                <div class="col-lg-1 ">
                                    <Button variant="primary" type="submit" className="button" style={{background: "linear-gradient(to right, rgb(98, 182, 203),rgb(0, 126, 167),rgb(27, 73, 101))"}}>
                                        <FaSearch />
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <div class="col-lg-3"></div>
                    <div class="col-lg-3">
                        <Button variant="primary" type="submit" className="button" href='/ClientForum' style={{background: "linear-gradient(to right, rgb(98, 182, 203),rgb(0, 126, 167),rgb(27, 73, 101))"}}>
                            Ajouter un client
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
