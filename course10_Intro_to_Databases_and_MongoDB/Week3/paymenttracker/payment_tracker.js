const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const VendorPaymentsRouter = require('./routes/vendor_payment');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
const uri = 'mongodb://localhost:27017';
mongoose.connect(uri, {'dbName':'transactionsDB'});

// Use Vendor Payments routes
app.use('/vendorPayments', VendorPaymentsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});