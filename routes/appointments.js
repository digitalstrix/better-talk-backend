const express = require("express");

const Appointment = require("../models/Appointment");

const router = express.Router();

router.post("/", (req, res) => {
  const appointment = new Appointment({
    from: req.body.from,
    to: req.body.to,
    time: req.body.time,
    acceptStatus: req.body.acceptStatus,
  });

  appointment.save()
  .then(result => {
      res.send({
          message: "Appointment created successfully",
          data: result
      })
  })
  .catch(err => console.log(err))
});

// /api/appointments
router.get('/', (req, res) => {
    Appointment.find()
        .then(appointments => {
            res.send(appointments)
        })
        .catch(err => console.log(err))
});

// /api/doctors/id
router.get('/:id', (req, res) => {
    const doctorId = req.params.id;

    Doctor.findById(doctorId)
        .then(doctor => {
            res.send(doctor);
        })
        .catch(err => console.log(err))
});

module.exports = router;