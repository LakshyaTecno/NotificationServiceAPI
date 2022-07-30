const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    recepientEmails: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    requester: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "UN_SENT",
      enum: ["SENT", "UN_SENT"],
    },
    createdAt: {
      type: Date,
      immutable: true,
      default: () => {
        return Date.now();
      },
    },
    updatedAt: {
      type: Date,
      default: () => {
        return Date.now();
      },
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("notifictaion", notificationSchema);
