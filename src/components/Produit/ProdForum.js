import React from 'react';
import '../Profil/ProfilEdit.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function ProdForum() {
    return (
        <div class="container">
            <div class="main-body">
                <div class="row">
                    <nav aria-label="breadcrumb" class="main-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/Dashboard">Acceuil</a></li>
                            <li class="breadcrumb-item"><a href="/Produit">Liste des produits</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Ajouter Produit</li>
                        </ol>
                    </nav>
                    <br />
                    <br />
                    <br />
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mb-3">
                                    <div class="col-sm-7 mb-4" style={{ marginTop: '14px' }}>
                                        <div className="input-group col-sm-7" style={{ background: 'white' }}>
                                            <div className="input-group-prepend">
                                            </div>
                                            <div className="custom-file">
                                                <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="inputGroupFile01"
                                                    aria-describedby="inputGroupFileAddon01"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="row flex">
                                            <div class="col-lg-12">
                                                <Form>
                                                    <div class="col-sm-2 col-lg-offset-2 mb-2" style={{ margintop: '-100px' }}>
                                                        <label style={{ fontFamily: 'italic' }}>Statut</label>
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            style={{ backgroundColor: 'beige' }}
                                                        />
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-4 text-secondary">
                                        <label>Désignation:</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-4 text-secondary">
                                        <label>Référence Produit:</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-4">
                                        <label>Catégorie</label>
                                        <Form.Select aria-label="Default select example">
                                            <option value="1"></option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Description</h6>
                                    </div>
                                    <Form.Group className="col-sm-9 mb-3" controlId="desc">
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mb-1">
                                    <div class="col-sm-6">
                                        <label>Prix d'achat(€):</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Frais de port (€):</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-sm-6">
                                        <label>Nombre carnet par paquet :</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-6">
                                        <label>Nombre de liasse par Carnet :</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mb-3">
                                    <h6 class="mb-1" style={{ fontFamily: 'bold', fontSize: '25px', marginLeft: '130px' }}>Ajouter Quantité / Prix</h6>
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Quantité:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Prix d'achat:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="price" class="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-10 mb-3"></div>
                    <div class="col-md-1 mb-3">
                        <Button variant="primary" type="submit" className="button" href='/ProdForum'>
                            Enregistrer
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    )
}
