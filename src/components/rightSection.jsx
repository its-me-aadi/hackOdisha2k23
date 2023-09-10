import React from 'react'
// import Background from "../Images/chatBg.svg"
import { getDatabase, ref,onValue } from "firebase/database";

import "../styles/rightsection.css"
export default function rightSection() {
  const [data,setData]=useState([]);
  const db = getDatabase();
        const orderData = ref(db, '');
        onValue( orderData , (snapshot) => {
          const data1 = snapshot.val();
          setData(data1);
        });
  return (
    <div  className='rightSection'>
        <div>
             {data.map(data=>{
                  
             })
             }
        </div>
        <div> 
            <input type='text' placeholder='type a message' name="message" className='typeBox'/>😶
        </div>
        
    </div>
  )
}
