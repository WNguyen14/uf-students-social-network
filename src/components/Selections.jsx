import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { getAuth, signOut } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import Box from "@mui/material/Box";
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
  const [userMajor, setUserMajor] = useState("");
  const [userInterests, setUserInterests] = useState("");

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
      <h1>Current User</h1>
      <h2>{userName}</h2>
      <h3>{userMajor}</h3>
      <h4>{userInterests}</h4>
    </Box>
  );
};

export default Selections;
