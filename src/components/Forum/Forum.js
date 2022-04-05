// import React, { useState, useRef } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'


// export default function Forum() {
//     return (
//         <div className="maincontainer" style={{ background: '#eff5f8ad', height: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
//             {/* 'linear-gradient(to right,rgb(219, 248, 248,0.788),rgba(170, 225, 241, 0.788),rgba(152, 219, 240, 0.788),rgba(140, 226, 252, 0.788))' */}
//             <div class="container" >
//                 <br/>
//                 <div class="row">
//                 <nav aria-label="breadcrumb" class="main-breadcrumb">
//                     <ol class="breadcrumb">
//                         <li class="breadcrumb-item"><a href="/Dashboard">Acceuil</a></li>
//                         <li class="breadcrumb-item"><a href="/Client">Liste des clients</a></li>
//                         <li class="breadcrumb-item active" aria-current="page">Ajouter Client</li>
//                     </ol>
//                 </nav>
//                 </div>
//                 <br />
//                 <div class="row">
//                     <div class="col-lg-7 mb-4" style={{ marginTop: '14px' }}>
//                         <div className="input-group col-sm-7" style={{ background: 'beige', borderRadius: '25px' }}>
//                             <div className="input-group-prepend">
//                             </div>
//                             <div className="custom-file">
//                                 <input
//                                     type="file"
//                                     className="custom-file-input"
//                                     id="inputGroupFile01"
//                                     aria-describedby="inputGroupFileAddon01"
//                                     style={{ borderRadius: '25px' }}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-lg-5">
//                         <div class="row flex">
//                             <div class="col-lg-12">
//                                 <Form>
//                                     <div class="col-sm-2 col-lg-offset-2 mb-2" style={{ margintop: '-100px' }}>
//                                         <label style={{ fontFamily: 'italic' }}>Status</label>
//                                         <Form.Check
//                                             type="switch"
//                                             id="custom-switch"
//                                             style={{ color: 'beige' }}
//                                         />
//                                     </div>
//                                 </Form>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-lg-4 mb-2">
//                         <input id="code" type="text" placeholder="Code" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
//                     </div>
//                     <div class="col-lg-4 mb-2">
//                         <input id="name" type="text" placeholder="Prénom" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
//                     </div>
//                     <div class="col-lg-4 mb-2">
//                         <input id="LastName" type="text" placeholder="Nom" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
//                     </div>
//                     <div class="col-lg-4 mb-2">
//                         <input id="email" type="email" placeholder="Adresse Email" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
//                     </div>
//                     <div class="col-lg-4 mb-2">
//                         <input id="fax" type="fax" placeholder="Fax" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
//                     </div>
//                     <div class="col-lg-4 mb-2">
//                         <Form.Select aria-label="Default select example" style={{ borderRadius: '25px' }}>
//                             <option value="1">Intermédiaire</option>
//                             <option value="2">Imprimeur</option>
//                             <option value="3">Client</option>
//                         </Form.Select>
//                     </div>
//                     <div class="col-lg-4 mb-2">
//                         <input id="phone" type="phone" placeholder="Téléphone" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
//                     </div>
//                     <div class="col-lg-4 mb-2">
//                         <input id="address1" type="address" placeholder="Adresse 1" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
//                     </div>
//                     <div class="col-lg-4 mb-2">
//                         <input id="address2" type="address" placeholder="Adresse 2" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
//                     </div>
//                     <div class="col-lg-4 mb-2">
//                         <input id="zipcode" type="code" placeholder="Code Postal" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
//                     </div>
//                     <div class="col-lg-4 mb-2">
//                         <input id="addressdel1" type="address" placeholder="Adresse de Livraison 1" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
//                     </div>
//                     <div class="col-lg-4 mb-2">
//                         <input id="addressdel2" type="address" placeholder="Adresse de Livraison 2" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
//                     </div>
//                     <div class="col-lg-4 mb-2">
//                         <input id="facturation" type="code" placeholder="RS Facturation" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
//                     </div>
//                     <div class="col-lg-4 mb-2">
//                         <input id="livraison" type="code" placeholder="RS Livraison" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
//                     </div>
//                 </div>
//                 <div class="row" style={{ marginTop: '-200px' }}>
//                     <div class="col-sm-12">

//                         <div class="register d-flex align-items-center py-5">
//                             <div class="container">
//                                 <div class="row">
//                                     <div class="col-lg-10 col-xl-8 mx-auto">
//                                         <h3 style={{ fontFamily: 'italic' }}>Paramétre</h3>
//                                         <hr />
//                                         <form>
//                                             <div class="mb-3">
//                                                 <input id="inputEmail" type="username" placeholder="Username" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
//                                             </div>
//                                             <div class="mb-3">
//                                                 <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
//                                             </div>
//                                             <div class="mb-3">
//                                                 <input id="inputPassword" type="password" placeholder="Verify Your Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="col-sm-8"></div>
//                     <div class="col-sm-4 mb-4">
//                         <Button variant="primary">Enregistrer</Button>{' '}
//                     </div>
//                 </div>

//             </div>
//         </div>

//     )
// }
