// Importing necessary libraries and modules
const mongoose = require('mongoose');            // MongoDB ODM library
const Customers = require('./customer');         // Imported MongoDB model for 'customers'
const express = require('express');              // Express.js web framework
const bodyParser = require('body-parser');       // Middleware for parsing JSON requests
const path = require('path');                    // Node.js path module for working with file and directory paths
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 5;
const secretKey = 'aSecretKeys';

// dictionary object to keep username and password
const usersDic = {};

// Creating an instance of the Express application
const app = express();

// Setting the port number for the server
const port = 3000;

// MongoDB connection URI and database name
const uri = "mongodb://localhost:27017";
mongoose.connect(uri, { 'dbName': 'customerDB' });

// Middleware to parse JSON requests
app.use("*", bodyParser.json());

// Serving static files from the 'frontend' directory under the '/static' route
app.use('/static', express.static(path.join(".", 'frontend')));

// Middleware to handle URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint for user login
app.post('/api/login', async (req, res) => {
    const data = req.body;
    console.log(data);
    let user_name = data['user_name'];
    let password = data['password'];

    const user = usersDic[user_name];
    if (!user || await bcrypt.compare(password, user.hashedpwd)) {
        res.status(401).send('User information incorrect');
        return;
    } else {
        res.status(200).send("Login successfully");
    }
});

// POST endpoint for adding a new customer
app.post('/api/add_customer', async (req, res) => {
    const data = req.body;
    console.log(data)
    const documents = await Customers.find({ user_name: data['user_name'] });
    if (documents.length > 0) {
        res.status(409).send("User already exists");
    }

    const hashedpwd = await bcrypt.hash(data['password'], saltRounds);
    usersDic[data['user_name']] = { hashedpwd };
    // Creating a new instance of the Customers model with data from the request
    const customer = new Customers({
        "user_name": data['user_name'],
        "age": data['age'],
        "password": hashedpwd,
        "email": data['email']
    });

    // Saving the new customer to the MongoDB 'customers' collection
    await customer.save();

    res.status(201).send("Customer added successfully")
});

// GET endpoint for the root URL, serving the home page
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'home.html'));
});

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];

    if(!token) {
        res.sendStatus(401);
        return;
    } else {
        jwt.verify(token, secretKey, (err, user) => {
            if(err) {
                res.send(403);
                return;
            } else {
                req.user = user;
                next();
            }
        })
    }
};

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
