const { Sequelize, DataTypes } = require("sequelize")

const AppointmentsData =require("../../client/src/dummyData/AppointmentsData.json")
const messages =require("../../client/src/dummyData/messages.json")
const ReportData =require("../../client/src/dummyData/reports.json") 



const connection = new Sequelize(process.env.DB_URL)



connection.authenticate()
    .then(() => console.log("DB IS COONECTED"))
    .catch((err) => console.log(err))



const Patient = require("../models/patient.Model")(connection, DataTypes)
const Doctor = require("../models/doctor.Model")(connection, DataTypes)
const Appointment = require("../models/appointment.Model")(connection, DataTypes)
const Review = require("../models/review.Model")(connection, DataTypes)
const Room = require("../models/room.Model")(connection, DataTypes)
const Message = require("../models/message.Model")(connection, DataTypes)
const Report = require("../models/report.Model")(connection, DataTypes)
const Admin = require("../models/admin.Model")(connection, DataTypes)

Patient.hasMany(Review)
Review.belongsTo(Patient)


Patient.hasMany(Room)
Room.belongsTo(Patient)


Patient.hasMany(Message)
Message.belongsTo(Patient)




Patient.hasMany(Appointment)
Appointment.belongsTo(Patient)




Doctor.hasMany(Review)
Review.belongsTo(Doctor)


Doctor.hasMany(Room)
Room.belongsTo(Doctor)



Doctor.hasMany(Message)
Message.belongsTo(Doctor)




Doctor.hasMany(Appointment)
Appointment.belongsTo(Doctor)


Room.hasMany(Message)
Message.belongsTo(Room)



Patient.hasMany(Report)
Report.belongsTo(Patient)



Doctor.hasMany(Report)
Report.belongsTo(Doctor)


// Appointment.bulkCreate(AppointmentsData).then(() =>
//   console.log("appointments data have been saved")
// );
// Message.bulkCreate(messages).then(() =>
//   console.log("messages data have been saved")
// );
// Report.bulkCreate(ReportData, { ignoreDuplicates: true }).then(() =>
//   console.log("reports data have been saved")
// );

// connection.sync({alter: true})
module.exports = {
    Patient,
    Doctor,
    Appointment,
  Review,
   Room,
    Message,
    Report,
    Admin,
    connection

}





























// connection.sync({force: true})



// const AppointmentsData = require("../../client/src/dummyData/AppointmentsData.json");
// const MessageData = require("../../client/src/dummyData/messages.json");
// const ReportData = require("../../client/src/dummyData/reports.json");

// Appointment.bulkCreate(AppointmentsData, { ignoreDuplicates: true }).then(() =>
//   console.log("appointments data have been saved")
// );
// Message.bulkCreate(MessageData, { ignoreDuplicates: true }).then(() =>
//   console.log("messages data have been saved")
// );
// Report.bulkCreate(ReportData, { ignoreDuplicates: true }).then(() =>
//   console.log("reports data have been saved")
// );










