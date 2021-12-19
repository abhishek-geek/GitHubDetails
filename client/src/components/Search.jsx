import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import logo from "../logo.svg";
import { getUserDetails } from "../services/apis";

const Search = ({ setUserDetails }) => {
  const [userId, setUserId] = useState();
  const [fetchNew, setFetchNew] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const data = await getUserDetails(userId, fetchNew);
    setLoading(false);
    console.log("user details", data);
    setUserDetails(data);
    console.log(userId, fetchNew);
  };

  const togggleFetchNew = () => {
    setFetchNew(!fetchNew);
    setChecked(!checked);
    console.log(fetchNew, checked);
  };

  return (
    <InputGroup className="my-2">
      <InputGroup.Text onClick={togggleFetchNew}>
        <Form.Check type="checkbox" checked={checked} label="Force New Fetch" />
      </InputGroup.Text>
      <FormControl
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="GitHub Username"
      />
      <Button onClick={handleSearch} disabled={loading}>Search</Button>
    </InputGroup>
  );
};

export default Search;
