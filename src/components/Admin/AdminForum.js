import React from 'react';
import '../Profil/ProfilEdit.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Sidebar/Navbar';


export default function AdminForum() {
    return (
        <>
        <Navbar />
        <div class="container">
            <div class="main-body">
                <div class="row">
                    <nav aria-label="breadcrumb" class="main-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/Dashboard">Acceuil</a></li>
                            <li class="breadcrumb-item"><a href="/Pays">Liste des administrateurs</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Ajouter Administrateur</li>
                        </ol>
                    </nav>
                    <br />
                    <br />
                    <br />
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mb-4">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Photo:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" style={{ background: 'white' }}>
                                        <div className="input-group-prepend">
                                        </div>
                                        <div className="custom-file" >
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="inputGroupFile01"
                                                aria-describedby="inputGroupFileAddon01"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Username:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="username" class="form-control" required='' />
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Email:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="email" class="form-control" required='' />
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Téléphone:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="mobile" class="form-control" required='' />
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Type:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <Form.Select aria-label="Default select example">
                                            <option value="1">Administrateur de Vente</option>
                                            <option value="2">Imprimeur</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Mot de Passe:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="password" class="form-control" required='' />
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Mot de Passe à nouveau:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="password" class="form-control" required='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-10 mb-3"></div>
                    <div class="col-md-1 mb-3">
                        <Button variant="primary" type="submit" className="button" style={{ fontFamily: 'bold', fontSize: '19px', background: '#4A4E69' }}>
                            Enregistrer
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    </>
    )
}
