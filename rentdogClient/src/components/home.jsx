import NavBar from "./navBar";
import '../styles/styles.css';
import React, { useState } from 'react'

const Home = ({ user, update = f => f }) => {
    const [activeUser, setActiveUser] = useState(user);

    const updateUser = (event) => {
        event.preventDefault();
        update(activeUser)
    }

    return (<section className='allPageList'>
        <NavBar admin={user.isAdmin} />
        <div>
            <h1 className="display-4">Hello, {activeUser.name}!</h1>
            <hr className="my-4" />
            <div className="m-5">
                <form className="row g-3">
                    <div className="col-auto col-md-1">
                        <label htmlFor="inputName" className="form-label">Name</label>
                    </div>
                    <div className="col-auto col-md-4">
                        <input type="text" className="form-control" id="inputName" defaultValue={activeUser.name}
                            onChange={(event) => {
                                activeUser.name = event.target.value
                                setActiveUser(activeUser)
                            }}
                        />
                    </div>
                    <div className="col-auto col-md-1">
                        <label htmlFor="inputPhoneNumber" className="form-label">Phone Number</label>
                    </div>
                    <div className="col-auto col-md-5">
                        <input type="tel" className="form-control" id="inputPhoneNumber" defaultValue={activeUser.phone}
                            onChange={(event) => {
                                activeUser.phone = event.target.value
                                setActiveUser(activeUser)
                            }}
                        />
                    </div>

                    <div className="row g-3">
                        <div className="col-auto col-md-1">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                        </div>
                        <div className="col-auto col-md-4">
                            <input type="text" className="form-control" id="inputAddress" defaultValue={activeUser.address}
                                onChange={(event) => {
                                    activeUser.address = event.target.value
                                    setActiveUser(activeUser)
                                }}
                            />
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-auto col-md-1">
                            <label htmlFor="inputCity" className="form-label">City</label>
                        </div>
                        <div className="col-auto col-md-2">
                            <input type="text" className="form-control" id="inputCity" defaultValue={activeUser.city}
                                onChange={(event) => {
                                    activeUser.city = event.target.value
                                    setActiveUser(activeUser)
                                }}
                            />
                        </div>
                        <div className="col-auto col-md-1">
                            <label htmlFor="inputProvince" className="form-label">Province</label>
                        </div>
                        <div className="col-auto col-md-1">
                            <input type="text" className="form-control" id="inputProvince" defaultValue={activeUser.province}
                                onChange={(event) => {
                                    activeUser.province = event.target.value
                                    setActiveUser(activeUser)
                                }}
                            />
                        </div>

                        <div className="col-auto col-md-1">
                            <label htmlFor="inputPostalCode" className="form-label">Postal Code</label>
                        </div>
                        <div className="col-auto col-md-2">
                            <input type="text" className="form-control" id="inputPostalCode" defaultValue={activeUser.zipcode}
                                onChange={(event) => {
                                    activeUser.zipcode = event.target.value
                                    setActiveUser(activeUser)
                                }}
                            />
                        </div>
                    </div>

                    <p className="lead">
                        <button onClick={updateUser} value={activeUser.userId} className="btn btn-primary btn-lg">Update my information</button>
                    </p>
                </form>
            </div>
        </div>
    </section>);
}

export default Home;