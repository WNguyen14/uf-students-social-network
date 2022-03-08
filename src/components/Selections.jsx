import React, { useRef, useEffect, useState } from "react";
import { db, auth } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { getAuth, signOut } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import Box from "@mui/material/Box";
import { Divider, TextField } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import AddIcon from "@mui/icons-material/Add";
const Selections = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  async function fetchProfile() {
    const docRef = doc(db, "Profiles", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    var name = data.firstName + " " + data.lastName;
    setUserName(name);
    setUserMajor(data.majors);
    setUserInterests(data.interests);
  }
  const [userName, setUserName] = useState("");
  const [userMajor, setUserMajor] = useState([]);
  const [userInterests, setUserInterests] = useState([]);

  const majorInput = useRef(null);
  const coursesInput = useRef(null);
  const interestsInput = useRef(null);

  const addInterest = () => {
    if (
      interestsInput.current.value !== "" &&
      !userInterests.includes(interestsInput.current.value)
    ) {
      setUserInterests([...userInterests, interestsInput.current.value]);
      interestsInput.current.value = "";
    }
  };

  const handleInterestSubmit = () => {
    addInterest();
    user.updateProfile({
      firstName: "newName",
      interests: userInterests,
    });
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#00000034",
        border: 1,
        borderColor: "#FFFFFF",
        p: 4,
        borderRadius: 2,
        height: 750,
      }}
    >
      <h1>Profile</h1>
      <Divider />
      <h3>{userName}</h3>
      <Divider />
      <h4>Major</h4>
      <FormControl sx={{ mt: 1, width: "100%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-majors">Add Major</InputLabel>
        <OutlinedInput
          id="outlined-adornment-majors"
          type={"text"}
          label="Add Major"
          name="majors"
          inputRef={interestsInput}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleInterestSubmit} edge="end">
                <AddIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <h6>{userMajor}</h6>
      <Divider />
      <h4>Interests</h4>
      <h6>{userInterests}</h6>
    </Box>
  );
};

export default Selections;
