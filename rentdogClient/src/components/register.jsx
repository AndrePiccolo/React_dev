import { Link } from 'react-router-dom';
import '../styles/styles.css';
import logo from '../images/logo.jpg';
import User from './user';
import React, { useState } from 'react'
import axios from 'axios'

const RegisterUser = ({ AddNewUser = f => f }) => {
    const [user, setUser] = useState(new User());
    const [errorMessage, setErrorMessage] = useState("")

    const addUser = (event) => {
        event.preventDefault();
        user.isAdmin = false;
        axios.post("http://localhost:5000/api/userinfo", user)
            .then(() => {
                AddNewUser();
            })
            .catch(error => setErrorMessage(error.response.data))
    }

    return (<section className='allPageList'>

        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" width="130" height="90" />
            </Link>
        </nav>

        <h1 className="text-center display-1 m-0">Register User</h1>
        <hr className="my-4" />
        <div className="m-5">
            <form className="row g-3">
                {errorMessage && (
                    <div className="alert alert-dismissable alert-danger">
                        <p>{errorMessage.split(",")[0]}</p>
                    </div>
                )}
                <div className="col-md-1">
                    <label htmlFor="inputName" className="form-label">Name</label>
                </div>
                <div className=" col-md-4">
                    <input type="text" className="form-control" id="inputName"
                        onChange={(event) => {
                            user.name = event.target.value
                            setUser(user)
                        }}
                    />
                    <div id="nameHelpBlock" className="form-text">
                        Enter first and last name.
                    </div>
                </div>
                <div className=" col-md-1">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                </div>
                <div className=" col-md-4">
                    <input type="email" className="form-control" id="inputEmail"
                        onChange={(event) => {
                            user.email = event.target.value
                            setUser(user)
                        }}
                    />
                </div>

                <div className="row g-3">
                    <div className=" col-md-1">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                    </div>
                    <div className=" col-md-4">
                        <input type="password" className="form-control" id="inputPassword"
                            onChange={(event) => {
                                user.pwd = event.target.value
                                setUser(user)
                            }}
                        />
                        <div id="passwordHelpBlock" className="form-text">
                            Your password must be 6-8 characters long, and must not contain
                            spaces.
                        </div>
                    </div>
                </div>

                <div className="row g-3">
                    <div className=" col-md-1">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                    </div>
                    <div className=" col-md-4">
                        <input type="text" className="form-control" id="inputAddress"
                            onChange={(event) => {
                                user.address = event.target.value
                                setUser(user)
                            }} />
                    </div>
                    <div className=" col-md-1">
                        <label htmlFor="inputPhoneNumber" className="form-label">Phone Number</label>
                    </div>
                    <div className=" col-md-2">
                        <input type="tel" className="form-control" id="inputPhoneNumber"
                            onChange={(event) => {
                                user.phone = event.target.value
                                setUser(user)
                            }}
                        />
                    </div>
                </div>

                <div className="row g-3">
                    <div className=" col-md-1">
                        <label htmlFor="inputCity" className="form-label">City</label>
                    </div>
                    <div className=" col-md-2">
                        <input type="text" className="form-control" id="inputCity"
                            onChange={(event) => {
                                user.city = event.target.value
                                setUser(user)
                            }} />
                    </div>
                    <div className=" col-md-1">
                        <label htmlFor="inputProvince" className="form-label">Province</label>
                    </div>
                    <div className=" col-md-1">
                        <input type="text" className="form-control" id="inputProvince"
                            onChange={(event) => {
                                user.province = event.target.value
                                setUser(user)
                            }} />
                    </div>

                    <div className=" col-md-1">
                        <label htmlFor="inputPostalCode" className="form-label">Postal Code</label>
                    </div>
                    <div className=" col-md-2">
                        <input type="text" className="form-control" id="inputPostalCode"
                            onChange={(event) => {
                                user.zipcode = event.target.value
                                setUser(user)
                            }} />
                    </div>
                </div>

                <p className="lead">
                    <button onClick={addUser} className="btn btn-primary btn-lg">Register</button>
                </p>
            </form>
        </div>
    </section>
    );
}

export default RegisterUser;