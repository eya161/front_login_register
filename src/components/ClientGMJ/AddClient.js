import React from 'react';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ErrorMessagePWD from '../ErrorMessage/ErrorMessagePWD';
import NavbarUser from '../Navbar/NavbarUser';
import Footer from '../Footer/Footer';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ClientForum() {
    // const [password, setpassword] = useState("");
    const [password2, setpassword2] = useState("");
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [form, setform] = useState({})
    const history = useNavigate();
    const [pays, setpays] = useState([])
    const data = new FormData();

    const onChangeHandler = (e) =>{
        setform({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    // const onChangeFile = (e) =>{
    //     console.log(e.target.files[0]);
    //     const image = e.target.files[0].names;
    //     if (e.target && e.target.files[0]) {
    //         data.append('image', form.image);
    //     }
        
    // }

    const submitHandler = async (e) => {
        e.preventDefault();
        data.append('image',form.image)
        data.append('username',form.username)
        data.append('email',form.email)
        data.append('password',form.password)
        data.append('telephone',form.telephone)
        data.append('villelivraison',form.villelivraison)
        data.append('adresslivraison1',form.adresslivraison1)
        data.append('adresslivraison2',form.adresslivraison2)
        data.append('adressfacturation1',form.adressfacturation1)
        data.append('adressfacturation2',form.adressfacturation2)
        data.append('villefacturation',form.villefacturation)
        data.append('port',form.port)
        data.append('codeclient',form.codeclient)
        // data.append('statut',(form.statut ? form.statut:""))
        data.append('personnecontacter',form.personnecontacter)
        data.append('groupement',form.groupement)
        data.append('fax',form.fax)
        data.append('rs_facturation',form.rs_facturation)
        data.append('rslivraison',form.rslivraison)
        data.append('codepostalfacturation',form.codepostalfacturation)
        data.append('codepostallivraison',form.codepostallivraison )
        try {
            const userInfo = localStorage.getItem("userInfo");
            const config = {
                headers: {
                    "Content-type": "application/json",
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };
            console.log(config);
            // if (data.password !== password2) {
            //     return setError("Password do not match")
            // } else {
            //     setMessage(null)
            // }
            return axios.post(`https://127.0.0.1:8000/api/register?type=client`,
                data,
                config
            ),
                history("/ClientGMJ"),
                setError(false);
        } catch (error) {
            setError(error.response.data.message);
            setError(true);
        }
    };
    console.log(data);

    const getPaysData = async () => {
        try {
            const userInfo = localStorage.getItem("userInfo");
            //  console.log(userInfo);
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };
            console.log(config);
            const data = await axios.get(
                `https://127.0.0.1:8000/api/pays/?statut=0`, config
            );
            console.log(data.data);
            setpays(data.data);
        } catch (e) {
            console.log(e);
        }
    };


    // const submitHandlerPWD = async (e) => {
    //     e.preventDefault();
    //     if (data.password !== password2) {
    //         setpassword2("");
    //         return setError("Password do not match")
    //     } else {
    //         setMessage(null)
    //     }
    // }

    useEffect(() => {
        getPaysData();
    }, [])

    return (
        <>
            <NavbarUser />
            <div class="container" style={{ paddingBottom: '100px' }}>
                <div class="row mb-1">
                    <nav aria-label="breadcrumb" class="mb-5" style={{ marginTop: '15px', backgroundColor: '#c9def7be ' }}>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/Home">Acceuil</a></li>
                            <li class="breadcrumb-item"><a href="/ClientGMJ">Liste des Clients</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Ajouter Client</li>
                        </ol>
                    </nav>
                </div>
                <div class="row mb-5">
                    <div class="col-md-10">
                        <h6 style={{ fontFamily: 'bold', fontSize: '35px' }}>Ajouter un client</h6>
                    </div>
                </div>
                <Form onSubmit={submitHandler} >
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <div class="col-sm-7 mb-4" style={{ marginTop: '14px' }}>
                                            <div className="input-group col-sm-7" style={{ background: 'white', fontFamily: 'bold', fontSize: '18px' }}>
                                                <div className="input-group-prepend">
                                                </div>
                                                <div className="custom-file">
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="inputGroupFile01"
                                                        name='image'
                                                        // onChange={onChangeFile}
                                                        onChange={(e)=>setform({...data,image:e.target.files[0]})}
                                                    // aria-describedby="inputGroupFileAddon01"
                                                    // value={photo}
                                                    // onChange={(e)=> setPhoto(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-5">
                                            <div class="row flex">
                                                <div class="col-lg-12">
                                                    <div class="col-sm-2 col-lg-offset-2 mb-2" style={{ margintop: '-100px' }}>
                                                        <label style={{ fontFamily: 'bold', fontSize: '18px' }}>Statut</label>
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            // onChangeHandler={onChangeHandler}
                                                            // style={{ backgroundColor: '#c9def7be ' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code Client:</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                required
                                                name='codeclient'
                                                value={form.codeclient}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div class="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Email:</label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                required
                                                name='email'
                                                value={form.email}
                                                // onChange={(event) => setFormData({ ...data, email: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div class="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Groupement:</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name='groupement'
                                                value={form.groupement}
                                                // onChange={(event) => setFormData({ ...data, groupement: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Téléphone:</label>
                                            <input
                                                type="mobile"
                                                class="form-control"
                                                name='telephone'
                                                value={form.telephone}
                                                // onChange={(event) => setFormData({ ...data, telephone: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div class="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Personne a contacté:</label>
                                            <input
                                                type="name"
                                                class="form-control"
                                                name='personnecontacter'
                                                value={form.personnecontacter}
                                                // onChange={(event) => setFormData({ ...data, personnecontacter: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div class="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Fax:</label>
                                            <input
                                                type="Fax"
                                                class="form-control"
                                                name='fax'
                                                value={form.fax}
                                                // onChange={(event) => setFormData({ ...data, fax: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3 form-check">
                                        <div class="col-sm-6">
                                            <input
                                                id="Check1"
                                                type="checkbox"
                                                class="form-check-input"
                                            />
                                            <label for="Check1" class="form-check-label" style={{ float: 'left', fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Utiliser la même adresse pour la facturation et la livraison</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <h6 class="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Facturation</h6>
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>RS facturation:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                class="form-control"
                                                required
                                                name='rs_facturation'
                                                value={form.rs_facturation}
                                                // onChange={(event) => setFormData({ ...data, rs_facturation: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 1:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="address"
                                                class="form-control"
                                                required
                                                name='adressfacturation1'
                                                value={form.adressfacturation1}
                                                // onChange={(event) => setFormData({ ...data, adressfacturation1: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 2:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="address"
                                                class="form-control"
                                                name='adressfacturation2'
                                                value={form.adressfacturation2}
                                                // onChange={(event) => setFormData({ ...data, adressfacturation2: event.target.value})}
                                                onChange={onChangeHandler}

                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">

                                        <div class="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Ville:</label>
                                            <input
                                                type="country"
                                                class="form-control"
                                                required
                                                name='villefacturation'
                                                value={form.villefacturation}
                                                // onChange={(event) => setFormData({ ...data, villefacturation: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div class="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code Postal:</label>
                                            <input
                                                type="code"
                                                class="form-control"
                                                required
                                                name='codepostalfacturation'
                                                value={form.codepostalfacturation}
                                                // onChange={(event) => setFormData({ ...data, codepostalfacturation: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>

                                        <div class="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Pays:</label>
                                            <Form.Select aria-label="Default select example" >
                                                {pays
                                                    .map((item) => {
                                                        return (
                                                            <option key={item.id} value={item.id} >{item.label}</option>
                                                        )
                                                    })}
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <h6 class="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Livraison</h6>
                                        <div class="col-sm-3 mb-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>RS livraison:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                class="form-control"
                                                required
                                                name='rslivraison'
                                                value={form.rslivraison}
                                                // onChange={(event) => setFormData({ ...data, rslivraison: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 1:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="address"
                                                class="form-control"
                                                required
                                                name='adresslivraison1'
                                                value={data.adresslivraison1}
                                                // onChange={(event) => setFormData({ ...data, adresslivraison1: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 2:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="address"
                                                class="form-control"
                                                name='adresslivraison2'
                                                value={data.adresslivraison2}
                                                // onChange={(event) => setFormData({ ...data, adresslivraison2: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Ville:</label>
                                            <input
                                                type="country"
                                                class="form-control"
                                                required
                                                name='villelivraison'
                                                value={form.villelivraison}
                                                // onChange={(event) => setFormData({ ...data, villelivraison: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div class="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code Postal:</label>
                                            <input
                                                type="code"
                                                class="form-control"
                                                required
                                                name='codepostallivraison'
                                                value={form.codepostallivraison}
                                                // onChange={(event) => setFormData({ ...data, codepostallivraison: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div class="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Pays:</label>
                                            <Form.Select aria-label="Default select example" >
                                                {pays
                                                    .map((item) => {
                                                        return (
                                                            <option key={item.id} value={item.id} >{item.label}</option>
                                                        )
                                                    })}
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1"></div>
                        <div class="col-lg-10">
                            <div class="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <h6 class="mb-4 text-center" style={{ fontFamily: 'bold', fontSize: '30px', color: 'black' }}>Paramètres</h6>
                                        {error && <ErrorMessagePWD />}
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Username:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="username"
                                                class="form-control"
                                                required
                                                name='username'
                                                value={form.username}
                                                // onChange={(event) => setFormData({ ...data, username: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Mot de Passe:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="password"
                                                class="form-control"
                                                required
                                                name='password'
                                                value={form.password}
                                                // onChange={(event) => setFormData({ ...data, password: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Mot de Passe à nouveau:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="password"
                                                class="form-control"
                                                required
                                                value={password2}
                                                onChange={(e) => setpassword2(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1"></div>
                        <div class="col-lg-10">
                            <div class="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Commentaire:</h6>
                                        </div>
                                        <Form.Group className="col-sm-9 mb-3" controlId="comment">
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Port:</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                class="form-control"
                                                required
                                                name='port'
                                                value={form.port}
                                                // onChange={(event) => setFormData({ ...data, port: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-10 mb-3"></div>
                        <div class="col-md-2 mb-3">
                            <Button variant="primary" type="submit"className="button" style={{ fontFamily: 'bold', fontSize: '19px', backgroundColor: '#004b88b6' }}>
                                Enregistrer
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
            <Footer />
        </>
    )
}
