const Restaurante = require('../models/restaurante');

const restauranteCtrl = {};

restauranteCtrl.getRestaurantes = async (req,res) => {
    const restaurantes = await Restaurante.find();
    res.json(restaurantes);
}

restauranteCtrl.crearRestaurante = async (req,res) => {
    const restaurante = new Restaurante(req.body);
    await restaurante.save();
    res.json({
        'status': 'Restaurante guardado'
    });
};

restauranteCtrl.getRestaurante = async (req,res) => {
    const restaurante = await Restaurante.findById(req.params.id);
    console.log(req.params);
    res.json(restaurante);
};

restauranteCtrl.editarRestaurante = async (req,res) => {
    const { id } = req.params;
    const restaurante = {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        ubicacion: req.body.ubicacion,
        likes: req.body.likes,
        comentarios: req.body.comentarios,
        foto: req.body.foto
    }
    await Restaurante.findByIdAndUpdate(req.params.id, {$set:restaurante}, {new:true});
    res.json({status: "Restaurante actualizado"});
}

restauranteCtrl.eliminarRestaurante = async (req,res) => {
    await Restaurante.findByIdAndDelete(req.params.id);
    res.json({status:"Restaurante eliminado"});
}

module.exports = restauranteCtrl;

