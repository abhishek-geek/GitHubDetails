import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/api";

const getAvailableProfiles = async () => {
  try {
    const { data: profiles } = await axios.get(`/github/available-profiles`);
    console.log(profiles)
    return profiles.docs;
  } catch (err) {
    console.error(err);
    return [1];
  }
};

const getUserDetails = async (userId, fetchNew) => {
  try {
    console.log(`/github/details?userId=${userId}&fetchNew=${fetchNew}`)
    const { data: profile } = await axios.get(
      `/github/details?userId=${userId}&fetchNew=${fetchNew}`
    );
    return profile.doc;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export { getAvailableProfiles, getUserDetails };
