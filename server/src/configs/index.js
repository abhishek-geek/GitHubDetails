const dotenv = require("dotenv");

dotenv.config();

const {
  PORT,
  MONGO_URI,
  GIT_HUB_ACCESS_TOKEN,
} = process.env;

module.exports = {
  PORT,
  MONGO_URI,
  GIT_HUB_ACCESS_TOKEN,
};