import React, { Component } from 'react';

class ContractObj extends Component {

    constructor(userId, dogName, dogBreed, date, like) {
        super();
        this.userId = userId;
        this.dogName = dogName;
        this.dogBreed = dogBreed;
        this.date = date;
        this.like = like;
    }
}

export default ContractObj;