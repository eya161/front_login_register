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
import Select from 'react-select';

export default function ClientForum() {
    // const [password, setpassword] = useState("");
    const [password2, setpassword2] = useState("");
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [form, setform] = useState({})
    const history = useNavigate();
    const [pays, setpays] = useState([])
    const [selectedPayID, setSelectedPayID] = useState(null);
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
        data.append('statut', statut);
        data.append('personnecontacter',form.personnecontacter)
        data.append('groupement',form.groupement)
        data.append('fax',form.fax)
        data.append('rs_facturation',form.rs_facturation)
        data.append('rslivraison',form.rslivraison)
        data.append('codepostalfacturation',form.codepostalfacturation)
        data.append('codepostallivraison',form.codepostallivraison )
        data.append('pays_id',selectedPayID)
        try {
            const userInfo = localStorage.getItem("userInfo");
            const config = {
                headers: {
                    "Content-type": "application/json",
                    'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
                },
            };
            console.log(config);
            if(form.password!==null && password2!==null){
                if (form.password !== password2) {
                    return setError("Password do not match")
                } else {
                    setMessage(null)
                }
            } else {
                setError(true)
            }   
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

            const data = await axios.get(
                `https://127.0.0.1:8000/api/pays/?statut=0`, config
            );
            const pays = data.data.map((pays) => {
                return {
                    value: pays.id,
                    label: pays.label,
                };
            });
            setpays(pays);            

        } catch (e) {
            console.log(e);
        }
    };

    // const handleSelect =(id)=>{
            
    //     const userInfo = localStorage.getItem("userInfo");
    //     //  console.log(userInfo);
    //     const config = {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //             'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
    //         },
    //     };
    //         axios.get(`https://127.0.0.1:8000/api/pays/${id}`,config)
    //         .then(res => {
    //             const [Id,setId] = useState();
    //             setId(res.data.id)
    //             console.log(Id);     
    //             form.pays_id=Id;  
    //         }).catch(e =>{
    //             console.log(e);
    //         })
            
    // };

    // const selectState =(e)=>{
    //     const label=e.target.label;
    //     const value=e.target.value;
    //     const [labels, setlabels] = useState("");
    //     console.log (labels);

    //   }


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
            <div className="container" style={{ paddingBottom: '100px' }}>
                <div className="row mb-1">
                    <nav aria-label="breadcrumb" className="mb-5" style={{ marginTop: '15px', backgroundColor: '#c9def7be ' }}>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/Home">Acceuil</a></li>
                            <li className="breadcrumb-item"><a href="/ClientGMJ">Liste des Clients</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Ajouter Client</li>
                        </ol>
                    </nav>
                </div>
                <div className="row mb-5">
                    <div className="col-md-10">
                        <h6 style={{ fontFamily: 'bold', fontSize: '35px' }}>Ajouter un client</h6>
                    </div>
                </div>
                <Form onSubmit={submitHandler} >
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-sm-7 mb-4" style={{ marginTop: '14px' }}>
                                            <div className="input-group col-sm-7" style={{ background: 'white', fontFamily: 'bold', fontSize: '18px' }}>
                                                <div className="input-group-prepend">
                                                </div>
                                                <div className="custom-file">
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="inputGroupFile01"
                                                        name='image'
                                                        onChange={(e)=>setform({...data,image:e.target.files[0]})}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="row flex">
                                                <div className="col-lg-12">
                                                    <div className="col-sm-2 col-lg-offset-2 mb-2" style={{ margintop: '-100px' }}>
                                                        <label style={{ fontFamily: 'bold', fontSize: '18px' }}>Statut</label>
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            onChange={(e) => {
                                                                if (e.target.checked== true) {
                                                                    setStatut(0);
                                                                } else {
                                                                    setStatut(1);
                                                                }
                                                            }}
                                                            // style={{ backgroundColor: '#c9def7be ' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code Client:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                name='codeclient'
                                                value={form.codeclient}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div className="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Email:</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                required
                                                name='email'
                                                value={form.email}
                                                // onChange={(event) => setFormData({ ...data, email: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div className="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Groupement:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='groupement'
                                                value={form.groupement}
                                                // onChange={(event) => setFormData({ ...data, groupement: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Téléphone:</label>
                                            <input
                                                type="mobile"
                                                className="form-control"
                                                name='telephone'
                                                value={form.telephone}
                                                // onChange={(event) => setFormData({ ...data, telephone: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div className="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Personne a contacté:</label>
                                            <input
                                                type="name"
                                                className="form-control"
                                                name='personnecontacter'
                                                value={form.personnecontacter}
                                                // onChange={(event) => setFormData({ ...data, personnecontacter: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div className="col-sm-4 text-secondary">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Fax:</label>
                                            <input
                                                type="Fax"
                                                className="form-control"
                                                name='fax'
                                                value={form.fax}
                                                // onChange={(event) => setFormData({ ...data, fax: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3 form-check">
                                        <div className="col-sm-6">
                                            <input
                                                id="Check1"
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <label htmlFor="Check1" className="form-check-label" style={{ float: 'left', fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Utiliser la même adresse pour la facturation et la livraison</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <h6 className="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Facturation</h6>
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>RS facturation:</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                name='rs_facturation'
                                                value={form.rs_facturation}
                                                // onChange={(event) => setFormData({ ...data, rs_facturation: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 1:</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="address"
                                                className="form-control"
                                                required
                                                name='adressfacturation1'
                                                value={form.adressfacturation1}
                                                // onChange={(event) => setFormData({ ...data, adressfacturation1: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 2:</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="address"
                                                className="form-control"
                                                name='adressfacturation2'
                                                value={form.adressfacturation2}
                                                // onChange={(event) => setFormData({ ...data, adressfacturation2: event.target.value})}
                                                onChange={onChangeHandler}

                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">

                                        <div className="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Ville:</label>
                                            <input
                                                type="country"
                                                className="form-control"
                                                required
                                                name='villefacturation'
                                                value={form.villefacturation}
                                                // onChange={(event) => setFormData({ ...data, villefacturation: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div className="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code Postal:</label>
                                            <input
                                                type="code"
                                                className="form-control"
                                                required
                                                name='codepostalfacturation'
                                                value={form.codepostalfacturation}
                                                // onChange={(event) => setFormData({ ...data, codepostalfacturation: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>

                                        <div className="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Pays:</label>

                                            <Select
                                                options={pays}
                                                onChange={(e) => setSelectedPayID(e.value) }
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <h6 className="mb-3 text-center" style={{ fontFamily: 'bold', fontSize: '25px' }}>Livraison</h6>
                                        <div className="col-sm-3 mb-3">
                                            <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>RS livraison:</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                name='rslivraison'
                                                value={form.rslivraison}
                                                // onChange={(event) => setFormData({ ...data, rslivraison: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 1:</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="address"
                                                className="form-control"
                                                required
                                                name='adresslivraison1'
                                                value={data.adresslivraison1}
                                                // onChange={(event) => setFormData({ ...data, adresslivraison1: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Adresse 2:</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="address"
                                                className="form-control"
                                                name='adresslivraison2'
                                                value={data.adresslivraison2}
                                                // onChange={(event) => setFormData({ ...data, adresslivraison2: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Ville:</label>
                                            <input
                                                type="country"
                                                className="form-control"
                                                required
                                                name='villelivraison'
                                                value={form.villelivraison}
                                                // onChange={(event) => setFormData({ ...data, villelivraison: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div className="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Code Postal:</label>
                                            <input
                                                type="code"
                                                className="form-control"
                                                required
                                                name='codepostallivraison'
                                                value={form.codepostallivraison}
                                                // onChange={(event) => setFormData({ ...data, codepostallivraison: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                        <div className="col-sm-4">
                                            <label style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Pays:</label>
                                            <Select
                                                options={pays}
                                                onChange={(e) => setSelectedPayID(e.value) }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <h6 className="mb-4 text-center" style={{ fontFamily: 'bold', fontSize: '30px', color: 'black' }}>Paramètres</h6>
                                        {error && <ErrorMessagePWD />}
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Username:</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="username"
                                                className="form-control"
                                                required
                                                name='username'
                                                value={form.username}
                                                // onChange={(event) => setFormData({ ...data, username: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Mot de Passe:</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="password"
                                                className="form-control"
                                                required
                                                name='password'
                                                value={form.password}
                                                // onChange={(event) => setFormData({ ...data, password: event.target.value})}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Mot de Passe à nouveau:</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="password"
                                                className="form-control"
                                                required
                                                value={password2}
                                                onChange={(e) => setpassword2(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="card" style={{ backgroundColor: '#c9def7be ' }}>
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Commentaire:</h6>
                                        </div>
                                        <Form.Group className="col-sm-9 mb-3" controlId="comment">
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ fontFamily: 'bold', color: 'black', fontSize: '18px' }}>Port:</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input
                                                type="text"
                                                className="form-control"
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
                        <div className="col-lg-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 mb-3"></div>
                        <div className="col-md-2 mb-3">
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
