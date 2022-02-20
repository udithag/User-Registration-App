import React from "react";

const UserDataContext = React.createContext({
     
    userData: [],
    emailExist: false,
    isRegistered:false,
    isLoggedIn: false,
    activeUser:null,
    addUser:(user)=> {},
    checkEmailExist:(email)=> {},
    login:()=> {},
    logout:()=> {},
    changeUserData:(data)=> {},
    changeOtherUserdata:(data)=> {},
    clearRegistrationStatus:()=>{}

})

export default UserDataContext;
