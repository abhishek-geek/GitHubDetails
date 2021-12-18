const GitHub = require("../services/GitHub");
const GitHubStat = require("../models/GitHubStat");

const fetchDetails = async (req, res) => {
  try {
    const { userId, fetchNew } = req.query;
    const exists = await GitHubStat.findOne({ userId });
    if (fetchNew || !exists) {
      console.log(1)
      const details = await GitHub.getDetails(userId);
      console.log(details);
      const stat = new GitHubStat({...details});
      const doc = await stat.save();
      return res.status(200).json({ details, error: false });
    } else {
      return res.status(200).json({ doc: exists, error: false });
    }
  } catch (err) {
    res.status(500);
    res.json({ message: "Unable to fetch details", error: true });
  }
};

module.exports = {
  fetchDetails,
};
