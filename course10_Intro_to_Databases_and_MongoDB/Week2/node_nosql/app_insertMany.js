const mongoose = require('mongoose');
const schema = mongoose.schema;

const Employee = require('./employee')

const uri = "mongodb://localhost:27017"

mongoose.connect(uri, {"dbName":"employeeDB"})
    .then(() => {
        console.log("Connected with database");

        return Employee.insertMany([
            {emp_name:"Jane Doe", Department:"IT", salary:300, onsite:false},
            {emp_name:"Jake Doe", Department:"HR", salary:200, onsite:false},
            {emp_name:"Jule Doe", Department:"Machinery", salary:150, onsite:true},
            {emp_name:"Jose Doe", Department:"Technical", salary:160, onsite:true}
        ]);
    })
    .then(() => {
        console.log("Data inserted successfully");

        return Employee.find();
    })
    .then((data) => {
        console.log("\nDocuments in Employee after insertMany:");
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        mongoose.connection.close();
    });