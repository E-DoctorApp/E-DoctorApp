require('dotenv').config ()
const express = require('express')
const app = express()
const db= require("./database/index")
const PORT = process.env.PORT || 3000














app.listen(PORT, () => console.log(`listening on ${PORT}`))















