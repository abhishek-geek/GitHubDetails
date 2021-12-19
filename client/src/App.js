import "./App.css";
import { Container } from "react-bootstrap";
import AvailableProfiles from "./components/AvailableProfile";
import Profile from "./components/Profile";
import Repos from "./components/Repos";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  useEffect(()=>{
    if(userDetails?.doc) {
      navigate(`/${userDetails.doc.userId}`);
    }
  }, [userDetails])

  return (
    <Container>
      <Search setUserDetails={setUserDetails} />
      <Routes>
        <Route
          path="/:userId/repos"
          element={<Repos repos={userDetails?.doc?.repos} />}
        />
        <Route
          path="/:userId"
          element={<Profile userDetails={userDetails?.doc} />}
        />
        <Route path="/" element={<AvailableProfiles />} />
      </Routes>
    </Container>
  );
}

export default App;
