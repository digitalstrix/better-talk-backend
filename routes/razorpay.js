const express = require("express");
const Razorpay = require("razorpay");
const Doctor = require("../models/Doctor");

const router = express.Router();
require('dotenv').config();
const razorpay = new Razorpay({
  key_id: process.env.APIKEY,
  key_secret: process.env.SECRETKEY,
});

router.get('/', (req, res) => {
    res.send('Welcome to Razorpay Api');
});


router.post("/createOrder", async (req, res) => {
try {
  const order = await razorpay.orders.create({
    amount: req.body.amount,
    currency: req.body.currency,
  }); 
    res.send(order);
  } catch (err) {
    console.log(err);
  }

});


module.exports = router;