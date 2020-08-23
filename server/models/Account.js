const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AccountSchema = new Schema({

  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
}, {collection:'account'});

module.exports = Account = mongoose.model("account", AccountSchema);
