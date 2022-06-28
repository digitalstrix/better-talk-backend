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
          res.send(appointment);
      })
      .catch(err => console.log(err))
});


module.exports = router;
