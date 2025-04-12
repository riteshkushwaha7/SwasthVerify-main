const mongoose = require('mongoose');

const chemicalSchema = new mongoose.Schema({
  harmfulChemicals: [String],
  sourceLink: String,
}, { collection: 'chemicals' });

module.exports = mongoose.model('Chemical', chemicalSchema);
