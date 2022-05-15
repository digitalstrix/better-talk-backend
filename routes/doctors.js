const express = require("express");

const Doctor = require("../models/Doctor");

const router = express.Router();

router.post("/", (req, res) => {
  const doctor = new Doctor({
    name: req.body.name,
    qualification: req.body.qualification,
  });

  doctor.save()
  .then(result => {
      res.send({
          message: "Doctor data created successfully",
          data: result
      })
  })
  .catch(err => console.log(err))
});

// /api/doctors
router.get('/', (req, res) => {
    Doctor.find()
        .then(doctors => {
            res.send(doctors)
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