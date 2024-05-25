const express = require('express');

const app = express();
const PORT = 3000;

// working GET endpoint
app.get('/', async (req, res) => {
    res.send("This endpoint works");
});

// GET endpoint
app.get('/squarenumber/:num', async (req, res, next) => {
    let x = req.params.num;
    if (isNaN(x)) {
        next(new Error("Input is not a number"));
        return;
    }
    res.json({ "square": x * x });
});

app.get('/cubenumber/:num', async (req, res, next) => {
    let x = req.params.num;
    if (isNaN(x)) {
        const err = new Error('Invalid input');
        err.statusCode = 400;
        err.details = "The input must be a number";
        next(err);
    } else {
        res.json({ "cube": x * x * x });
    };
});

app.get('/getelementatindex/:mystr/:idx', async (req, res, next) => {
    let mystr = req.params.mystr;
    let idx = req.params.idx;
    if (isNaN(idx)) {
        next(new Error("Index is not a number"));
        return;
    }
    if (idx < 0) {
        next(new Error('Invalid index number'));
    } else if (idx <= mystr.length) {
        let charAtIdx = mystr.charAt(idx - 1);
        res.json({ 'Element at index': charAtIdx });
    } else {
        next(new Error("Index greater than string length"));
    };
});

// Error global handler
app.use((err, req, res, next) => {
    // Set default values for status code and status if not provided in the error object
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "Error";

    // Log the error stack to the console for debugging purposes
    console.log(err.stack);

    // Send a JSON response with formatted error details
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});