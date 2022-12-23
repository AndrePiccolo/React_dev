import '../styles/styles.css';
import React, { useState } from 'react'
import axios from 'axios'

const AddDog = ({ addNewDog = f => f }) => {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [description, setDesc] = useState("");
    const [image, setImage] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const onSubmitForm = (event) => {
        event.preventDefault();
        const dogAdd = { name: name, image: image, breed: breed, description: description }
        axios.post("http://localhost:5000/api/doginfo", dogAdd)
            .then(() => {
                addNewDog()
                setName("");
                setBreed("");
                setDesc("");
                setImage("");
                setErrorMessage("")
            })
            .catch(error => setErrorMessage(error.response.data))
    }

    return (<div id="content" className="col-md-12">
        <form className="row m-2" onSubmit={onSubmitForm}>
            {errorMessage && (
                <div className="alert alert-dismissable alert-danger">
                    <p>{errorMessage.split(",")[0]}</p>
                </div>
            )}
            <div className="col-auto">
                <input type="text" className="form-control" id="name" name="name" placeholder='Name'
                    onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="col-auto">
                <input type="text" className="form-control" id="breed" name="breed" placeholder='Breed'
                    onChange={(event) => setBreed(event.target.value)}
                />
            </div>
            <div className="col-auto">
                <input type="text" className="form-control" id="description" name="description" placeholder='Description'
                    onChange={(event) => setDesc(event.target.value)}
                />
            </div>
            <div className="col-auto">
                <input type="text" className="form-control" id="image" name="image" placeholder='Image URL'
                    onChange={(event) => setImage(event.target.value)}
                />
            </div>
            <div className="col-auto">
                <button className="btn btn-primary btn">Add</button>
            </div>
        </form>
    </div>);
}

export default AddDog;