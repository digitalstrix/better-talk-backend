const express = require("express");

const Purchase = require("../models/Purchase");

const router = express.Router();

router.post("/", (req, res) => {
  const purchase = new Purchase({
    by: req.body.by,
    time: req.body.time,
    appointmentType: req.body.appointmentType,
    packType: req.body.packType,    
  });

  purchase.save()
  .then(result => {
      res.send({
          message: "purchase data created successfully",
          data: result
      })
  })
  .catch(err => console.log(err))
});

// /api/purchases
router.get('/', (req, res) => {
    Purchase.find()
        .then(purchase => {
            res.send(purchase)
        })
        .catch(err => console.log(err))
});

// /api/purchases/id
router.get('/:id', (req, res) => {
    const userId = req.params.id;

    Purchase.find({by: userId})
        .then(purchase => {
            res.send(purchase);
        })
        .catch(err => console.log(err))
});


module.exports = router;