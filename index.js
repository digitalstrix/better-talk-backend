const express = require('express');
const mongoose = require('mongoose');
const doctors = require('./routes/doctors');
var cors = require('cors');

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the doctors listing API');
});
app.use(cors());
app.use('/api/doctors', doctors);
require('dotenv').config();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://aravindd7:RMv9LdMJF4KpN2os@cluster0.dinyh.mongodb.net/rihal-ther?retryWrites=true&w=majority')
.then(result => {
    app.listen(port,()=> console.log(`Server is running on ${port}`))
})
.catch(err=>console.log((err)))
