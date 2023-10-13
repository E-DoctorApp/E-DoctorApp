const db = require("./index");
const AppointmentsData = require("../../client/src/dummyData/AppointmentsData.json");
const MessageData = require("../../client/src/dummyData/messages.json");
const ReportData = require("../../client/src/dummyData/reports.json");

db.Appointment.bulkCreate(AppointmentsData, { ignoreDuplicates: true }).then(() =>
  console.log("appointments data have been saved")
);
db.Message.bulkCreate(MessageData, { ignoreDuplicates: true }).then(() =>
  console.log("messages data have been saved")
);
db.Report.bulkCreate(ReportData, { ignoreDuplicates: true }).then(() =>
  console.log("reports data have been saved")
);