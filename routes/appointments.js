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

// /api/appointment/accept/id
router.post('/accept/:id', (req, res) => {
    const appointmentId = req.params.id;

    Appointment.findById(appointmentId)
        .then(appointment => {
            appointment.acceptStatus = true;
            appointment.save(function(err) {
                if(!err) {
                    console.log("Appointment Accept Status updated");
                }
                else {
                    console.log("Error: appointment Accept update status fail");
                }
            });
            res.send(appointment);
        })
        .catch(err => console.log(err))
});

// /api/appointment/start/id
router.post('/start/:id', (req, res) => {
    const appointmentId = req.params.id;

    Appointment.findById(appointmentId)
        .then(appointment => {
            appointment.acceptStatus = true;
            appointment.save(function(err) {
                if(!err) {
                    console.log("Appointment Start Status updated");
                }
                else {
                    console.log("Error: appointment start update status fail");
                }
            });
            res.send(appointment);
        })
        .catch(err => console.log(err))
});

module.exports = router;