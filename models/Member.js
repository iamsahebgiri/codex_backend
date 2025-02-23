const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const memberSchema = new mongoose.Schema(
  {
    github: String,
    githubDP: String,
    linkedin: String,
    name: String,
    role: String,
    skill: String,
    twitter: String,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
memberSchema.plugin(toJSON);

module.exports = mongoose.model("member", memberSchema);
