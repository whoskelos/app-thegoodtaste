const mongoose = require("mongoose");

const { Schema } = mongoose;

const restauranteSchema = new Schema({
  nombre: { type: String, required: true },
  tipo: { type: String, required: true },
  ubicacion: { type: String, required: true },
  likes: { type: Number, required: true },
  descripcion: {type: String, required: true},
  comentarios: {
    type: [String],
    required: true,
  },
  foto: { type: String, required: true },
});

module.exports = mongoose.model("Restaurante", restauranteSchema);
