const mongoose = require('mongoose');

const URI = 'mongodb://localhost/app-goodtaste'; 
mongoose.connect(URI)
    .then(db=> console.log('BD CONECTADA'))
    .catch(err=>console.log(err));

module.exports = mongoose;