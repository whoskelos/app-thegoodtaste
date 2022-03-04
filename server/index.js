const express  = require ('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const cors = require('cors');

const { mongoose } = require('./database');

//Configuracion
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/dist/app-thegoodtaste'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/app-thegoodtaste/index.html'));
});

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
// app.use(cors({origin:'http://localhost:4200'}));


//Rutas
app.use('/api/restaurantes',require('./routes/restaurantes.routes'));
app.use('/api/users',require('./routes/user.routes'));


//Arrancando el servidor
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});