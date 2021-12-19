import "./App.css";
import { Button, Row, Col, Container } from "react-bootstrap";
import AvailableProfiles from "./components/AvailableProfile";
import UserDetails from "./components/UserDetails";
import Search from "./components/Search";
import { useEffect, useState } from "react";

function App() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    console.log("app user details", userDetails);
  }, [userDetails]);

  return (
    <Container>
      <Search setUserDetails={setUserDetails} />
      {userDetails && <UserDetails userDetails={userDetails}/>}
      <AvailableProfiles />
    </Container>
  );
}

export default App;
