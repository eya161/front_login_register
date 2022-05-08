import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoGoogleplus } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';

export default function Footer() {
    return (
        <section id="footer">
            <div class="container">
                <div class="row text-center text-xs-center text-sm-left text-md-left">
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <h5>About</h5>
                        <ul class="list-unstyled quick-links">
                            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Home</a></li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <h5>Support</h5>
                        <ul class="list-unstyled quick-links">
                            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Legal Notice</a></li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <h5>Contact</h5>
                        <ul class="list-unstyled quick-links">
                            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Call Us</a></li>
                        </ul>
                    </div>
                </div>
                <footer class="footer bg-footer footer-bar">
                    <div class="container text-center" style={{marginTop:'10px'}}>
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <div class="text-sm-left">
                                    <p class="mb-0" style={{color:"white"}}>Created By &copy;Tanit Web : 2022 <i class="mdi mdi-heart text-danger"></i></p>
                                </div>
                            </div>
                            <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <ul class="list-unstyled text-sm-right social-icon social mb-0">
                                    <li class="list-inline-item"><a href="https://www.facebook.com/tanitweb" class="rounded"><BsFacebook /></a></li>
                                    <li class="list-inline-item"><a href="https://tanitweb.com/fr/" class="rounded"><IoLogoGoogleplus /></a></li>
                                    <li class="list-inline-item"><a href="https://www.linkedin.com/company/tanitweb/" class="rounded"><BsLinkedin /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </section >
    )
}
