// import React, { Component } from "react";
// import Form from 'react-bootstrap/Form';
// import { Button } from 'react-bootstrap';
// import Img1 from './key.png';
// import './Login.css';

// export default class Login extends Component {
//     render() {
//         return (
//             <div className="container"style={{width:'35%'}}>
//                 <div className="row" >
//                     <img src={Img1} alt="login" style={{ width: '155px'}}></img>
//                     <Form>
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                             <Form.Label>Username or Email</Form.Label>
//                             <Form.Control className="border" type="email" placeholder="Enter your username or Email" />
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="formBasicPassword">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control className="border" type="password" placeholder="Password"/>
//                             <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
//                         </Form.Group>
//                         <Form.Group className="check" controlId="formBasicCheckbox">
//                             <Form.Check type="checkbox" label="Check me out" />
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                             <a href="#">forget password?</a>
//                         </Form.Group>
//                         <Button variant="primary" type="submit" className="button">
//                             Submit
//                         </Button>
//                     </Form>
//                 </div>
//             </div>
//         );
//     }
// }