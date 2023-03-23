const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  title: String,
  description: String,
  identity: String
});


module.exports = mongoose.model("sailormoondatas", characterSchema)