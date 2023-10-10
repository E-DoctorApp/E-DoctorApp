require('dotenv').config()
const express = require('express')
const app = express()
const db = require("./database/index")
const PORT = process.env.PORT || 3000
const patientRouter = require("./routers/patient.router.js")
const doctorRouter = require("./routers/doctor.router")

app.use(express.json())

app.use("/api/doctor", doctorRouter);
app.use('/api/patient/',patientRouter)








app.listen(PORT, () => console.log(`listening on ${PORT}`))















