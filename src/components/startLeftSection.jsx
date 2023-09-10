import React from 'react'
import { getAuth} from "firebase/auth";
export default function startLeftSection(props) {

  const auth = getAuth(props.app);
  function Logout(){
    auth.signOut();
}

  return (
    <div>
      <button onClick={Logout} style={{position:"fixed",top:"2%",left:"2%"}}>Logout</button>
    </div>
  )
}
