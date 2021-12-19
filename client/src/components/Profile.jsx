import React from "react";
import { useState } from "react";
import { Button, Row, Col, Card, Container } from "react-bootstrap";
import logo from "../logo.svg";
import RepoModal from "./RepoModal";
import { Link } from "react-router-dom";

const Profile = ({ setUserDetails, userDetails }) => {
  // const [showModal, setShowModal] = useState(false);
  // const navigate = useNavigate();

  return (
    <>
      {/* {showModal && userDetails?.repos.map(repo => <RepoModal repo={repo} />)} */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={userDetails?.avatarUrl || logo} />
        <Card.Body>
          <Card.Title>{userDetails?.name}</Card.Title>
          <Card.Text>{userDetails?.userId}</Card.Text>
          <Link to={`/${userDetails?.userId}/repos`}>
            <Button variant="primary" onClick={()=>setUserDetails(userDetails)}>Show Repos</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Profile;
