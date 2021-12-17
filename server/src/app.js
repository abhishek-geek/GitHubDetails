const express = require("express");
const cors = require("cors");

const app = express();

/**
 * Initializing Express App
 */

app.use(express.json());
app.use(cors());

/**
 * Import Routes
 */

/**
 * Use Routes
 */

/**
 * Internal Server error handler
 */

app.use((err, req, res, next) => {
  try {
    const error = JSON.stringify(err);
    const body = JSON.stringify(req.body);
    const headers = JSON.stringify(req.headers);
    console.error(
      `Request Body: ${body} \n Request Headers: ${headers} \n Error: ${error}`
    );
  } catch (e) {
    console.error(e);
  }
  res.status(500).send("Internal Server Error");
  next();
});

module.exports = app;
