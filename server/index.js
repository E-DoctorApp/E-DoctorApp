require('dotenv').config()
const express = require('express')
const app = express()
const db = require("./database/index")
const PORT = process.env.PORT || 3000
const doctorRouter = require("./routers/doctor.router")



app.use(express.json())

app.use("/api/doctor", doctorRouter);








app.listen(PORT, () => console.log(`listening on ${PORT}`))















