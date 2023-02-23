const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  Title: String,
  Type: String,
});


module.exports = mongoose.model("Characters", characterSchema)