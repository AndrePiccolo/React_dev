import '../styles/styles.css';
import React, { useState } from 'react'

const Card = ({ name, image, breed, description, create = f => f }) => {

    const [date, setDate] = useState();

    const createContract = (event) => {
        event.preventDefault();
        if (date !== undefined) {
            create(name, breed, date)
        }
    }

    return (<div className="col-md-2">
        <div className="card">
            <img src={image} className="card-img-top" alt="dog Image" />
            <div className="card-body">
                <h5 className="card-title text-center">{name}</h5>
                <p className="card-text">Breed: {breed}</p>
                <p className="card-text">{description}</p>
                <form className='row g-3'>
                    <div className="col-auto col-mb-1">
                        <label htmlFor="inputDateTime" className="form-label">Select Date</label>
                    </div>
                    <div className="col-auto col-mb-1">
                        <input type="date" className="form-control" id="inputDateTime"
                            onChange={(event) => setDate(event.target.value)}
                        />
                    </div>
                    <div className="row g-1">
                        <button onClick={createContract} className="btn btn-primary btn-lg">Rent</button>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

export default Card;