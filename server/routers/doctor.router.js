const express = require("express")
const { getAll, getOne, deleteOne, updateOne, login, register } = require("../controllers/doctor.controllers")
const doctorRouter = express.Router()
const authProtection = require("../midlwares/authmidalwre.js");


doctorRouter.post("/login",login);
doctorRouter.get("/getAll",getAll);
doctorRouter.post("/register",register)
doctorRouter.get("/getOne",authProtection,getOne);
doctorRouter.delete("/:id",deleteOne);
doctorRouter.put("/:id",updateOne);


module.exports= doctorRouter

