import '../styles/styles.css';
import React, { useState } from 'react'
import axios from 'axios'

const CardAdmin = ({ _id, name, image, breed, description, removeDog = f => f, updDog = f => f }) => {
    const [nameUpd, setName] = useState(name);
    const [breedUpd, setBreed] = useState(breed);
    const [descUpd, setDesc] = useState(description);
    const [imageUpd, setImage] = useState(image);
    const [imageSelected, setImageSelected] = useState(image);
    const [errorMessage, setErrorMessage] = useState("")

    const deleteDog = (event) => {
        event.preventDefault();
        removeDog(event.target.value)
    }

    const updateDog = (event) => {
        event.preventDefault();
        const updateDog = { name: nameUpd, image: imageUpd, breed: breedUpd, description: descUpd }
        axios.put(`http://localhost:5000/api/doginfo/${event.target.value}`, updateDog)
            .then(() => {
                setImageSelected(imageUpd)
                updDog()
            })
            .catch(error => setErrorMessage(error.response.data))
    }

    return (<div className="col-md-2">
        <div className="card">
            {errorMessage && (
                <div className="alert alert-dismissable alert-danger">
                    <p>{errorMessage.split(",")[0]}</p>
                </div>
            )}
            <img src={imageSelected} className="card-img-top" alt="dog Image" width="auto" height="250" />
            <div className="card-body">
                <form className='row g-3'>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="name" name="name" defaultValue={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="breed" name="breed" defaultValue={breed}
                            onChange={(event) => setBreed(event.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="description" name="description" defaultValue={description}
                            onChange={(event) => setDesc(event.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="image" name="image" defaultValue={image}
                            onChange={(event) => setImage(event.target.value)}
                        />
                    </div>
                    <div className="row g-1">
                        <button onClick={updateDog} value={_id} className="btn btn-primary btn-lg">Update</button>
                        <button onClick={deleteDog} value={_id} className="btn btn-danger btn-lg">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

export default CardAdmin;