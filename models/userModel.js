const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    //rol doctor
    isDoctor: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    // notificaciones vistas
    seenNotifications: {
      type: Array,
      default: [],
    },

    unseenNotifications: {
      type: Array,
      default: [],
    },



  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
