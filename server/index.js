require('dotenv').config()
const express = require('express')
const app = express()
const db = require("./database/index")
const PORT = process.env.PORT || 3000
const patientRouter = require("./routers/patient.router.js")
const doctorRouter = require("./routers/doctor.router")
const appointmentRouter = require("./routers/appointementRouter")
const cors = require("cors")
const http = require('http').Server(app);

app.use(express.json())
app.use(cors())
app.use("/api/doctor", doctorRouter);
app.use('/api/patient/', patientRouter)
app.use('/api/appointment/', appointmentRouter);








http.listen(PORT, () => console.log(`listening on ${PORT}`))


const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
  
    //sends the message to all the users on the server
    socket.on('message', (data) => {
        console.log('this is from back',data)
      socketIO.emit('messageResponse', data);
    });
  
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
  });













