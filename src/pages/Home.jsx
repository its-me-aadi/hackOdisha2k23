import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref,onValue } from "firebase/database";

export default function Home(props) {
  const navigate = useNavigate();
  const auth = getAuth(props.app);
  const [data,setData]=useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    //   else {
    //     const db = getDatabase();
    //     const orderData = ref(db, 'orders');
    //     onValue( orderData , (snapshot) => {
    //       const data1 = snapshot.val();
    //       setData(data1);
    //     });
    //   }
    })
  }, [])

  function Logout(){
    auth.signOut();
}
  return (
    <div>
        <button onClick={Logout}>Logout</button>
    </div>
  )
}
