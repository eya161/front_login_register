import React from 'react';
import '../Profil/ProfilEdit.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function CategorieForum() {
    return (
        <div class="container">
            <div class="main-body">
                <div class="row">
                    <nav aria-label="breadcrumb" class="main-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/Dashboard">Acceuil</a></li>
                            <li class="breadcrumb-item"><a href="/Produit">Liste des catégories</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Ajouter Catégorie</li>
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
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Nom de Catégorie:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Statut:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <Form.Select aria-label="Default select example">
                                            <option value="1">Activé</option>
                                            <option value="2">Désactivé</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-10 mb-3"></div>
                    <div class="col-md-1 mb-3">
                        <Button variant="primary" type="submit" className="button" href='/ProdForum' style={{ fontFamily: 'bold', fontSize: '19px', background: '#4A4E69' }}>
                            Enregistrer
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    )
}
