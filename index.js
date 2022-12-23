const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const User = require("./models/users.js")
const Dog = require("./models/dogs.js")
const Contract = require("./models/contracts.js")

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static("public"))

const url = "mongodb://localhost:27017/rentdogDB";

//1. Read Operations
app.get("/api/userinfo", async (req, res) => {
    try {
        await mongoose.connect(url);
        console.log("database connected");
        User.find((err, users) => {
            if (err) res.status(400).send(err.message)
            else {
                res.status(200).send(JSON.stringify(users))
            }
        });
    } catch (err) {
        console.log("ERROR: ", err);
    }
})

app.get("/api/userinfo/:email", async (req, res) => {
    try {
        let emailReceived = req.params.email;

        await mongoose.connect(url);
        console.log("database connected");

        User.findOne(
            {
                email: `${emailReceived}`
            },
            (err, user) => {
                if (err) res.status(400).send(err.message)
                else {
                    res.status(200).send(JSON.stringify(user))
                }
            })
    } catch (err) {
        console.log("ERROR: ", err);
    }
})

app.get("/api/doginfo", async (req, res) => {
    try {
        await mongoose.connect(url);
        console.log("database connected");
        Dog.find((err, dogs) => {
            console.log(err)
            if (err) res.status(400).send(err.message)
            else {
                res.status(200).send(JSON.stringify(dogs))
            }
        });
    } catch (err) {
        console.log("ERROR: ", err);
    }
})

app.get("/api/contractinfo", async (req, res) => {
    try {
        await mongoose.connect(url);
        console.log("database connected");
        Contract.find((err, contracts) => {
            if (err) res.status(400).send(err.message)
            else {
                res.status(200).send(JSON.stringify(contracts))
            }
        });
    } catch (err) {
        console.log("ERROR: ", err);
    }
})

//2. create operations to populate database
app.post("/api/userinfopopulate", async (req, res) => {
    try {

        await mongoose.connect(url);
        const populateUser = req.body;

        populateUser.map(element => {
            const { name, email, pwd, phone, address, city, province, zipcode, isAdmin } = element;

            const user = new User({
                name, email, pwd, phone, address, city, province, zipcode, isAdmin
            })
            user.save()
        });

        res.status(200).send(`operation success`)

    } catch (err) {
        res.status(400).send(err)
    }
})

app.post("/api/doginfopopulate", async (req, res) => {
    try {

        await mongoose.connect(url);
        const populateDog = req.body;

        populateDog.map(element => {
            const { name, image, breed, description } = element;

            const dog = new Dog({
                name, image, breed, description
            })
            dog.save()
        })

        res.status(200).send(`operation success`)
    } catch (err) {
        res.status(400).send(err)
    }
})

//2.create operations
app.post("/api/userinfo", async (req, res) => {
    try {

        const { name, email, pwd, phone, address, city, province, zipcode, isAdmin } = req.body;

        const user = new User({
            name, email, pwd, phone, address, city, province, zipcode, isAdmin
        })

        await mongoose.connect(url);
        console.log("database connected");
        user.save((err) => {
            if (err) res.status(400).send(err.message)
            else {
                res.status(200).send(`operation success`)
            }
        })

    } catch (err) {
        console.log("ERROR: ", err);
    }
})

app.post("/api/doginfo", async (req, res) => {
    try {

        const { name, image, breed, description } = req.body;

        const dog = new Dog({
            name, image, breed, description
        })

        await mongoose.connect(url);
        console.log("database connected");
        dog.save((err) => {
            if (err) res.status(400).send(err.message)
            else {
                res.status(200).send(`operation success`)
            }
        })

    } catch (err) {
        console.log("ERROR: ", err);
    }
})

app.post("/api/contractinfo", async (req, res) => {
    try {

        const { userId, dogName, dogBreed, date, like } = req.body;

        const contract = new Contract({
            userId, dogName, dogBreed, date, like
        })

        await mongoose.connect(url);
        console.log("database connected");
        contract.save((err) => {
            if (err) res.status(400).send(err.message)
            else {
                res.status(200).send(`operation success`)
            }
        })

    } catch (err) {
        console.log("ERROR: ", err);
    }
})

// //3. Update operations
app.put("/api/userinfo/:id", async (req, res) => {
    try {

        const { name, email, pwd, phone, address, city, province, zipcode, isAdmin } = req.body;

        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);

        await mongoose.connect(url);
        console.log("database connected");

        User.findByIdAndUpdate(
            { _id: _id },
            { name, email, pwd, phone, address, city, province, zipcode, isAdmin },
            (err, doc) => {
                if (err) res.status(400).send(err.message)
                else if (doc == null) {
                    res.status(200).send(`document not found`)
                } else {
                    res.status(200).send(`operation success`)
                }
            })

    } catch (err) {
        console.log("ERROR: ", err);
    }
})

app.put("/api/doginfo/:id", async (req, res) => {
    try {

        const { name, image, breed, description } = req.body;

        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);

        await mongoose.connect(url);
        console.log("database connected");

        Dog.findByIdAndUpdate(
            { _id: _id },
            { name, image, breed, description },
            (err, doc) => {
                if (err) res.status(400).send(err.message)
                else if (doc == null) {
                    res.status(200).send(`document not found`)
                } else {
                    res.status(200).send(`operation success`)
                }
            })

    } catch (err) {
        console.log("ERROR: ", err);
    }
})

app.put("/api/contractinfo/:id", async (req, res) => {
    try {

        const { dogName, dogBreed, date, like } = req.body;

        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);

        await mongoose.connect(url);
        console.log("database connected");

        Contract.findByIdAndUpdate(
            { _id: _id },
            { dogName, dogBreed, date, like },
            (err, doc) => {
                if (err) res.status(400).send(err.message)
                else if (doc == null) {
                    res.status(200).send(`document not found`)
                } else {
                    res.status(200).send(`operation success`)
                }
            })

    } catch (err) {
        console.log("ERROR: ", err);
    }
})

// //4. Delete operations
app.delete("/api/userinfo/:id", async (req, res) => {
    try {
        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);

        await mongoose.connect(url);
        console.log("database connected");

        User.findByIdAndDelete(
            { _id: _id },
            (err, doc) => {
                if (err) res.status(400).send(err.message)
                else if (doc == null) {
                    res.status(200).send(`document not found`)
                } else {
                    res.status(200).send(`operation success`)
                }
            })

    } catch (err) {
        console.log("ERROR: ", err);
    }
})

app.delete("/api/doginfo/:id", async (req, res) => {
    try {
        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);

        await mongoose.connect(url);
        console.log("database connected");

        Dog.findByIdAndDelete(
            { _id: _id },
            (err, doc) => {
                if (err) res.status(400).send(err.message)
                else if (doc == null) {
                    res.status(200).send(`document not found`)
                } else {
                    res.status(200).send(`operation success`)
                }
            })

    } catch (err) {
        console.log("ERROR: ", err);
    }
})

app.delete("/api/contractinfo/:id", async (req, res) => {
    try {
        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);

        await mongoose.connect(url);
        console.log("database connected");

        Contract.findByIdAndDelete(
            { _id: _id },
            (err, doc) => {
                if (err) res.status(400).send(err.message)
                else if (doc == null) {
                    res.status(200).send(`document not found`)
                } else {
                    res.status(200).send(`operation success`)
                }
            })

    } catch (err) {
        console.log("ERROR: ", err);
    }
})

const port = process.env.port || 5000
app.listen(port, () => {
    console.log(`the server is up and running on port ${port}`)
})