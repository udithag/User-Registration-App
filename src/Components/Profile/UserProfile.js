import { useContext,useState } from 'react';
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import UserDataContext from '../DataStore/UserData-Context';
import UserList from './UserList';

const UserProfile = () => {
  const[showList, setShowList] = useState(false);
  const userDataCtx = useContext(UserDataContext);
  const userFirstName = userDataCtx.activeUser.firstName;
  const userLastName = userDataCtx.activeUser.lastName;
  const userType = userDataCtx.activeUser.userType;
  const userList = userDataCtx.userData;
  const email =userDataCtx.activeUser.email;

  const toggleHandler =() => {
    setShowList((prevState)=>!prevState);
  }

  return (
    <section className={classes.profile}>
      <h1>{userFirstName} {userLastName} {(userType==="admin")? "(Admin)":""}</h1>
      <ProfileForm firstName={userFirstName} lastName ={userLastName} email={email}/>
      {userType ==="admin" && <button onClick={toggleHandler}>{showList ? "Hide User List":"Show User List"}</button>}
      {userType ==="admin" && showList && <UserList userList ={userList}/>}
    </section>
  );
};

export default UserProfile;
