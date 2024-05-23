const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'aSecretKey';

app.use(express.json());

// sample user data
const users = [{
    id: 1,
    username: 'admin',
    password: 'password'
}];

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // check if the username already exists
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
    } else {
        const newUser = {
            id: users.length + 1,
            username,
            password
        }

        users.push(newUser);
        return res.status(201).json({ message: "User registered successfully" });
    };
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const validUser = users.find((user) => user.username === username && user.password === password);
    if (validUser) {
        const token = jwt.sign({ id: validUser.id, username: validUser.username }, secretKey);
        res.json({ token });
    } else {
        res.status(401).json({ message: "Invalid credentials"});
    };
});

app.get('/dashboard', verifyToken, (req,res) => {
    res.json({message:"Welcome to the dashboard!"});
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if(typeof token != 'undefined') {
        jwt.verify(token, secretKey, (err, authData) => {
            if(err) {
                res.sendStatus(403);
            } else {
                req.authData = authData;
                next();
            };
        });
    } else {
        res.sendStatus(401);
    }
}

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})