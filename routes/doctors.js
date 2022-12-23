const express = require("express");

const Doctor = require("../models/Doctor");

const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const fs = require("fs");

function base64Encode(file) {
  var body = fs.readFileSync(file);
  return body.toString("base64");
}

router.post("/", (req, res) => {
  const doctor = new Doctor({
    name: req.body.name,
    qualification: req.body.qualification,
    sessions: req.body.sessions,
    minutes: req.body.minutes,
    calls: req.body.calls,
    loggedIn: req.body.loggedIn,
    ratings: req.body.ratings,
    availability: req.body.availability,
    patients: req.body.patients,
    about: req.body.about,
    experience: req.body.experience,
    description: req.body.description,
    age: req.body.age,
    gender: req.body.gender,
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
      res.send(doctor);
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
router.get("/loggedin/all", (req, res) => {
  Doctor.find({ loggedIn: "Online" })
    .then((doctor) => {
      res.send(doctor);
    })
    .catch((err) => console.log(err));
});

// /api/doctors/loggedin/id
router.put("/loggedin/:id", (req, res) => {
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
router.put("/ratings/:id", (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $push: {
        rating: {
          from: req.body.from,
          rating: req.body.rating,
          date: req.body.date,
          feedback: req.body.feedback,
        },
      },
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
router.put("/availability/:id", (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { availability: req.body.availability },
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

// /api/doctors/patients/id
router.put("/patients/:id", (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { patients: req.body.patients },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor patients updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/doctors/description/id
router.put("/description/:id", (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { description: req.body.description },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor description updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/doctors/about/id
router.put("/about/:id", (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { about: req.body.about },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor about updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/doctors/qualification/id
router.put("/qualification/:id", (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { qualification: req.body.qualification },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor qualification updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/doctors/experience/id
router.put("/experience/:id", (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { experience: req.body.experience },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor experience updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/doctors/age/id
router.put("/age/:id", (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { age: req.body.age },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor age updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/doctors/gender/id
router.put("/gender/:id", (req, res) => {
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      $set: { gender: req.body.gender },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor gender updated successfully",
          data: result,
        });
      }
    }
  );
});

router.post("/profile/:id", upload.single("Image"), async (req, res, next) => {
  try {
    var base64String = base64Encode(req.file.path);
    const uploadString = "data:image/jpeg;base64," + base64String;
    const uploadResponse = await cloudinary.uploader.upload(uploadString, {
      overwrite: true,
      invalidate: true,
      crop: "fill",
    });
    var url = uploadResponse.secure_url;
    console.log(url);
  } catch (e) {
    console.log(e);
  }
  const doctorId = req.params.id;
  Doctor.findByIdAndUpdate(
    doctorId,
    {
      profile: url,
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor Profile updated successfully and changed",
          data: result,
        });
      }
    }
  );
});

router.put("/available/:id", (req, res) => {
  const userId = req.params.id;
  Doctor.findByIdAndUpdate(
    userId,
    {
      $set: { isAvailable: req.body.status },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Doctor Availability Status updated successfully",
          // data: result,
        });
      }
    }
  );
});

module.exports = router;
