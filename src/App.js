import React from "react";
import SearchBar from "./components/SearchBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CreateProfile from "./components/CreateProfile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function App() {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  useEffect(() => {
    createProfile();
    // eslint-disable-next-line
  }, [profile]);

  //Navigaation
  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      // change path to sign in page
      if (window.location.pathname === "/signup") {
        navigate("/signup");
      } else {
        navigate(`/signin`);
      }
    } else if (profile === undefined) {
      navigate(`/createprofile`);
    } else {
      navigate(`/`);
    }
    // eslint-disable-next-line
  }, [user, profile]);

  async function createProfile() {
    await setDoc(doc(db, "Profiles", auth.currentUser.uid), profile);
  }

  async function fetchProfile() {
    const docRef = doc(db, "Profiles", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists) {
      setProfile(docSnap.data());
    }
  }

  const handleCreateProfile = (profile) => {
    setProfile(profile);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/createprofile"
          element={<CreateProfile handleCreateProfile={handleCreateProfile} />}
        />
      </Routes>
    </div>
  );
}
