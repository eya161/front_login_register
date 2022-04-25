import React from 'react';
import '../Profil/ProfilEdit.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Sidebar from '../Sidebar/Sidebar';
import {useState} from 'react';
import axios from 'axios';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';

export default function ProdForum() {
    const [statut, setstatut] = useState(0)
    const [designation, setdesignation] = useState("")
    const [reference, setreference] = useState("")
    const [description, setdescription] = useState("")
    const [prix_achat, setprix_achat] = useState(0)
    const [frais_port, setfrais_port] = useState(0)
    const [nb_carnet_paquet, setnb_carnet_paquet] = useState(0)
    const [nb_liasse_carnet, setnb_liasse_carnet] = useState(0)
    const [quantite, setquantite] = useState(0)
    const [error, setError] = useState("")
    const [loading, setloading] = useState("")
        const submitHandler = async (e) =>{
            e.preventDefault();
                try{
                    const userInfo =localStorage.getItem("userInfo");
                    const config = {
                        headers: {
                            "Content-type": "application/json",
                            'Authorization': 'Bearer '+userInfo.slice(10,userInfo.length-2)
                        },
                    };
                    console.log(config);
                    setloading(true);
    
                    const {data} = await axios.post("http://127.0.0.1:8000/api/produits",
                    {
                        statut,
                        designation,
                        reference,
                        description,
                        prix_achat,
                        frais_port,
                        nb_carnet_paquet,
                        nb_liasse_carnet,
                        quantite
                    }, 
                    config
                );
                setloading(false);
                setError(false);
                }catch(error){
                    setError(error.response.data.message);
                    setloading(false);
                    setError(true);
                }
                console.log(statut,
                    designation,
                    reference,
                    description,
                    prix_achat,
                    frais_port,
                    nb_carnet_paquet,
                    nb_liasse_carnet,
                    quantite);
            }
    return (
        <>
        <Sidebar />
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
                    <Form onSubmit={submitHandler}>
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                            {error && <ErrorMessage />}
                            {loading && <Loading />}
                                <div class="row mb-3">
                                    <div class="col-sm-7 mb-4" style={{ marginTop: '14px' }}>
                                        <div className="input-group col-sm-7" style={{ background: 'white',fontFamily: 'bold', color:'black', fontSize:'18px'}}>
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
                                                
                                                    <div class="col-sm-2 col-lg-offset-2 mb-2" style={{ margintop: '-100px' }}>
                                                        <label style={{ fontFamily: 'bold' }}>Statut</label>
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            style={{ backgroundColor: '#ece4f5d5' }}
                                                            value={0}
                                                            onChange={(e)=> setstatut(e.target.value)}
                                                        />
                                                    </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Désignation:</label>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            required 
                                            name='designation'
                                            value={designation}
                                            onChange={(e)=> setdesignation(e.target.value)} />
                                    </div>
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Référence Produit:</label>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            name='reference'
                                            required 
                                            value={reference}
                                            onChange={(e)=> setreference(e.target.value)} />
                                    </div>
                                    <div class="col-sm-4">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Catégorie:</label>
                                        <Form.Select aria-label="Default select example">
                                            <option value="1"></option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Description:</h6>
                                    </div>
                                    <Form.Group 
                                        className="col-sm-9 mb-3" 
                                        controlId="desc"
                                        name='description'
                                        required 
                                        value={description}
                                        onChange={(e)=> setdescription(e.target.value)}>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mb-2">
                                    <div class="col-sm-6">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Prix d'achat(€):</label>
                                        <input 
                                            type="number" 
                                            class="form-control"
                                            name='prix_achat'
                                            required 
                                            value={prix_achat}
                                            onChange={(e)=> setprix_achat(e.target.value)} />
                                    </div>
                                    <div class="col-sm-6">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Frais de port (€):</label>
                                        <input 
                                            type="number" 
                                            class="form-control"
                                            name='frais_port'
                                            required 
                                            value={frais_port}
                                            onChange={(e)=> setfrais_port(e.target.value)} />
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-sm-6">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Nombre carnet par paquet :</label>
                                        <input 
                                            type="number" 
                                            class="form-control"
                                            name='nb_carnet' 
                                            required 
                                            value={nb_carnet_paquet}
                                            onChange={(e)=> setnb_carnet_paquet(e.target.value)}/>
                                    </div>
                                    <div class="col-sm-6">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Nombre de liasse par Carnet :</label>
                                        <input 
                                            type="number" 
                                            class="form-control"
                                            name='nb_liasse'
                                            required 
                                            value={nb_liasse_carnet}
                                            onChange={(e)=> setnb_liasse_carnet(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mb-4">
                                    <h6 class="mb-2" style={{ fontFamily: 'bold', fontSize: '25px', marginLeft: '130px' }}>Ajouter Quantité / Prix</h6>
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Quantité:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input 
                                            type="number" 
                                            class="form-control"
                                            name='quantite'
                                            required 
                                            value={quantite}
                                            onChange={(e)=> setquantite(e.target.value)} />
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Prix d'achat:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input 
                                            type="number" 
                                            class="form-control"
                                            name='prix_achat2'
                                            // required 
                                            // value={prix_achat2}
                                            // onChange={(e)=> setprix_achat2(e.target.value)} 
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-10 mb-3"></div>
                    <div class="col-md-1 mb-3">
                        <Button variant="primary" type="submit" className="button" style={{fontFamily:'bold', fontSize:'19px',background:'#4A4E69'}}>
                            Enregistrer
                        </Button>
                    </div>
                    </Form>
                </div>
            </div>
        </div >
        </>
    )
}
