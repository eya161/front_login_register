import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Login.css';

export default function Login() {
    return (
        <div className="maincontainer" >
            <div class="container-fluid">
                <div class="row no-gutter">
                    <div class="col-md-6 d-none d-md-flex bg-image"></div>
                    <div class="col-md-6 bg-photo" >
                        <div class="login d-flex align-items-center py-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-10 col-xl-8 mx-auto" style={{marginTop:"-150px"}}>
                                        <h3 class="display-4">Welcome Back</h3>
                                        <hr />
                                        <form>
                                            <div class="mb-3">
                                                <input id="inputEmail" type="email" placeholder="Email address or Username" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </div>
                                            <div class="mb-3">
                                                <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                            </div>
                                            <div class="row">
                                                <div class=" col-sm-6 form-check mb-2">
                                                    <input id="customCheck1" type="checkbox" class="form-check-input" />
                                                    <label for="customCheck1" class="form-check-label" style={{ float: 'left' }}>Remember password</label>
                                                </div>
                                                <div class="col-sm-2"></div>
                                                <div class="col-sm-4 mb-2">
                                                    <a href="/ForgetPWD" style={{ fontFamily: "italic" }}>Forget Password</a>
                                                </div>
                                            </div>
                                            <div class="d-grid gap-2 mt-2">
                                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                            </div>
                                            <div class="text-center d-flex justify-content-between mt-4"><p>&copy;<a href="https://tanitweb.com/fr/" class="font-italic text-muted">
                                                <u>Tanit Web</u></a>-2022</p>
                                            </div>
                                        </form>
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
