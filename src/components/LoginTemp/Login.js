import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Login.css';
import axios from 'axios';
import Loading from '../Loading/Loading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setloading] = useState("")
    const history = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    "content-type": "application/json"
                }
            }
            setloading(true)
            const { data } = await axios.post(
                "http://127.0.0.1:8000/api/admin/login",
                {
                    username,
                    password
                },
                config
            );

            console.log(data);
            history("/Dashboard")
            localStorage.setItem("userInfo", JSON.stringify(data));
            setloading(false);
            setError(false);
        } catch (error) {
            setError(error.response.data.message);
            setloading(false);
            setError(true);
        }

    }

    return (
        <div className="maincontainer" >
            <div class="container-fluid">
                <div class="row no-gutter">
                    <div class="col-md-6 d-none d-md-flex bg-image"></div>
                    <div class="col-md-6 bg-photo" >
                        <div class="login d-flex align-items-center py-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-10 col-xl-8 mx-auto" style={{ marginTop: "-150px" }}>
                                        <h3 class="display-4">Welcome Back</h3>
                                        <hr />
                                        {error && <ErrorMessage />}
                                        {loading && <Loading />}
                                        <form onSubmit={submitHandler}>
                                            <div class="mb-3">
                                                <input
                                                    id="inputEmail"
                                                    type="username"
                                                    placeholder="Email address or Username"
                                                    required
                                                    autofocus=""
                                                    class="form-control rounded-pill border-0 shadow-sm px-4"
                                                    value={username}
                                                    onChange={(e) => setusername(e.target.value)}
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <input
                                                    id="inputPassword"
                                                    type="password"
                                                    placeholder="Password"
                                                    required
                                                    class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                                    value={password}
                                                    onChange={(e) => setpassword(e.target.value)}
                                                />
                                            </div>
                                            <div class="row">
                                                <div class=" col-sm-6 form-check mb-2">
                                                    <input
                                                        id="customCheck1"
                                                        type="checkbox"
                                                        class="form-check-input"
                                                    />
                                                    <label class="form-check-label" style={{ float: 'left' }}>Remember password</label>
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
