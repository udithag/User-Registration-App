import { useState } from "react";
import ProfileForm from "./ProfileForm";





const User =(props)=> {
    const[editModeOn, setEditmodeOn]=useState(false);

    const toggleHandler = ()=> {

       setEditmodeOn((prevState)=>!prevState);
    }
   

   
  return (
    <li>
      <div>
        <span> {props.user.email}</span>
        <span>
          {!editModeOn && <button onClick={toggleHandler}>Edit User</button>}
        </span>
      </div>
      {editModeOn && (
        <ProfileForm
          toggleHandler={toggleHandler}
          firstName={props.user.firstName}
          lastName={props.user.lastName}
          email={props.user.email}
        />
      )}
    </li>
  );

}

export default User;