const express = require('express');
const mongoose = require('mongoose');
const doctors = require('./routes/doctors');
const razorpay = require('./routes/razorpay');

var cors = require('cors');

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Rahil App Backend API');
});
app.use(cors());
app.use('/api/doctors', doctors);
app.use('/api/razorpay', razorpay);
require('dotenv').config();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://aravindd7:RMv9LdMJF4KpN2os@cluster0.dinyh.mongodb.net/rihal-ther?retryWrites=true&w=majority')
.then(result => {
    app.listen(port,()=> console.log(`Server is running on ${port}`))
})
.catch(err=>console.log((err)))
