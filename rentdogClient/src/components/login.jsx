import '../styles/styles.css';
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

const Login = ({ credentials = f => f }) => {

    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();
    const [errorMessage, setErrorMessage] = useState("")

    async function fetchData(url) {
        return await axios.get(url).then((resp) => resp.data)
    }

    const checkCredential = (event) => {
        event.preventDefault();

        fetchData(`http://localhost:5000/api/userinfo/${email}`).then(user => {
            console.log(user)
            if (user !== null && user.pwd === pwd) {
                credentials(user)
            } else {
                setErrorMessage("User or password wrong")
            }
        })
    }

    return (<section className='allPageList'>
        <div>
            <h1 className="text-center container-fluid display-3 m-1">Rent A Dog</h1>
        </div>
        <div id="loginPage" className="container-fluid d-flex justify-content-center align-items-center">
            <div className="border border-dark rounded d-flex align-items-center shadow-lg p-3 mb-5 bg-body">
                <form>
                    {errorMessage && (
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            {errorMessage}
                        </div>
                    )}
                    <div className="form-group m-1">
                        <label htmlFor="userLogin">User</label>
                        <input type="email" className="form-control" id="userLogin" aria-describedby="emailHelp"
                            placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div className="form-group m-1">
                        <label htmlFor="userPassword">Password</label>
                        <input type="password" className="form-control" id="userPassword" placeholder="Password"
                            onChange={(event) => setPwd(event.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-lg m-4" onClick={checkCredential}>Login</button>
                        <Link to="/register" className="btn btn-secondary btn-lg m-4">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    </section>);
}

export default Login;