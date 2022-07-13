const express = require("express");

const Doctor = require("../models/Doctor");

const router = express.Router();

router.post("/", (req, res) => {
  const doctor = new Doctor({
    name: req.body.name,
    qualification: req.body.qualification,
    sessions: req.body.sessions,
    minutes: req.body.minutes,
    calls: req.body.calls,
    loggedIn: req.body.loggedIn,
    ratings: req.body.ratings,
    availability: req.body.availability
  });

  doctor
    .save()
    .then((result) => {
      res.send({
        message: "Doctor data created successfully",
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

// /api/doctors
router.get("/", (req, res) => {
  Doctor.find()
    .then((doctors) => {
      res.send(doctors);
    })
    .catch((err) => console.log(err));
});

// /api/doctors/id
router.get("/:id", (req, res) => {
  const doctorId = req.params.id;

  Doctor.findById(doctorId)
    .then((doctor) => {
      doctor.sessions = req.body.sessions;
    })
    .catch((err) => console.log(err));
});

// /api/doctors/sessions/id
router.put("/sessions/:id", (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $inc: { sessions: req.body.sessions },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor Session updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/doctors/calls/id
router.put("/calls/:id", (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $inc: { calls: req.body.calls },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor Calls updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/doctors/minutes/id
router.put("/minutes/:id", (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $inc: { minutes: req.body.minutes },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor minutes updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/doctors/loggedin/all
router.get('/loggedin/all', (req, res) => {

  Doctor.find({loggedIn: 'Online'})
      .then(doctor => {
          res.send(doctor);
      })
      .catch(err => console.log(err))
});

// /api/doctors/loggedin/id
router.put('/loggedin/:id', (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { loggedIn: req.body.loggedIn },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor loggedIn updated successfully",
          data: result,
        });
      }
    }
  );
});



// /api/doctors/ratings/id
router.put('/ratings/:id', (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $push: { rating: {from: req.body.from, rating: req.body.rating} },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor Rating updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/doctors/availability/id
router.put('/monavailability/:id', (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { monAvailability: req.body.monAvailability },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor Monday Availability updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/doctors/availability/id
router.put('/tueavailability/:id', (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { tueAvailability: req.body.tueAvailability },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor Tue Availability updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/doctors/availability/id
router.put('/wedavailability/:id', (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { wedAvailability: req.body.wedAvailability },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor Availability updated successfully",
          data: result,
        });
      }
    }
  );
});


// /api/doctors/availability/id
router.put('/thuavailability/:id', (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { thuAvailability: req.body.thuAvailability },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor Availability updated successfully",
          data: result,
        });
      }
    }
  );
});


// /api/doctors/friavailability/id
router.put('/friavailability/:id', (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { friAvailability: req.body.friAvailability },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor Fri Availability updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/doctors/availability/id
router.put('/satavailability/:id', (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { satAvailability: req.body.satAvailability },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor Sat Availability updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/doctors/availability/id
router.put('/sunavailability/:id', (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { sunAvailability: req.body.sunAvailability },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor Sunday Availability updated successfully",
          data: result,
        });
      }
    }
  );
});

module.exports = router;
