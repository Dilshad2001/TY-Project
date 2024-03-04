const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  numberOfPeople: { type: Number, required: true },
  packageTitle: { type: String, required: true }
}, { timestamps: true });

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
