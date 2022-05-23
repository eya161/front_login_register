import React from 'react';
import '../Profil/ProfilEdit.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Sidebar from '../Sidebar/Sidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import Navbar from '../Sidebar/Navbar';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

export default function ProdForum() {
    // const [statut, setstatut] = useState(0)
    const history=useNavigate();
    const [category, setcategory] = useState([])
    const [selectedCategoryID, setSelectedCategoryID] = useState(null);
    // const [designation, setdesignation] = useState("")
    // const [reference, setreference] = useState("")
    // const [description, setdescription] = useState("")
    // const [prix_achat, setprix_achat] = useState(0)
    // const [frais_port, setfrais_port] = useState(0)
    // const [nb_carnet_paquet, setnb_carnet_paquet] = useState(0)
    // const [nb_liasse_carnet, setnb_liasse_carnet] = useState(0)
    // const [quantite, setquantite] = useState(0)
    const [error, setError] = useState("")
    const [loading, setloading] = useState("")
    const [form, setform] = useState({})
    const [statut, setStatut] = useState(null)
    const data = new FormData();

    const onChangeHandler = (e) =>{
        setform({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        data.append('image',form.image)
        data.append('designation',form.designation)
        data.append('reference',form.reference)
        data.append('description',form.description)
        data.append('prix_achat',form.prix_achat)
        data.append('frais_port',form.frais_port)
        data.append('nb_carnet_paquet',form.nb_carnet_paquet)
        data.append('nb_liasse_carnet',form.nb_liasse_carnet)
        data.append('quantite',form.quantite)
        data.append('statut', statut);
        data.append('categorie_id',selectedCategoryID)
        try {
            const userInfo = localStorage.getItem("userInfo");
            const config = {
                headers: {
                    "Content-type": "application/json",
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };
            console.log(config);
            return axios.post("https://127.0.0.1:8000/addproduit",
                data,
                config
            ),
                history("/Produit"),
                setError(false);
        } catch (error) {
            setError(error.response.data.message);
            setError(true);
        }
    };
    console.log(data);

    const getCategoryData = async () => {
        try {
            const userInfo = localStorage.getItem("userInfo");
            //  console.log(userInfo);
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };

            const data = await axios.get(
                `https://127.0.0.1:8000/api/categories/?statut=0`, config
            );
            const category = data.data.map((category) => {
                return {
                    value: category.id,
                    label: category.titre,
                };
            });
            setcategory(category);      
            console.log(category)      

        } catch (e) {
            console.log(e);
        }
    };

        // const submitHandler = async (e) =>{
        //     e.preventDefault();
        //         try{
        //             const userInfo =localStorage.getItem("userInfo");
        //             const config = {
        //                 headers: {
        //                     "Content-type": "application/json",
        //                     'Authorization': 'Bearer '+userInfo.slice(10,userInfo.length-2)
        //                 },
        //             };
        //             console.log(config);
        //             setloading(true);
    
        //             const {data} = await axios.post("https://127.0.0.1:8000/api/produits",
        //             {
        //                 statut,
        //                 designation,
        //                 reference,
        //                 description,
        //                 prix_achat,
        //                 frais_port,
        //                 nb_carnet_paquet,
        //                 nb_liasse_carnet,
        //                 quantite
        //             }, 
        //             config
        //         );
        //         setloading(false);
        //         setError(false);
        //         }catch(error){
        //             setError(error.response.data.message);
        //             setloading(false);
        //             setError(true);
        //         }
        //         console.log(statut,
        //             designation,
        //             reference,
        //             description,
        //             prix_achat,
        //             frais_port,
        //             nb_carnet_paquet,
        //             nb_liasse_carnet,
        //             quantite);
        //     }

        useEffect(() => {
            getCategoryData();
        }, [])
        
    return (
        <>
        <Navbar />
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
                                                    name='image'
                                                    onChange={(e)=>setform({...data,image:e.target.files[0]})}
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
                                                            onChange={(e) => {
                                                                if (e.target.checked== true) {
                                                                    setStatut(0);
                                                                } else {
                                                                    setStatut(1);
                                                                }
                                                            }}
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
                                            value={form.designation}
                                            onChange={onChangeHandler} 
                                            />
                                    </div>
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Référence Produit:</label>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            name='reference'
                                            required 
                                            value={form.reference}
                                            onChange={onChangeHandler} 
                                            />
                                    </div>
                                    <div class="col-sm-4">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Catégorie:</label>
                                        <Select
                                                options={category}
                                                onChange={(e) => setSelectedCategoryID(e.value) }
                                            />
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
                                        value={form.description}
                                        onChange={onChangeHandler} 
                                        >
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
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
                                            value={form.prix_achat}
                                            onChange={onChangeHandler}  
                                            />
                                    </div>
                                    <div class="col-sm-6">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Frais de port (€):</label>
                                        <input 
                                            type="number" 
                                            class="form-control"
                                            name='frais_port'
                                            required 
                                            value={form.frais_port}
                                            onChange={onChangeHandler} 
                                            />
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-sm-6">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Nombre carnet par paquet :</label>
                                        <input 
                                            type="number" 
                                            class="form-control"
                                            name='nb_carnet_paquet' 
                                            required 
                                            value={form.nb_carnet_paquet}
                                            onChange={onChangeHandler} 
                                            />
                                    </div>
                                    <div class="col-sm-6">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Nombre de liasse par Carnet :</label>
                                        <input 
                                            type="number" 
                                            class="form-control"
                                            name='nb_liasse_carnet'
                                            required 
                                            value={form.nb_liasse_carnet}
                                            onChange={onChangeHandler} 
                                            />
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
                                            value={form.quantite}
                                            onChange={onChangeHandler} 
                                            />
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
                                            // value={form.prix_achat}
                                            // onChange={onChangeHandler} 
                                            />
                                    </div>
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
