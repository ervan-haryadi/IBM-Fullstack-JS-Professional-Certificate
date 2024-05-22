const mongoose = require('mongoose');
const schema = mongoose.schema;

const Employee = require('./employee')

const uri = "mongodb://localhost:27017"

mongoose.connect(uri, { "dbName": "employeeDB" })
    .then(() => {
        console.log("Connected with database");

        return Employee.deleteOne({ emp_name: "John Doe" });
    })
    .then((deleteOneResult) => {
        console.log("Deleting one data:", deleteOneResult);

        return Employee.deleteMany({ salary: { $lt: 400 }, onsite: true });
    })
    .then((deleteManyResults) => {
        console.log("Delete multiple data:", deleteManyResults);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        mongoose.connection.close();
    });