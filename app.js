const express = require('express');
const app = express();
const userRoute = require('./routes/user')
const postRoute = require('./routes/post')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// MiddleWare
app.use(bodyParser.json());
app.use('/post', postRoute);
app.use('/user', userRoute)

app.get('/', (req,res) => {
    res.send("Welcome to HomePage");
});

try {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => {
        console.log("Db Connected Successfully");
    })
} catch (error) {
    console.log(error);
    
}

app.listen(3000, () => {
    console.log(`Server started at port 3000`);
});