import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Row, Col, Card, Container } from "react-bootstrap";
import Profile from "./Profile";


const AvailableProfiles = ({ setUserDetails, profiles }) => {
  console.log(profiles);
  return (
    <>
      {profiles.length && profiles.map((profile) => (
        <Profile setUserDetails={setUserDetails} key={profile._id} userDetails = {profile}/>
      ))}
    </>
  );
};

export default AvailableProfiles;
