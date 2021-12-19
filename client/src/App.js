import "./App.css";
import { Container } from "react-bootstrap";
import AvailableProfiles from "./components/AvailableProfile";
import Profile from "./components/Profile";
import Repos from "./components/Repos";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAvailableProfiles } from "./services/apis";

function App() {
  const [userDetails, setUserDetails] = useState({});
  const [availableProfiles, setAvailableProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await getAvailableProfiles();
      console.log(data);
      setAvailableProfiles(data);
    })();
  }, []);

  useEffect(() => {
    if (userDetails.userId) {
      console.log(userDetails);
      navigate(`/${userDetails.userId}`);
    }
  }, [userDetails]);

  return (
    <Container>
      <Search setUserDetails={setUserDetails} />
      <Routes>

        <Route
          path="/:userId/repos"
          element={<Repos repos={userDetails?.repos} />}
        />
        
        <Route
          path="/:userId"
          element={<Profile userDetails={userDetails} />}
        />

        <Route
          path="/"
          element={
            availableProfiles.length && (
              <AvailableProfiles
                setUserDetails={setUserDetails}
                profiles={availableProfiles}
              />
            )
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
