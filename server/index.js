require('dotenv').config()
const express = require('express')
const app = express()
const db = require("./database/index")
const PORT = process.env.PORT || 3000
const patientRouter = require("./routers/patient.router.js")
const doctorRouter = require("./routers/doctor.router.js")
const reviewRouter = require("./routers/review.router")
const roomRouter = require("./routers/room.router")
const appointmentRouter = require("./routers/appointementRouter.js")
const AdminDocRouter = require("./routers/admin.doc.router.js")
const AdminPatientRouter = require("./routers/admin.patient.router.js")

const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use("/api/doctor/", doctorRouter);
app.use("/api/patient/", patientRouter);
app.use("/api/review", reviewRouter)
app.use("/api/room", roomRouter)
app.use("/api/appointment/", appointmentRouter)
app.use("/api/AdminDoc/", AdminDocRouter);
app.use("/api/AdminPatient/", AdminPatientRouter);








app.listen(PORT, () => console.log(`listening on ${PORT}`))















