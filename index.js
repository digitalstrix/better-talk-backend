const express = require('express');
const mongoose = require('mongoose');
const doctors = require('./routes/doctors');
const appointments = require('./routes/appointments');
const users = require('./routes/users');
const razorpay = require('./routes/razorpay');
const purchases = require('./routes/purchases');
const forums = require('./routes/forums');
var cors = require('cors');

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Rahil App Backend API');
});
app.use(cors());
app.use('/api/doctors', doctors);
app.use('/api/users', users);
app.use('/api/appointments', appointments);
app.use('/api/razorpay', razorpay);
app.use('/api/purchases', purchases);
app.use('/api/forums', forums);

require('dotenv').config();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://aravindd7:RMv9LdMJF4KpN2os@cluster0.dinyh.mongodb.net/rihal-ther?retryWrites=true&w=majority')
.then(result => {
    app.listen(port,()=> console.log(`Server is running on ${port}`))
})
.catch(err=>console.log((err)))
