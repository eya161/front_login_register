import React from 'react';
import {useState, useEffect} from 'react';
import './ProfilEdit.css';
import avatar from './profile.png'
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Sidebar/Navbar';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ProfilEdit() {
	const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [telephone, settelephone] = useState("")
    const [profil, setprofil] = useState([])
	const history=useNavigate();
	const update = async () => {
        const userInfo = localStorage.getItem("userInfo");
        // const Id = localStorage.getItem("ID");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
        await axios.put(`https://127.0.0.1:8000/api/users/?roles=["ROLE_ADMIN"]`,
            {
                username,
                email,
                telephone
            }, config)



    }
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfo.slice(10, userInfo.length - 2)
            },
        };
            axios.get(`https://127.0.0.1:8000/api/users/?roles=["ROLE_ADMIN"]`, config)
                .then(res => {
                    console.log(res);
                    setprofil(res.data);
                    setusername(res.data.username);
                    setemail(res.data.email)
                    settelephone(res.data.telephone)
                })
                .catch(err => {
                    console.log(err)
                })

    }, []);
	return (
		<>
			<Navbar />
			<Form onSubmit={update()}>
			<div class="container">
				<div class="main-body">
					<div class="row">
					
						<div class="col-lg-4">
							<div class="card">
								<div class="card-body">
									<div class="d-flex flex-column align-items-center text-center">
										<img src={avatar} alt="Admin" class="rounded-circle p-1 bg-info" width="110" />
										<div class="mt-3">
											<h4>{username}</h4>
											<p class="text-secondary mb-1">Super Administrateur</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-8">
							<div class="card">
								<div class="card-body">
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Username</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<input type="text"  class="form-control" name='username'
                                                    defaultValue={username}
                                                    onChange={(e)=> setusername(e.target.value)} />
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Email</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<input type="email" class="form-control" name='email'
                                                    defaultValue={email}
                                                    onChange={(e)=> setemail(e.target.value)} />
										</div>
									</div>
									<div class="row mb-3">
										<div class="col-sm-3">
											<h6 class="mb-0">Mobile</h6>
										</div>
										<div class="col-sm-9 text-secondary">
											<input type="text" class="form-control" name='telephone'
                                                    defaultValue={telephone}
                                                    onChange={(e)=> settelephone(e.target.value)} />
										</div>
									</div>
									<div class="row">
										<div class="col-sm-3"></div>
										<div class="col-sm-3 text-secondary">
											<input type="button" class="btn btn-info px-4" value="Save Changes" onClick={() => { update(); history("/Profil") }}/>
										</div>
										<div class="col-sm-6 text-secondary">
											<a class="btn btn-info " href="/ProfilPWD">Changer Mot de Passe</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			</Form>
		</>
	)
}
