const mongoose = require('mongoose');
const RecipientSchema = require('./Recipient');

const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String, 
  recipients: [RecipientSchema], 
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  //_ indicates this is a ref to another collection
  _user: { type: Schema.Types.ObjectId, ref: 'User' }, 
  dateSent: Date, 
  lastResponded: Date, 
});

mongoose.model('surveys', surveySchema);
