const mongoose = require('mongoose');
const schema = mongoose.schema;

const Employee = require('./employee')

const uri = "mongodb://localhost:27017"

mongoose.connect(uri, { "dbName": "employeeDB" })
    .then(() => {
        console.log("Connected with database");

        return Employee.updateOne({ emp_name: "John Doe" }, { salary: 90000 });
    })
    .then((updateOneResult) => {
        console.log("Update one data:", updateOneResult);
        console.log("Data updated successfully");

        return Employee.updateMany({ salary: { $lt: 400 } }, {onsite: true});
    })
    .then((updateManyResults) => {
        console.log("Update multiple data:", updateManyResults);
        console.log("Many records updated");
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        mongoose.connection.close();
    });