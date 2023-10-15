const {Room} = require("../database/index")

module.exports.makeRoom = async(req,res)=>{
    try {
        const aRoom= await Room.create(req.body)
        res.status(200).json(aRoom)
    } catch (error) {
        throw Error(error)
    }
}

module.exports.getAllRoomsForPatient = async (req,res)=>{
    try {
        const patRooms = await Room.findAll({where:{PatientId:req.params.patId}})
        res.status(200).json(patRooms)
    } catch (error) {
        throw Error(error)
    }
}
module.exports.getAllRoomsForDoctor= async (req,res)=>{
    try {
        const docRooms = await Room.findAll({where:{DoctorId:req.params.docId}})
        res.status(200).json(docRooms)
    } catch (error) {
        throw Error(error);
    }
}