const express = require('express');
const router = express.Router();

const User = require('../controllers/user.controller');

router.get('/', User.getUsers);
router.post('/signup', User.crearUser);
router.post('/signin',User.getUser);
router.put('/:id',User.editarUser);
router.delete('/:id',User.eliminarUser);

router.get('/favoritos', verifyToken , (req,res) =>{

});

module.exports = router;

//ruta privada para ver restaurantes que sean favoritos de cada usuario

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send("Solicitud no permitda");
    }
}