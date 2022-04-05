import React from 'react';
import './ForgetPWD.css';

export default function NewPWD() {
  return (
        <div class="container">
            <div class="main-body">
                <div class="row">
                    <div class="col-lg-3"></div>
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mb-3">
                                    <h6 class="mb-0 text-center display-6">Saisir un nouveau mot de passe:</h6>
                                    <hr />
                                    <br />
                                    <br />
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-1"></div>
                                    <div class="col-sm-10">
                                        <label style={{fontSize:"20px",fontFamily:"bold"}}>Mot de Passe:</label>
                                        <input type="password" class="form-control" required='' />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-1"></div>
                                    <div class="col-sm-10">
                                        <label style={{fontSize:"20px",fontFamily:"bold"}}>Mot de Passe à nouveau:</label>
                                        <input type="password" class="form-control" required='' />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-8"></div>
                                    <div class="col-sm-3 text-secondary">
                                        <a class="btn btn-primary" target="__blank" href="/NewPWD">Enregistrer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
