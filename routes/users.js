const express = require("express");

const User = require("../models/User");

const router = express.Router();

router.post("/", (req, res) => {
  const user = new User({
    name: req.body.name,
    qualification: req.body.qualification,
  });

  user.save()
  .then(result => {
      res.send({
          message: "User data created successfully",
          data: result
      })
  })
  .catch(err => console.log(err))
});

// /api/users
router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.send(users)
        })
        .catch(err => console.log(err))
});

// /api/users/id
router.get('/:id', (req, res) => {
    const userId = req.params.id;

    User.findById(userId)
        .then(user => {
            res.send(user);
        })
        .catch(err => console.log(err))
});

module.exports = router;