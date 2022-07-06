const express = require("express");
const Notification = require("../models/Notification");

const router = express.Router();

router.post("/", (req, res) => {
  const notification = new Notification({
    to: req.body.to,
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

// /api/notification/id
router.get('/:id', (req, res) => {
    const userId = req.params.id;

    Notification.find({to: userId})
        .then(notification => {
            res.send(notification);
        })
        .catch(err => console.log(err))
});


module.exports = router;