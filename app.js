const express = require('express');
const { Mongoose } = require('mongoose');
const app = express();

const mongoose = require('./database/mongoose');

app.listen(3000, () => {
    console.log("server strated on port 3000 ");
});