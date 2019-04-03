const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  googleUsername: String,
  localUsername: String, 
  localPassword: String,
  credits: {
    type: Number,
    default: 0
  },

});

mongoose.model('users', userSchema);
