const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String,
    admin: Boolean,
    favoritos: {
        type: [String],
        required: true,
      }
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);