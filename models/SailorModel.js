const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  Name: String,
  Type: String,
  Age: Number,
  gender: String,
  Occupation: String,
  Hobbie: String
});


module.exports = mongoose.model("Characters", characterSchema)