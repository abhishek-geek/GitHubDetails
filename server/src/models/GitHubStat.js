const mongoose = require("mongoose");


const schema = new mongoose.Schema({
  name: String,
  userId: {
    type: String,
    required: true,
  },
  avatarUrl: String,
  repos: [{
    name: String,
    url: String,
    commits: Array,
  }],
});

const GitHubStat = mongoose.model("GitHubStat", schema);

module.exports = GitHubStat;