import React from 'react'
import SearchBar from './components/SearchBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn){
      // change path to sign in page
      if (window.location.pathname === '/signup'){
        navigate('/signup');
      }
      else {
        navigate(`/signin`);
      }
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchBar/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
}
