const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      reqiured: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    messageBody: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
