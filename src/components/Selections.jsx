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
    setUserCourses(data.courses);
  }
  const [userName, setUserName] = useState("");
  const [userMajor, setUserMajor] = useState([]);
  const [userCourses, setUserCourses] = useState([]);

  const [userInterests, setUserInterests] = useState([]);

  const majorInput = useRef(null);
  const coursesInput = useRef(null);
  const interestsInput = useRef(null);

  const addInfo = (__type) => {
    if (__type === "interests") {
      if (
        interestsInput.current.value !== "" &&
        !userInterests.includes(interestsInput.current.value)
      ) {
        let spacer = " ";
        let newString = spacer.concat(interestsInput.current.value);
        setUserInterests([...userInterests, newString]);
        interestsInput.current.value = "";
      }
    } else if (__type === "courses") {
      if (
        coursesInput.current.value !== "" &&
        !userCourses.includes(coursesInput.current.value)
      ) {
        let spacer = " ";
        let newString = spacer.concat(coursesInput.current.value);
        setUserCourses([...userCourses, newString]);
        coursesInput.current.value = "";
      }
    } else if (__type === "majors") {
      if (
        majorInput.current.value !== "" &&
        !userMajor.includes(majorInput.current.value)
      ) {
        let spacer = " ";
        let newString = spacer.concat(majorInput.current.value);
        setUserMajor([...userMajor, newString]);
        majorInput.current.value = "";
      }
    }
  };
  const handleMajorSubmit = () => {
    addInfo("majors");
    user.updateProfile({
      firstName: "newName",
      interests: userInterests,
    });
  };

  const handleCoursesSubmit = () => {
    addInfo("courses");
    user.updateProfile({
      firstName: "newName",
      interests: userInterests,
    });
  };

  const handleInterestSubmit = () => {
    addInfo("interests");
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
        height: 850,
      }}
    >
      <h1>Profile</h1>
      <Divider />
      <h3>{userName}</h3>
      <Divider />
      <h4>Major</h4>
      <FormControl sx={{ mt: 1, width: "100%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-majors">Add Courses</InputLabel>
        <OutlinedInput
          id="outlined-adornment-majors"
          type={"text"}
          label="Add Major"
          name="majors"
          inputRef={majorInput}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleMajorSubmit} edge="end">
                <AddIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <h6>{userMajor}</h6>
      <Divider />
      <h4>Courses</h4>
      <FormControl sx={{ mt: 1, width: "100%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-majors">Add Courses</InputLabel>
        <OutlinedInput
          id="outlined-adornment-majors"
          type={"text"}
          label="Add Courses"
          name="courses"
          inputRef={coursesInput}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleCoursesSubmit} edge="end">
                <AddIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <h6>{userCourses}</h6>
      <Divider />
      <h4>Interests</h4>
      <FormControl sx={{ mt: 1, width: "100%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-majors">
          Add Interests
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-majors"
          type={"text"}
          label="Add Interest"
          name="interests"
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
      <h6>{userInterests}</h6>
    </Box>
  );
};

export default Selections;
