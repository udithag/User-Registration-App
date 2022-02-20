import {useState} from "react";
import UserDataContext from "./UserData-Context";

const admin = {
         firstName:"Uditha",
         lastName:"Gayan",
         email:"ugayan@gmail.com",
         password:"123",
         userType:"admin"
}

const UserDataProvider = (props) => {

    const[updatedUserArray, setUpdatedUserArray] = useState([admin]);
    const[emailExist, setEmailExist] = useState(false);
    const[isLoggedIn, setIsLoggedIn] =useState(false);
    const[isRegistered, setIsRegistered] = useState(false);
    const[activeUser, setActiveUser] = useState({});


    const checkEmailExistHandler = (email)=> {
        const userArray = [...updatedUserArray];
         let emailInUse = false;
        if(userArray.length > 0){
            for (let i=0; i<userArray.length; i++){
                if(userArray[i].email === email){
                 emailInUse = true;
                }
              }
              setEmailExist(emailInUse);
        }

        if(userArray.length === 0){
            setEmailExist(false);
        }
    }

    const addUserHandler = (user) => {
        const userArray = [...updatedUserArray];
          userArray.push(user);
          setUpdatedUserArray(userArray);
          setIsRegistered(true);
          
    };
 

    const loginHandler = (user)=> {
        const userArray = [...updatedUserArray];
         let isLoginSuccess = false;
        for (let i=0; i<userArray.length; i++){
              if (user.password === userArray[i].password && user.email ===userArray[i].email ){
              isLoginSuccess = true;
              setActiveUser(userArray[i]);
              }
        }   
           
           setIsLoggedIn(isLoginSuccess);
    }
     
    const changeUserDataHandler =(data) => {
        const userArray = [...updatedUserArray];
        for (let i=0; i<userArray.length; i++){
            if(data.email === userArray[i].email){
                userArray[i].firstName = data.firstName;
                userArray[i].lastName = data.lastName;
                setActiveUser(userArray[i]);
            }
        }
        setUpdatedUserArray(userArray);
    }

    const changeOtherUserDataHandler =(data) => {
        const userArray = [...updatedUserArray];
        for (let i=0; i<userArray.length; i++){
            if(data.email === userArray[i].email){
                userArray[i].firstName = data.firstName;
                userArray[i].lastName = data.lastName;
                
            }
        }
        setUpdatedUserArray(userArray);
    }

    const logoutHandler = () => {

        setIsLoggedIn(false);
    }

   const clearRegistrationStatusHandler =()=> {
    setIsRegistered(false);
    }


    const userDataContext = {
          
        userData:updatedUserArray,
        emailExist:emailExist,
        isRegistered:isRegistered,
        isLoggedIn:isLoggedIn,
        activeUser:activeUser,
        checkEmailExist:checkEmailExistHandler,
        addUser:addUserHandler,
        login:loginHandler,
        logout:logoutHandler,
        changeUserData:changeUserDataHandler,
        changeOtherUserdata:changeOtherUserDataHandler,
        clearRegistrationStatus:clearRegistrationStatusHandler
    };

  
     return <UserDataContext.Provider value={userDataContext}>
         {props.children}
     </UserDataContext.Provider>

}

export default UserDataProvider;

