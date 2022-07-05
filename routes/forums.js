const express = require("express");
const Forum = require("../models/Forum");

const router = express.Router();

router.post("/", (req, res) => {
  const forum = new Forum({
    name: req.body.name,
    content: req.body.content,
    likes: req.body.likes,
    date: req.body.date,
    comments: req.body.comments
  });

  forum
    .save()
    .then((result) => {
      res.send({
        message: "Forum created successfully",
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

// /api/Forum
router.get("/", (req, res) => {
  Forum.find()
    .then((forums) => {
      res.send(forums);
    })
    .catch((err) => console.log(err));
});

module.exports = router;