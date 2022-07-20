const express = require('express');
const cors = require('cors');
const path = require('path');
const port = 3001;
// const authRouter = require('./routes/auth.router');

const { connection } = require('./config/db');
connection();

const app = express();

app.use(express.json())
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(cors({
    origin: "http://localhost:3000"
}))

// app.use('/auth', authRouter);


app.listen(port, (req, res) => {
    console.log("Server Listening At Port 3001");
})