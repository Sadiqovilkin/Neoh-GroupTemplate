const app = require('./config/index');
const express = require('express')
const cors = require("cors");
const router = require('./routes/user.route');

app.use(express.json())
app.use(cors());


app.use(router);
