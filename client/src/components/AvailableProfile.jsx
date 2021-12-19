import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Row, Col, Card, Container } from "react-bootstrap";
import Profile from "./Profile";

import { getAvailableProfiles } from "../services/apis";

const AvailableProfiles = ({ userId, name }) => {
  const [profiles, setProfiles] = useState([1]);
  // useEffect(() => {
  //   console.log(2222);
  //   let data;
  //   (async () => {
  //     data = await getAvailableProfiles();
  //     console.log(data);
  //     setProfiles(data);
  //   })();
  // }, []);
  return (
    <>
      {profiles.map((profile) => (
        <Profile userDetails = {null}/>
      ))}
    </>
  );
};

export default AvailableProfiles;
