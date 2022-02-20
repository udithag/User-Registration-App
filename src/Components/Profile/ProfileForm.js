import { useState, useContext } from 'react';
import UserDataContext from '../DataStore/UserData-Context';
import classes from './ProfileForm.module.css';


const ProfileForm = (props) => {
  const [enteredFirstName, setEnteredFirstName]= useState(props.firstName);
  const [enteredLastName, setEnteredLastName]= useState(props.lastName);

  const userDataCtx = useContext(UserDataContext);
  
  const getFirstName = (event) => {
    setEnteredFirstName(event.target.value);
  }
  const getLastName = (event) => {
    setEnteredLastName(event.target.value);
  }

  const UserDataSubmitHandler = (event) => {
    event.preventDefault();

    const  userData ={
        firstName:enteredFirstName,
        lastName:enteredLastName,
        email:props.email
      };
    
    if(props.toggleHandler==null) {
      userDataCtx.changeUserData(userData);
    } 

    if(props.toggleHandler){
      userDataCtx.changeOtherUserdata(userData);
      props.toggleHandler();
    }
  }

  return (
    <form className={classes.form}>
      <div className={classes.control}>
      <span><label htmlFor='first name'>First Name</label></span>
      <span><input type='text' id='first-name' onChange={getFirstName}  value={enteredFirstName}/></span>      
      </div>
      <div className={classes.control}>
      <span><label htmlFor='last name'>Last Name</label></span>
      <span><input type='text' id='last-name' onChange={getLastName} value = {enteredLastName} /></span>      
      </div>
      <div className={classes.action}>
        <button onClick={UserDataSubmitHandler}>Save changes</button>
      </div>
    </form>
  );
}

export default ProfileForm;
