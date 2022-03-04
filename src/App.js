import React from 'react'
import SearchBar from './components/SearchBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, user => setUser(user));
  }, [])

  let navigate = useNavigate();

  useEffect(() => {
    if (!user){
      // change path to sign in page
      if (window.location.pathname === '/signup'){
        navigate('/signup');
      }
      else {
        navigate(`/signin`);
      }
    }
    else {
      navigate(`/`);
    }
  }, [user]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchBar/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
