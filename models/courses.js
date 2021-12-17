const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: "Description du cours",
  },

  volume: {
    type: Number,
    max: 120,
  },

  StarDate: {
    type: Date,
  },

/*   participants:[ {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Participants",
  }], */
  
});

const coursesModel = mongoose.model("Courses", coursesSchema);
module.exports = coursesModel;
