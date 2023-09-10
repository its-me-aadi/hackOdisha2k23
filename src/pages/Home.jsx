import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import RightSection from '../components/rightSection';
import LeftSection from '../components/startLeftSection';
import "../styles/Home.css";
export default function Home(props) {
  const navigate = useNavigate();
  const auth = getAuth(props.app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    })
  }, [])
  return (
    <div className='home'>
       <RightSection />
    </div>
  )
}
