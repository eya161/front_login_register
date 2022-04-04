import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";
import { MdNotifications } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import Dropdown from 'react-bootstrap/Dropdown'

export default function SearchPays() {
  return (
    <div class="container">
        <div class="main-body">
            <div class="row">
                    <nav aria-label="breadcrumb" class="main-breadcrumb mb-5" style={{ marginTop: '15px' }}>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/Dashboard">Acceuil</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Liste des pays</li>
                            <div class="col-lg-1" style={{ marginLeft: '710px' }}>
                                <li>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ borderRadius: '30px', background: "linear-gradient(to right, rgb(98, 182, 203),rgb(0, 126, 167),rgb(27, 73, 101))", width: "59%" }}>
                                            <MdNotifications />
                                            <span class="label label-success" id="notificationNumber">0</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1"></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </div>
                            <div class="col-lg-1" style={{ marginLeft: '-20px' }} >
                                <li>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ borderRadius: '30px', background: "linear-gradient(to right, rgb(98, 182, 203),rgb(0, 126, 167),rgb(27, 73, 101))" }}>
                                            <CgProfile />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/Profil">Profil</Dropdown.Item>
                                            <hr />
                                            <Dropdown.Item href="/Login">Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </div>
                        </ol>
                    </nav>
                </div>
                <br/>
                <br/>
                <div class="row">
                    <div class="col-lg-6">
                        <Form>
                            <div class="row flex">
                                <div class="col-lg-1" style={{ marginLeft: '60px' }}></div>
                                <div class="col-lg-4">
                                    <Form.Group className="" controlId="code">
                                        <Form.Control className="border" type="text" placeholder="Pays" />
                                    </Form.Group>
                                </div>
                                <div class="col-lg-1 ">
                                    <Button variant="primary" type="submit" className="button"style={{background: "linear-gradient(to right, rgb(98, 182, 203),rgb(0, 126, 167),rgb(27, 73, 101))"}}>
                                        <FaSearch />
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <div class="col-lg-3"></div>
                    <div class="col-lg-3">
                        <Button variant="primary" type="submit" className="button" href='/PaysForum' style={{background: "linear-gradient(to right, rgb(98, 182, 203),rgb(0, 126, 167),rgb(27, 73, 101))"}}>
                            Ajouter un pays
                        </Button>
                    </div>
                </div>
            </div>
        </div>
  )
}
