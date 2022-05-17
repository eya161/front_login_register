import React from 'react';
import NavbarUser from '../Navbar/NavbarUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Home.css';
import image1 from './users.png';
import image2 from './order.png';
import image3 from './validate.png';
import image4 from './refused.jpg';
import image5 from './encours.jpg';
import image6 from './printing.png';
import image7 from './delievery.jpg';
import image8 from './statics.png';
import image9 from './historique.jpg'
import Footer from '../Footer/Footer';


export default function Home() {
    return (
        <>
            <NavbarUser />
            <div class="container mt-4 justify-content-center under">
                <div class="row mb-4">
                    <div class="col-md-1 border-right"></div>
                    <div class="col-md-5 border-right">
                        <div class="cards wrap" >
                        <a id='link' href="/ClientGMJ">
                            <div class="first  p-4 text-center" href="/ClientGMJ">
                                <img src={image1} alt="clients" style={{ width: "35%" }} />
                                <h5>Listes Clients</h5>
                                <p class="line1">Détails</p>
                            </div></a>
                        </div>
                    </div>
                    <div class="col-md-5 border-right" >
                        <div class="cards wrap" >
                        <a id='link' href="/CommandeGMJ">
                            <div class=" second p-4 text-center">
                                <img src={image2} alt="orders" style={{ width: "35%" }} href="/ClientGMJ"/>
                                <h5>Nouvelle Commande</h5>
                                <p class="line2">Détails</p>
                            </div></a>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-1 border-right"></div>
                    <div class="col-md-5">
                        <div class="cards">
                            <a id='link' href="/BATValider">
                            <div class=" third p-4 text-center">
                                <img src={image3} alt="valider" style={{ width: "25%" }} />
                                <h5>BAT Validés</h5>
                                <p class="line3">Détails</p>
                            </div></a>
                        </div>
                    </div>
                    <div class="col-md-5 border-right">
                        <div class="cards">
                            <div class="first p-4 text-center">
                                <img src={image4} alt="refuser" style={{ width: "22.2%" }} />
                                <h5>BAT Refusés</h5>
                                <p class="line1">Détails</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-4 border-right">
                        <div class="cards">
                            <a id='link' href="/CommandeEncours">
                            <div class=" second p-4 text-center">
                                <img src={image5} alt="encours" style={{ width: "31.9%" }} />
                                <h5>Commandes en Cours</h5>
                                <p class="line2">Détails</p>
                            </div></a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="cards">
                            <div class=" third p-4 text-center">
                                <img src={image6} alt="print" style={{ width: "31.8%" }} />
                                <h5>Dossier en Cours d'Impression</h5>
                                <p class="line3">Détails</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 border-right">
                        <div class="cards">
                            <div class="first p-4 text-center">
                                <img src={image7} alt="deliv" style={{ width: "53.3%" }} />
                                <h5>Dossier en Cours de Livraison</h5>
                                <p class="line1">Détails</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-1 border-right"></div>
                    <div class="col-md-5 border-right">
                        <div class="cards wrap">
                        <a id='link' href="/Statistique">
                            <div class=" second p-4 text-center">
                                <img src={image8} alt="stat" style={{ width: "25%" }} />
                                <h5>Statistiques</h5>
                                <p class="line2">Détails</p>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="cards">
                            <div class=" third  p-4 text-center">
                                <img src={image9} alt="hist" style={{ width: "22.2%" }} />
                                <h5>Historique Commandes</h5>
                                <p class="line3">Détails</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
