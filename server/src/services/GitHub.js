const axios = require("axios");
const { GIT_HUB_ACCESS_TOKEN } = require("../configs");

const config = {
  headers: {
    Authorization: `token ${GIT_HUB_ACCESS_TOKEN}`,
  },
};

const getDetails = async (userId) => {
  console.log(userId);
  let doc;
  const { data: userDetails } = await axios.get(
    `https://api.github.com/users/${userId}`,
    config
  );
  doc = {
    name: userDetails.name,
    userId: userDetails.login,
    avatarUrl: userDetails.avatar_url,
  };
  const { data: repoDetails } = await axios.get(userDetails.repos_url, config);
  let repos = await repoDetails.map(async (repoDetail) => {
    const repo = {
      name: repoDetail.name,
      url: repoDetail.html_url,
    };
    repo.commits = await getCommitDetails(repoDetail.full_name);
    return repo;
  });
  console.log("repo before promise resolution", repos);
  repos = await Promise.all(repos);
  console.log("repo after promise resolution", repos);
  doc.repos = repos;
  console.log("doc", doc);
  return doc;
};

const getCommitDetails = async (fullName) => {
  try {
    console.log(fullName);
    const res = await axios.get(
      `https://api.github.com/repos/${fullName}/commits`,
      config
    );
    if (res.data === undefined) return [];
    commitDetails = res.data;
    const commits = commitDetails.map((commitDetail) => {
      const commit = {
        commiter: commitDetail.commit.author.name,
        message: commitDetail.commit.message,
      };
      return commit;
    });
    return commits;
  } catch (err) {
    console.log(err);
    return [];
  }
};

module.exports = {
  getDetails,
};
