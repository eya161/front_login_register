import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <div class="container Login">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="card-group mb-0" style={{backgroundColor:'#89f1ff'}}>
                        <div class="card p-4">
                            <div class="card-body">
                                <h1 style={{color:'hsla(12, 97%, 66%, 0.911)'}}>S'identifier</h1>
                                <hr/>
                                <br/>
                                <br/>
                                <h1 style={{color:'black', fontSize:'17px'  }}>Username or Email:</h1>
                                <div class="input-group mb-3">
                                    <span class="input-group-addon"><i class="fa fa-user" style={{ marginTop: '10px', marginLeft: '-10px', marginRight: '15px' }}></i></span>
                                    <input type="text" class="form-control" placeholder="Username or Email" />
                                </div>
                                <h1 style={{color:'black', fontSize:'17px'  }}>Mot de passe:</h1>
                                <div class="input-group mb-4">
                                    <span class="input-group-addon"><i class="fa fa-lock" style={{ marginTop: '10px', marginLeft: '-10px', marginRight: '15px' }}></i></span>
                                    <input type="password" class="form-control" placeholder="Mot de passe" />
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
                                        <button type="button" class="btn btn-link px-0">Mot de passe oublié?</button>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                            </div>
                        </div>
                        <div class="card py-5 d-none d-md-flex bg-delievery" style={{ width: '50%'/*, background: 'linear-gradient(to right, rgb(98, 182, 203),rgb(0, 126, 167),rgb(27, 73, 101))'*/ }}>
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
