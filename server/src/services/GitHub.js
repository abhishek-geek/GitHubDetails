const axios = require("axios");

const getDetails = async (userId) => {
  console.log(userId);
  let doc;
  const { data: userDetails} = await axios.get(`https://api.github.com/users/${userId}`);
  console.log("user details", userDetails);
  doc = {
    userId: userDetails.login,
    avatarUrl: userDetails.avatar_url,
  };
  const {data: repoDetails} = await axios.get(userDetails.repos_url);
  console.log("repo details", repoDetails);
  const repos = await repoDetails.map(async repoDetail => {
    const repo = {
      name: repoDetail.name,
      url: repoDetail.html_url,
    }
    const {data: commitDetails} = await axios.get(`https://api.github.com/repos/${repoDetail.full_name}/commits`);
    console.log("123123", commitDetails);
    const commits = commitDetails.map(commitDetail => {
      console.log("---------------------------------", commitDetail);
      const commit = {
        commiter: commitDetail.commit.author.name,
        message: commitDetail.commit.message,
      }
      return commit;
    })
    repo.commits = commits;
    return repo;
  })
  doc.repos = repos;
  console.log("doc", doc);
  return doc;
}

module.exports = {
  getDetails,
}