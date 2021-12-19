import React from "react";
import RepoModal from "./RepoModal";

const Repos = ({ repos }) => {
  return (<>
  {repos.map(repo => <RepoModal repo={repo} />)}
  </>);
};

export default Repos;
