const express = require("express")
const { getAll, getOne, deleteOne, updateOne, login, register } = require("../controllers/doctor.controllers")
const doctorRouter = express.Router()


doctorRouter.post("/login",login);
doctorRouter.get("/getAll",getAll);
doctorRouter.post("/register",register)
doctorRouter.get("/:id",getOne);
doctorRouter.delete("/:id",deleteOne);
doctorRouter.put("/:id",updateOne);


module.exports= doctorRouter

