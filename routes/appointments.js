const express = require("express");
const sseExpress = require("sse-express");
const Appointment = require("../models/Appointment");

const router = express.Router();

router.post("/", (req, res) => {
  const appointment = new Appointment({
    from: req.body.from,
    to: req.body.to,
    fromName: req.body.fromName,
    time: req.body.time,
    acceptStatus: req.body.acceptStatus,
    startStatus: req.body.startStatus,
    appointmentType: req.body.appointmentType,
  });

  //delete any appointment that has same to and from?
  
   Appointment.findOneAndDelete({from: req.body.from, to: req.body.to})
      .then(appointment => {
          console.log("Appointment deleted successfully", appointment);
      })
      .catch(err => console.log(err));  


   appointment
    .save()
    .then((result) => {
      res.send({
        message: "Appointment created successfully",
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

// /api/appointments
router.get("/", (req, res) => {
  Appointment.find()
    .then((appointments) => {
      res.send(appointments);
    })
    .catch((err) => console.log(err));
});


// /api/appointments
router.delete("/", (req, res) => {
   Appointment.findOneAndDelete({from: req.body.from, to: req.body.to})
      .then(appointment => {
      res.send({
        message: "Appointment deleted successfully",
        data: result,
      });
      })
      .catch(err => console.log(err)); 
});


// /api/appointments/upcoming/id
router.get('/upcoming/:id', (req, res) => {
  const userId = req.params.id;

  Appointment.find({from: userId})
      .then(appointment => {
          res.send(appointment);
      })
      .catch(err => console.log(err))
});

// /api/appointments/requests/id
router.get('/requests/:id', (req, res) => {
  const docId = req.params.id;

  Appointment.find({to: docId})
      .then(appointment => {
          if(appointment) {
            res.send(appointment);
          }
          else {
            console.log("No appointment for doctor Id ", docId, " found");
             res.send({
             message: "No appointment for doctor Id found",
             data: []
           });
          }
      })
      .catch(err => console.log(err))
});


module.exports = router;
