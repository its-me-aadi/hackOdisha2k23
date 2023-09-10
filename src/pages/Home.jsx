import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import Grp from "../assets/grp.svg";
import Userimg from "../assets/userimg.svg";
import "../styles/home.css";

export default function Home(props) {
  const navigate = useNavigate();
  const auth = getAuth(props.app);
  const [data, setData] = useState([]);
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

  function Logout() {
    auth.signOut();
  }
  return (
    <div>
      <div class="chat-container">
        <header class="chat-header">
          <h1><i class="fas fa-smile"></i> ChatCord</h1>
          <button onClick={Logout}>Logout</button>
        </header>
        <main class="chat-main">
          <div class="chat-sidebar">
            <div className='chat-sidebar-top'>
              <img className='group-img' src={Grp} alt='Group-img' />
              <p id="room-name">IIIT SURAT</p>
            </div>

            <div className='chat-sidebar-users'>
              <h3><i class="fas fa-users"></i>Members</h3>
              <ul id="users">
                <li>
                  <div className='user-name'>
                    <img style={{ backgroundColor: "blue", borderRadius: "25px", marginRight: "1rem" }} src={Userimg} alt='user-img' />
                    <p>User-1</p>
                  </div>
                </li>
                <li>
                  <div className='user-name'>
                    <img style={{ backgroundColor: "orange", borderRadius: "25px", marginRight: "1rem" }} src={Userimg} alt='user-img' />
                    <p>User-2</p>
                  </div>
                </li>
                <li>
                  <div className='user-name'>
                    <img style={{ backgroundColor: "red", borderRadius: "25px", marginRight: "1rem" }} src={Userimg} alt='user-img' />
                    <p>User-3</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="chat-messages">
            <div className='chat-div'>
              <div className='chat-user-img'>
                <img style={{ backgroundColor: "blue", borderRadius: "25px", marginRight: "1rem" }} src={Userimg} alt='user-img' />
              </div>
              <div class="message">
                <p class="meta">Meet <span>12:35 pm</span></p>
                <p class="text">
                  hi
                </p>
              </div>
            </div>

            <div className='chat-div'>
              <div className='chat-user-img'>
                <img style={{ backgroundColor: "orange", borderRadius: "25px", marginRight: "1rem" }} src={Userimg} alt='user-img' />
              </div>
              <div class="message">
                <p class="meta">Adi <span>12:36 pm</span></p>
                <p class="text">
                  hello anmol
                </p>
              </div>
            </div>

            <div className='chat-div'>
              <div className='chat-user-img'>
                <img style={{ backgroundColor: "red", borderRadius: "25px", marginRight: "1rem" }} src={Userimg} alt='user-img' />
              </div>
              <div class="message">
                <p class="meta">Anmol <span>12:37 pm</span></p>
                <p class="text">
                  hello adi and meet
                </p>
              </div>
            </div>

          </div>
        </main>
        <div class="chat-form-container">
          <form id="chat-form">
            <input
              id="msg"
              type="text"
              placeholder="Enter Message"
              required
              autocomplete="off"
            />
            <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}