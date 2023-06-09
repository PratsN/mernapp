const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "UserInfo",
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = { User };
