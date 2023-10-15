    require('dotenv').config()
    const express = require('express')
    const app = express()
    const db = require("./database/index")
    const PORT = process.env.PORT || 3000
    const patientRouter = require("./routers/patient.router.js")
    const doctorRouter = require("./routers/doctor.router.js")
    const AdminDocRouter = require("./routers/admin.doc.router.js")
    const AdminPatientRouter = require("./routers/admin.patient.router.js")
    const cors = require("cors")

    app.use(express.json())
    app.use(cors())
    app.use("/api/doctor/", doctorRouter);
    app.use("/api/patient/",patientRouter);
    app.use("/api/AdminDoc/",AdminDocRouter);
    app.use("/api/AdminPatient/",AdminPatientRouter);








    app.listen(PORT, () => console.log(`listening on ${PORT}`))















