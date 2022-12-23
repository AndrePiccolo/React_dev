import React, { Component } from 'react';

class User extends Component {

    constructor(name, email, pwd, phone, address, city, province, zipcode, isAdmin) {
        super();
        this.name = name;
        this.email = email;
        this.pwd = pwd;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.province = province;
        this.zipcode = zipcode;
        this.isAdmin = isAdmin;
    }
}

export default User;