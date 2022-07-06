const express = require("express");
const Notification = require("../models/Notification");

const router = express.Router();

router.post("/", (req, res) => {
  const notification = new Notification({
    name: req.body.name,
    content: req.body.content,
    type: req.body.type
  });

  notification
    .save()
    .then((result) => {
      res.send({
        message: "Notification created successfully",
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

// /api/Notification
router.get("/", (req, res) => {
    Notification.find()
    .then((notification) => {
      res.send(notification);
    })
    .catch((err) => console.log(err));
});

module.exports = router;