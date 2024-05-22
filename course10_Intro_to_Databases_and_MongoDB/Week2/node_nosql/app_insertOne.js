const mongoose = require('mongoose');
const schema = mongoose.schema;

const Employee = require('./employee')

const uri = "mongodb://localhost:27017"

mongoose.connect(uri, {"dbName":"employeeDB"});

// Insert one new document
const newEmployee = new Employee({
    emp_name: 'John Doe',
    Department: "Marketing",
    salary: 30000,
    onsite: true
});

newEmployee.save().then(() => {
    Employee.find().then((data) => {
        console.log("\n\nDocuments in Employee collection after insertOne");
        console.log(data);
        mongoose.connection.close();
    });
}).catch((err) => {
    console.log(err);
});