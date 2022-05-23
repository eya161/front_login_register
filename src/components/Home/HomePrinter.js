import React from 'react';
import NavbarPrinter from '../Navbar/NavbarPrinter';
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
import image9 from './historique.jpg';
import image10 from './planning.jpg';
import image11 from './shipping.png';
import image12 from './bill.png';
import Footer from '../Footer/FooterPrinter';


export default function Home() {
    return (
        <>
            <NavbarPrinter />
            <div class="container mt-4 justify-content-center under">
                <div class="row mb-4">
                    <div class="col-md-4 border-right">
                        <div class="cards">
                            <a id='link' href="/CommandeEnCoursPrinter">
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
                                <img src={image3} alt="valider" style={{ width: "31.9%" }} />
                                <h5>BAT Validés</h5>
                                <p class="line3">Détails</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 border-right">
                        <div class="cards">
                            <a id='link' href="/BATRefuserPrinter">
                            <div class="first p-4 text-center">
                                <img src={image4} alt="refuser" style={{ width: "28.5%" }} />
                                <h5>BAT Refusés</h5>
                                <p class="line1">Détails</p>
                            </div></a>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-4">
                        <div class="cards">
                            <div class=" third p-4 text-center">
                                <img src={image6} alt="print" style={{ width: "31.8%" }} />
                                <h5>Dossier en Cours d'Impression</h5>
                                <p class="line3">Détails</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="cards">
                            <div class=" third p-4 text-center">
                                <img src={image10} alt="plan" style={{ width: "43%" }} />
                                <h5>Planning du Production</h5>
                                <p class="line3">Détails</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="cards">
                            <div class=" third p-4 text-center">
                                <img src={image11} alt="ship" style={{ width: "47.5%" }} />
                                <h5>Dossier à Expédier</h5>
                                <p class="line3">Détails</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-4 border-right">
                        <div class="cards">
                            <div class=" second p-4 text-center">
                                <img src={image12} alt="bill" style={{ width: "40%" }} />
                                <h5>Dossier en Attente de Facturation</h5>
                                <p class="line2">Détails</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 border-right">
                        <div class="cards wrap">
                        <a id='link' href="/StatistiquePrinter">
                            <div class=" second p-4 text-center">
                                <img src={image8} alt="stat" style={{ width: "26.8%" }} />
                                <h5>Statistiques</h5>
                                <p class="line2">Détails</p>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="cards">
                            <div class=" third  p-4 text-center">
                                <img src={image9} alt="hist" style={{ width: "23.7%" }} />
                                <h5>Archives</h5>
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
