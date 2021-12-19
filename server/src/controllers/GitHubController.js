const GitHub = require("../services/GitHub");
const GitHubStat = require("../models/GitHubStat");

const fetchDetails = async (req, res) => {
  try {
    const { userId, fetchNew } = req.query;
    const exists = await GitHubStat.findOne({ userId });
    const myBool = fetchNew === "true";
    console.log({ userId, fetchNew, myBool });
    console.log(exists);
    if (myBool || !exists) {
      console.log(1);
      const details = await GitHub.getDetails(userId);
      console.log(details);
      GitHubStat.updateOne({ userId }, { ...details }, { upsert: true }).exec();
      return res.status(200).json({ doc: details, error: false });
    } else {
      return res.status(200).json({ doc: exists, error: false });
    }
  } catch (err) {
    res.status(500);
    res.json({ message: "Unable to fetch details", error: true });
  }
};

const getAvailableProfiles = async (req, res) => {
  try {
    const docs = await GitHubStat.find({});
    return res.status(200).json({ docs, error: false });
  } catch (err) {
    res.status(500);
    res.json({ message: "Unable to fetch details", error: true });
  }
};

module.exports = {
  fetchDetails,
  getAvailableProfiles,
};
