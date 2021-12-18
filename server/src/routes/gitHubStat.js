const express = require('express');

const router = express.Router();

const GitHubController = require('../controllers/GitHubController');

router.get("/details", GitHubController.fetchDetails);

module.exports = router;