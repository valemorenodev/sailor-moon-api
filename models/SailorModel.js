const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  title: String,
  description: String,
  indenty: String
});


module.exports = mongoose.model("Characters", characterSchema)