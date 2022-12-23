import React, { Component } from 'react';

class Dog extends Component {

    constructor(name, image, breed, description) {
        super();
        this.name = name;
        this.image = image;
        this.breed = breed;
        this.description = description;
    }
}

export default Dog;