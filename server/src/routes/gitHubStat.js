const express = require('express');

const router = express.Router();

const GitHubController = require('../controllers/GitHubController');

router.get("/details", GitHubController.fetchDetails);
router.get("/available-profiles", GitHubController.getAvailableProfiles);

module.exports = router;