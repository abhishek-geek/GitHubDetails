import React from "react";
import { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
const RepoModal = ({ repo }) => {
  const [showCommits, setShowCommits] = useState(false);

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>{repo.name}</Modal.Title>
      </Modal.Header>

      <Button
        onClick={() => setShowCommits(!showCommits)}
        variant={showCommits ? "danger" : "primary"}
      >
        {showCommits ? "Close" : "Show Commits"}
      </Button>

      {showCommits && (
        <Modal.Body>
          <Table responsive>
            <thead>
              <tr>
                <th>Commiter</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {repo?.commits.map((commit) => (
                <tr>
                  <td>{commit.commiter}</td>
                  <td>{commit.message}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      )}
    </Modal.Dialog>
  );
};

export default RepoModal;
