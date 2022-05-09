import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Loading from '../Loading/Loading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [error, setError] = useState("")
    const history = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    "content-type": "application/json"
                }
            }
            const { data } = await axios.post(
                "https://127.0.0.1:8000/api/login",
                {
                    username,
                    password
                },
                config
            );
            console.log(config);
            console.log(data);
            const token = data.token;
            const decodedToken = jwtDecode(token);
            const isAdmin = decodedToken.roles.includes("ROLE_CLIENT");
            console.log(isAdmin)
            if (isAdmin) { 
                localStorage.setItem("userInfo", JSON.stringify(data));
                history("/Home");
                setError(false);
                
            } else {
                setError(true);
            }
           
        } catch (error) {
            setError(true);
        }

    }
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="card-group mb-0" style={{backgroundColor:'#89f1ff'}}>
                        <div class="card p-4">
                            <div class="card-body">
                            
                                <h1 style={{color:'hsla(12, 97%, 66%, 0.911)'}}>S'identifier</h1>
                                <hr/>
                                <br/>
                                {error && <ErrorMessage />}
                                <br/>
                                <form onSubmit={submitHandler}>
                                <h1 style={{color:'black', fontSize:'17px'  }}>Username or Email:</h1>
                                <div class="input-group mb-3">
                                    <span class="input-group-addon"><i class="fa fa-user" style={{ marginTop: '10px', marginLeft: '-10px', marginRight: '15px' }}></i></span>
                                    <input 
                                        type="username" 
                                        class="form-control" 
                                        placeholder="Username or Email"
                                        required
                                        value={username}
                                        onChange={(e) => setusername(e.target.value)} />
                                </div>
                                <h1 style={{color:'black', fontSize:'17px'  }}>Mot de passe:</h1>
                                <div class="input-group mb-4">
                                    <span class="input-group-addon"><i class="fa fa-lock" style={{ marginTop: '10px', marginLeft: '-10px', marginRight: '15px' }}></i></span>
                                    <input 
                                        type="password" 
                                        class="form-control" 
                                        placeholder="Mot de passe"
                                        required
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)} />
                                </div>
                                {/* <div class="input-group mb-4">
                                <span class="input-group-addon"><i class="fa fa-user" style={{ marginTop: '10px', marginLeft: '-10px', marginRight: '15px' }}></i></span>
                                    <select class="form-select" aria-label="Default select example">
                                        <option value="1">GMJ</option>
                                        <option value="2">Client</option>
                                        <option value="3">Imprimeur</option>
                                    </select>
                                </div> */}
                                <div class="row">
                                    <div class="col-6">
                                        <button type="button" class="btn btn-primary px-4">Se Connecter</button>
                                    </div>
                                    <div class="col-6 text-right">
                                        <button type="submit" class="btn btn-link px-0">Mot de passe oublié?</button>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                            </form>
                            </div>
                        </div>
                        <div class="card py-5 d-none d-md-flex bg-delievery" >
                            {/* <div class="card-body text-center">
                                <div>
                                    <img src={Img1} alt="login" style={{width:'100%', marginTop:'18%'}}></img> 
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
