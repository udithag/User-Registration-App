import { useState, useContext, useEffect } from 'react';


import UserDataContext from '../DataStore/UserData-Context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordsMatching, setPasswordsMatching] = useState(true);
  const [enteredEmail,setEnteredEmail] = useState("");
  const [enteredFirstName, setEnteredFirstName]= useState("");
  const [enteredLastName, setEnteredLastName]= useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmationPassword, setEnteredConfirmationPassword] =useState("");

  const [loginButtonClicked, setLoginButtonClicked] = useState(false);
  const userDataCtx = useContext(UserDataContext);
  const isLoggedIn = userDataCtx.isLoggedIn;

  const getEmail =(event)=> {
      setEnteredEmail(event.target.value);
  }
  const getFirstName = (event) => {
      setEnteredFirstName(event.target.value);
  }
  const getLastName = (event) => {
      setEnteredLastName(event.target.value);
  }
  const getPassword = (event) => {
      setEnteredPassword(event.target.value);
  }
  const getConfirmationPassword =(event) => {
      setEnteredConfirmationPassword(event.target.value);
  }
  

  useEffect(()=>{

    userDataCtx.checkEmailExist(enteredEmail);
    if(enteredPassword===enteredConfirmationPassword){
      setPasswordsMatching(true);
    }
    if(enteredPassword!==enteredConfirmationPassword){
      setPasswordsMatching(false);
    }
     
  },[enteredEmail,enteredPassword,enteredConfirmationPassword]);


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    
  };



  const submitHandler = (event)=> {
     event.preventDefault();

      const user = {
         firstName:enteredFirstName,
         lastName:enteredLastName,
         email:enteredEmail,
         password:enteredPassword,
         usertype:"regular"
       }

   if (!isLogin) {
    if (passwordsMatching && !userDataCtx.emailExist && (enteredEmail.length!==0)&&(enteredPassword.length!==0)){
       
      setPasswordsMatching(true);
      userDataCtx.addUser(user);
      setIsLogin((prevState) => !prevState);
      
     }
   } 

   if (isLogin){
       userDataCtx.login(user);
       setLoginButtonClicked(true);
       
   }
   
  }
  
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
     
      <form onSubmit={submitHandler}>
        {!isLogin && <div className={classes.control}>
          <label htmlFor='first-name'>Your First Name</label>
          <input type='text' id='first-name' onChange={getFirstName} />
        </div>}
        {!isLogin && <div className={classes.control}>
          <label htmlFor='last-name'>Your Last Name</label>
          <input type='text' id='last-name' onChange={getLastName}/>
        </div>}
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' onChange={getEmail} />
          {!isLogin && userDataCtx.emailExist && <p>Email is already in use</p>}
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' onChange={getPassword} />
          {isLogin && !isLoggedIn && loginButtonClicked && <p> Wrong Username or password </p>}
        </div>
        {!isLogin && <div className={classes.control}>
          <label htmlFor='password-confirm'>Enter Password again</label>
          <input type='password' id='password-confirm' onChange={getConfirmationPassword}/>
          {!isLogin && !passwordsMatching && <p>Passwords do not match. Please enter password again</p>}
        </div>}
        <div className={classes.actions}>
          <button >{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Register' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
