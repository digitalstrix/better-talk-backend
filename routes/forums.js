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

// add comments in posts
router.put("/comments/:id", (req, res) => {
  const postId = req.params.id;
  Forum.findByIdAndUpdate(
    postId,
    {
      $push: { comments: {content: req.body.comment, name: req.body.name } },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Post comments updated successfully",
          data: result,
        });
      }
    }
  );
});

// update likes in posts
router.put("/likes/:id", (req, res) => {
  const postId = req.params.id;
  Forum.findByIdAndUpdate(
    postId,
    {
      $inc: { likes: req.body.likes },
    },
    (err, result) => {
      if (err) {
        console.log("err: ", err);
      } else {
        console.log("result: ", result);
        res.send({
          message: "Post likes updated successfully",
          data: result,
        });
      }
    }
  );
});

module.exports = router;