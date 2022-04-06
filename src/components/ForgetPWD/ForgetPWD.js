import React from 'react';
// import './ForgetPWD.css';

export default function ForgetPWD() {
    return (
        <div class="container">
            <div class="main-body">
                <div class="row">
                    <div class="col-lg-3"></div>
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mb-3">
                                    <h6 class="mb-0 text-center display-6">Donner votre Email:</h6>
                                    <hr />
                                    <br />
                                    <br />
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-9">
                                        <input type="email" class="form-control" required='' />
                                    </div>
                                    <div class="col-sm-2 text-secondary">
                                        <a class="btn btn-primary" target="__blank" href="/NewPWD">Vérifier</a>
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
