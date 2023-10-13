require('dotenv').config()
const express = require('express')
const faker = require('faker');
const app = express()
const db = require("./database/index")
const PORT = process.env.PORT || 3000
const patientRouter = require("./routers/patient.router.js")
const doctorRouter = require("./routers/doctor.router")
const reviewRouter = require("./routers/review.router")
const roomRouter = require("./routers/room.router")
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use("/api/doctor", doctorRouter);
app.use('/api/patient/',patientRouter)
app.use("/api/review",reviewRouter)
app.use("/api/room",roomRouter)

app.get("/users", (req, res, next) => {
    res.json([
        {
            "name": faker.name.findName(),
            "email": faker.internet.email(),
            "postCode": faker.address.zipCode(),
            "city": faker.address.cityName(),
            "country": faker.address.country(),
            "phoneNumber": faker.phone.phoneNumber(),
            "favouriteQuote": faker.lorem.sentence()
        }
    ]);
});







app.listen(PORT, () => console.log(`listening on ${PORT}`))















