import React from 'react';
import { useState} from 'react';
import '../Profil/ProfilEdit.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Sidebar from '../Sidebar/Sidebar';

export default function ClientForum() {
    const [photo, setPhoto] = useState("");
    const [statut, setStatut] = useState("");
    const [code, setcode] = useState("");
    const [email, setEmail] = useState("");
    const [groupement, setgroupement] = useState("");
    const [phone, setphone] = useState("");
    const [contact, setcontact] = useState("");
    const [fax, setfax] = useState("");
    const [address, setaddress] = useState("");
    const [RSFacturation, setRSFacturation] = useState("");
    const [address11, setaddress11] = useState("");
    const [address22, setaddress22] = useState("");
    const [ville1, setville1] = useState("");
    const [postal1, setpostal1] = useState("");
    const [pays1, setpays1] = useState("");
    const [RSLivraison, setRSLivraison] = useState("");
    const [address1, setaddress1] = useState("");
    const [address2, setaddress2] = useState("");
    const [ville2, setville2] = useState("");
    const [postal2, setpostal2] = useState("");
    const [pays2, setpays2] = useState("");
    const [username, setusername] = useState("");
    const [password1, setpassword1] = useState("");
    const [password2, setpassword2] = useState("");
    // const [comment, setcomment] = useState("");
    const [port, setport] = useState("");
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [loading, setloading] = useState("")
    
    const submitHandler = async (e) =>{
        e.preventDefault();
        if(password1 !== password2){
            setpassword1("");
            setpassword2("");
            return setError("Password do not match")
        }else{
            setMessage(null)
            try{
                const config = {
                    headers: {
                        "content-type":"application/json",
                    },
                };
                setloading(true);

                const {data} = await axios.post("http://127.0.0.1:8000/registerAdmin",
                {
                    username,
                    password1,
                    email,
                    code,
                    phone,
                    fax,
                    postal1,
                    postal2,
                    address,
                    address1,
                    address11,
                    address2,
                    address22,
                    ville1,
                    ville2,
                    groupement, 
                    contact,
                    RSLivraison
                }, config);
            }catch(error){
                setError(error.response.data.message);
            }
        }
        // try{
        //     const{data}= await axios.post("http://127.0.0.1:8000/registerAdmin",{username,password1})
        // }
        console.log(username,password1,password2)
       
    }
    return (
        <>
        <Sidebar />
        <div class="container">
            <div class="main-body">
                <div class="row" >
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
                    {loading && <Loading />}
                    <Form onSubmit={submitHandler} >
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
                                                    value={photo}
                                                    onChange={(e)=> setPhoto(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="row flex">
                                            <div class="col-lg-12">
                                                    <div class="col-sm-2 col-lg-offset-2 mb-2" style={{ margintop: '-100px' }}>
                                                        <label style={{ fontFamily: 'bold', fontSize:'18px'  }}>Statut</label>
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            style={{ backgroundColor: '#ece4f5d5'}}
                                                            value={statut}
                                                            onChange={(e)=> setStatut(e.target.value)} 
                                                        />
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Code Client:</label>
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            required=''
                                            value={code}
                                            onChange={(e)=> setcode(e.target.value)}
                                        />
                                    </div>
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Email:</label>
                                        <input 
                                            type="email"
                                            class="form-control" 
                                            required=''
                                            value={email}
                                            onChange={(e)=> setEmail(e.target.value)} 
                                        />
                                    </div>
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Groupement:</label>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            value={groupement}
                                            onChange={(e)=> setgroupement(e.target.value)} 
                                        />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Téléphone:</label>
                                        <input 
                                            type="mobile" 
                                            class="form-control"
                                            value={phone}
                                            onChange={(e)=> setphone(e.target.value)}    
                                        />
                                    </div>
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Personne a contacté:</label>
                                        <input 
                                            type="name" 
                                            class="form-control"
                                            value={contact}
                                            onChange={(e)=> setcontact(e.target.value)}    
                                        />
                                    </div>
                                    <div class="col-sm-4 text-secondary">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Fax:</label>
                                        <input 
                                            type="Fax" 
                                            class="form-control"
                                            value={fax}
                                            onChange={(e)=> setfax(e.target.value)} 
                                        />
                                    </div>
                                </div>
                                <div class="row mb-3 form-check">
                                    <div class="col-sm-6">
                                    <input 
                                        id="Check1" 
                                        type="checkbox" 
                                        class="form-check-input"
                                        value={address}
                                        onChange={(e)=> setaddress(e.target.value)}    
                                    />
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
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            required=''
                                            value={RSFacturation}
                                            onChange={(e)=> setRSFacturation(e.target.value)}    
                                        />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Adresse 1:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input 
                                            type="address" 
                                            class="form-control" 
                                            required=''
                                            value={address11}
                                            onChange={(e)=> setaddress11(e.target.value)}    
                                        />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Adresse 2:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input 
                                            type="address" 
                                            class="form-control"
                                            value={address22}
                                            onChange={(e)=> setaddress22(e.target.value)}    
                                        />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-4">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Ville:</label>
                                        <input 
                                            type="country" 
                                            class="form-control" 
                                            required='' 
                                            value={ville1}
                                            onChange={(e)=> setville1(e.target.value)}    
                                        />
                                    </div>
                                    <div class="col-sm-4">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Code Postal:</label>
                                        <input 
                                            type="code" 
                                            class="form-control" 
                                            required=''
                                            value={postal1}
                                            onChange={(e)=> setpostal1(e.target.value)}    
                                        />
                                    </div>
                                    <div class="col-sm-4">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Pays:</label>
                                        <Form.Select 
                                            aria-label="Default select example"
                                            value={pays1}
                                            onChange={(e)=> setpays1(e.target.value)}    
                                        >
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
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            required='' 
                                            value={RSLivraison}
                                            onChange={(e)=> setRSLivraison(e.target.value)}    
                                        />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Adresse 1:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input 
                                            type="address" 
                                            class="form-control" 
                                            required=''
                                            value={address1}
                                            onChange={(e)=> setaddress1(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Adresse 2:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input 
                                            type="address" 
                                            class="form-control"
                                            value={address2}
                                            onChange={(e)=> setaddress2(e.target.value)}    
                                        />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-4">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Ville:</label>
                                        <input 
                                            type="country" 
                                            class="form-control" 
                                            required='' 
                                            value={ville2}
                                            onChange={(e)=> setville2(e.target.value)}
                                        />
                                    </div>
                                    <div class="col-sm-4">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Code Postal:</label>
                                        <input 
                                            type="code" 
                                            class="form-control" 
                                            required=''
                                            value={postal2}
                                            onChange={(e)=> setpostal2(e.target.value)}    
                                        />
                                    </div>
                                    <div class="col-sm-4">
                                        <label style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Pays:</label>
                                        <Form.Select 
                                            aria-label="Default select example"
                                            value={pays2}
                                            onChange={(e)=> setpays2(e.target.value)}    
                                        >
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
                                    {error && <ErrorMessage />}
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px' }}>Username:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input 
                                            type="username" 
                                            class="form-control" 
                                            required
                                            value={username}
                                            onChange={(e)=> setusername(e.target.value)}    
                                        />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Mot de Passe:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input 
                                            type="password" 
                                            class="form-control" 
                                            required
                                            value={password1}
                                            onChange={(e)=> setpassword1(e.target.value)}    
                                        />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Mot de Passe à nouveau:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input 
                                            type="password" 
                                            class="form-control" 
                                            required
                                            value={password2}
                                            onChange={(e)=> setpassword2(e.target.value)}    
                                        />
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
                                        <Form.Control 
                                            as="textarea" 
                                            rows={3} 
                                            // value={comment}
                                            // onChange={(e)=> setcomment(e.target.value)}    
                                        />
                                    </Form.Group>
                            </div>
                            <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0" style={{ fontFamily: 'bold', color:'black', fontSize:'18px'  }}>Port:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            required=''
                                            // value={port}
                                            // onChange={(e)=> setport(e.target.value)}    
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-md-10 mb-3"></div>
                    <div class="col-md-1 mb-3">
                        <Button variant="primary" type="submit" className="button" style={{ fontFamily: 'bold', fontSize: '19px', background: '#4A4E69' }}>
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
