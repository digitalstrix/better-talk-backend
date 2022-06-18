const express = require("express");

const User = require("../models/User");
const Purchase = require("../models/Purchase");

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
      $set: { medHistory: req.body.medhistory },
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
      $set: { free: req.body.free },
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

module.exports = router;
