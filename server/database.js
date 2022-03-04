const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:Amoamihijo2199$@cluster0.yd5np.mongodb.net/app-goodtaste?retryWrites=true&w=majority'; 
mongoose.connect(URI)
    .then(db=> console.log('BD CONECTADA'))
    .catch(err=>console.log(err));

module.exports = mongoose;