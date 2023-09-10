import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { initializeApp } from "firebase/app";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDIjs-c05ayJ9U8jCyIF5VOeBXkdG37nw8",
    authDomain: "hackodisha-a6d69.firebaseapp.com",
    projectId: "hackodisha-a6d69",
    storageBucket: "hackodisha-a6d69.appspot.com",
    messagingSenderId: "578959541864",
    appId: "1:578959541864:web:49271efc0b9dc5307e5ddd",
    measurementId: "G-M0V2KGSR5J"
  };

  const app = initializeApp(firebaseConfig);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home app={app} />} />
        <Route path="/login" element={<Login app={app} />} />
      </Routes>
    </Router>
  );
}

export default App;
