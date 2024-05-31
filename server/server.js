const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

const PORT = 5050
const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())