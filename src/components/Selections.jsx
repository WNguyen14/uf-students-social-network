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
import {
  collection,
  addDoc,
  setDoc,
  onSnapshot,
} from "firebase/compat/firestore";

function Selections() {
  const auth = getAuth();
  const user = auth.currentUser;
 useEffect(() => {
    fetchProfile();
    
   
  }, []);
  async function fetchProfile() {
    const docRef = doc(db, "Profiles", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    var name = data.firstName + " " + data.lastName;
    setUserName(name);
    setUserMajor(data.Majors);
    setUserInterests(data.interests);
    setUserCourses(data.courses);
  }
  const [userName, setUserName] = useState("");
  const [userMajor, setUserMajor] = useState([]);
  const [userCourses, setUserCourses] = useState([]);
  const [userInterests, setUserInterests] = useState([]);
  const [majorInput,setMajorInput] = useState("");
  const [courseInput,setCourseInput] = useState("");
  const [interestsInput,setInterestsInput] = useState("");
  
  const Profile = firebase.firestore().collection("Profiles");

 
  const addInfo = (__type) => {
    if (__type === "interests"&&interestsInput!=="") {
      Profile.doc(auth.currentUser.uid).update({
        interests: firebase.firestore.FieldValue.arrayUnion(interestsInput)
      })
      fetchProfile()
      setInterestsInput("")
    } else if (__type === "courses"&&courseInput!=="") {
      Profile.doc(auth.currentUser.uid).update({
        courses: firebase.firestore.FieldValue.arrayUnion(courseInput)
      })
      fetchProfile()
      setCourseInput("")
    } else if (__type === "majors"&&majorInput!=="") {

        Profile.doc(auth.currentUser.uid).update({
          Majors: firebase.firestore.FieldValue.arrayUnion(majorInput)
        })
        fetchProfile()
        setMajorInput("")
      
    }
  };

 
  const handleMajorSubmit = () => {
    addInfo("majors");
    
  };

  const handleCoursesSubmit = () => {
    addInfo("courses");
    
  };

  const handleInterestSubmit = () => {
    addInfo("interests");
    
  };



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
        <InputLabel htmlFor="outlined-adornment-majors">Add Major</InputLabel>
        <OutlinedInput
          id="outlined-adornment-majors"
          type={"text"}
          label="Add Major"
          name="majors"
          value={majorInput}
          onChange={(e)=>setMajorInput(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={()=>handleMajorSubmit()} edge="end">
                <AddIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
     <h6>{userMajor&&userMajor.join(',')}</h6>
      <Divider />
      <h4>Courses</h4>
      <FormControl sx={{ mt: 1, width: "100%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-majors">Add Courses</InputLabel>
        <OutlinedInput
          id="outlined-adornment-majors"
          type={"text"}
          label="Add Courses"
          name="courses"
          value={courseInput}
          onChange={(e)=>setCourseInput(e.target.value)}
          
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleCoursesSubmit} edge="end">
                <AddIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <h6>{userCourses&&userCourses.join(',')}</h6>
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
          value={interestsInput}
          onChange={(e)=>setInterestsInput(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleInterestSubmit} edge="end">
                <AddIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <h6>{userInterests.join(',')}</h6>
    </Box>
  );
};

export default Selections;
