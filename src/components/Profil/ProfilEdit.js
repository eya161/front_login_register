import React from 'react';
import './ProfilEdit.css';
import avatar from './profile.png'
import Sidebar from '../Sidebar/Sidebar';

export default function ProfilEdit() {
  return (
	  <>
	  <Sidebar />
    <div class="container">
		<div class="main-body">
			<div class="row">
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
							<div class="d-flex flex-column align-items-center text-center">
								<img src={avatar} alt="Admin" class="rounded-circle p-1 bg-info" width="110" />
								<div class="mt-3">
									<h4>John Doe</h4>
									<p class="text-secondary mb-1">Full Stack Developer</p>
									<p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
								</div>
							</div>
							<hr class="my-4"/>
						</div>
					</div>
				</div>
				<div class="col-lg-8">
					<div class="card">
						<div class="card-body">
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Full Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" placeholder="John Doe"/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Email</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" placeholder="john@example.com" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Phone</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" placeholder="(239) 816-9029" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Mobile</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" placeholder="(320) 380-4539" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Address</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" placeholder="Bay Area, San Francisco, CA" />
								</div>
							</div>
							<div class="row">
								<div class="col-sm-3"></div>
								<div class="col-sm-3 text-secondary">
									<input type="button" class="btn btn-info px-4" value="Save Changes" />
								</div>
                                <div class="col-sm-6 text-secondary">
                                    <a class="btn btn-info " target="__blank" href="/ProfilPWD">Changer Mot de Passe</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</>
  )
}
