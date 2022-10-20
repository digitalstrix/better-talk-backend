const express = require("express");

const User = require("../models/User");
const Purchase = require("../models/Purchase");
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');
const fs = require('fs');

function base64Encode(file) {
  var body = fs.readFileSync(file);
  return body.toString("base64");
}

const router = express.Router();

router.post("/", (req, res) => {
  const user = new User({
    name: req.body.name,
    qualification: req.body.qualification,
    age: req.body.age,
    gender: req.body.gender,
    location: req.body.location,
    medHistory: req.body.medHistory,
    freeSession: req.body.freeSession,
    upcomingApp: req.body.upcomingApp,
    minutes: req.body.minutes,
    sessions: req.body.sessions
  });

  user
    .save()
    .then((result) => {
      res.send({
        message: "User data created successfully",
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

// /api/users
router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => console.log(err));
});

// /api/users/id
router.get("/:id", (req, res) => {
  const userId = req.params.id;

  User.findById(userId)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => console.log(err));
});

// /api/users/name/id
router.put("/name/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndUpdate(
    userId,
    {
      $set: { name: req.body.name },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "User name updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/users/age/id
router.put("/age/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndUpdate(
    userId,
    {
      $set: { age: req.body.age },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "User age updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/users/qualification/id
router.put("/qualification/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndUpdate(
    userId,
    {
      $set: { qualification: req.body.qualification },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "User qualification updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/users/gender/id
router.put("/gender/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndUpdate(
    userId,
    {
      $set: { gender: req.body.gender },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "User gender updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/users/location/id
router.put("/location/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndUpdate(
    userId,
    {
      $set: { location: req.body.location },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "User location updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/users/medHistory/id
router.put("/medhistory/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndUpdate(
    userId,
    {
      $set: { medHistory: req.body.medHistory },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "User medhistory updated successfully",
          data: result,
        });
      }
    }
  );
});

// /api/users/freeSession/id
router.put("/free/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndUpdate(
    userId,
    {
      $set: { freeSession: req.body.freeSession },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "User freeSession updated successfully",
          data: result,
        });
      }
    }
  );
});


// /api/users/sessions/id
router.put("/sessions/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndUpdate(
    userId,
    {
      $set: { sessions: req.body.sessions },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "User sessions updated successfully",
          data: result,
        });
      }
    }
  );
});


// /api/users/minutes/id
router.put("/minutes/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndUpdate(
    userId,
    {
      $set: { minutes: req.body.minutes },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "User minutes updated successfully",
          data: result,
        });
      }
    }
  );
});

router.post("/profile/:id", upload.single('Image'), async (req, res, next) => {
  try {
    var base64String = base64Encode(req.file.path);
    const uploadString = "data:image/jpeg;base64," + base64String;
    const uploadResponse = await cloudinary.uploader.upload(uploadString, {
      overwrite: true,
      invalidate: true,
      crop: "fill",
    });
 var url =  uploadResponse.secure_url;
 console.log(url);
  } catch (e) {
    console.log(e);
  }
  const userId = req.params.id;
  User.findByIdAndUpdate(
    userId,
    {
      $set: { profile: url },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "User Profile updated successfully",
          data: result,
        });
      }
    }
  );
});

router.put("/available/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndUpdate(
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
          message: "User Availability Status updated successfully",
          // data: result,
        });
      }
    }
  );
});
module.exports = router;
