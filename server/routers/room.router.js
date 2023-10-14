const express = require("express")
const {makeRoom,getAllRoomsForPatient,getAllRoomsForDoctor} = require("../controllers/room.controller")
const route = express.Router()

route.post("/makeRoom",makeRoom)
route.get("/getAllPat/:patId",getAllRoomsForPatient)
route.get("/getAllDoc/:docId",getAllRoomsForDoctor)

module.exports = route
