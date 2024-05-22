const mongoose = require('mongoose');
const Employees = require('./employee');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const uri = 'mongodb://localhost:27017';

mongoose.connect(uri, { 'dbName': 'employeeDB' });

// Middleware to parse JSON requests
app.use('*', bodyParser.json());

// Middleware for handling incoming requests
// Enables CORS for all routes
app.use(cors());

// GET endpoint to view all employees
app.get('/api/employees', async(req, res) => {
    const documents = await Employees.find();
    res.json(documents);
});

// POST endpoint to add a new employee
app.post('/api/add_employee', async(req, res) => {
    // console.log(req);
    let data = req.body;
    const newEmployee = new Employees({
        'emp_name': data['name'],
        'age': data['age'],
        'email': data['email'],
        'location': data['location']
    });

    // Save new employee to database
    await newEmployee.save();
    res.json({message: "Employee added successfully"});
})

// run server on port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});