const express = require("express")
const patientRouter = express.Router()
const patientController = require("../controllers/patient.controller.js")



patientRouter.get("/get",patientController.getAll);
patientRouter.get("/one/:id",patientController.getOne);
patientRouter.put("/edit/:id",patientController.Update);
patientRouter.delete("/remove/:id",patientController.remove);
patientRouter.post("/login",patientController.login)
patientRouter.post("/register",patientController.register)
module.exports = patientRouter




