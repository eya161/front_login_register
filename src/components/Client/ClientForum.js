import React from 'react';
import '../Profil/ProfilEdit.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function ClientForum() {
    return (
        <div class="container">
            <div class="main-body">
                <div class="row">
                    <nav aria-label="breadcrumb" class="main-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/Dashboard">Acceuil</a></li>
                            <li class="breadcrumb-item"><a href="/Client">Liste des clients</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Ajouter Client</li>
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
                                        <div className="input-group col-sm-7" style={{ background: 'white',fontFamily: 'bold', fontSize:'18px' }}>
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
                                                        <label style={{ fontFamily: 'bold', fontSize:'18px'  }}>Statut</label>
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            style={{ backgroundColor: '#ece4f5d5' }}
                                                        />
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Code Client:</label>
                                        <input type="text" class="form-control" required='' />
                                    </div>
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Email:</label>
                                        <input type="email" class="form-control" required='' />
                                    </div>
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Groupement:</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Téléphone:</label>
                                        <input type="mobile" class="form-control" />
                                    </div>
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Personne a contacté:</label>
                                        <input type="name" class="form-control" />
                                    </div>
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Fax:</label>
                                        <input type="Fax" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3 form-check">
                                    <div class="col-sm-6">
                                    <input id="Check1" type="checkbox" class="form-check-input" />
                                    <label for="Check1" class="form-check-label" style={{ float: 'left',fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Utiliser la même adresse pour la facturation et la livraison</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mb-3">
                                    <h6 class="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Facturation</h6>
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>RS facturation:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" required='' />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Adresse 1:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="address" class="form-control" required=''/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Adresse 2:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="address" class="form-control"/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-4">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Ville:</label>
                                        <input type="country" class="form-control" required='' />
                                    </div>
                                    <div class="col-sm-4">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Code Postal:</label>
                                        <input type="code" class="form-control" required=''/>
                                    </div>
                                    <div class="col-sm-4">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Pays:</label>
                                        <Form.Select aria-label="Default select example">
                                            <option value="1"></option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mb-3">
                                    <h6 class="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px'}}>Livraison</h6>
                                    <div class="col-sm-3 mb-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>RS livraison:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" required='' />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Adresse 1:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="address" class="form-control" required=''/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Adresse 2:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="address" class="form-control"/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-4">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Ville:</label>
                                        <input type="country" class="form-control" required='' />
                                    </div>
                                    <div class="col-sm-4">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Code Postal:</label>
                                        <input type="code" class="form-control" required=''/>
                                    </div>
                                    <div class="col-sm-4">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Pays:</label>
                                        <Form.Select aria-label="Default select example">
                                            <option value="1"></option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <div class="card">
                            <div class="card-body">
                            <div class="row mb-3">
                                    <h6 class="mb-4 text-center" style={{ fontFamily: 'bold', fontSize: '30px', color:'black'}}>Paramétre</h6>
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px' }}>Username:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="username" class="form-control" required='' />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Mot de Passe:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="password" class="form-control" required=''/>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Mot de Passe à nouveau:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="password" class="form-control" required=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <div class="card">
                            <div class="card-body">
                            <div class="row mb-3">
                            <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Commentaire:</h6>
                                    </div>
                                    <Form.Group className="col-sm-9 mb-3" controlId="comment">
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                            </div>
                            <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Port:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" required=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
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
