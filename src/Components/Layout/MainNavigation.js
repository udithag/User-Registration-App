
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import UserDataContext from "../DataStore/UserData-Context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {

const history = useHistory();   
const userDataCtx = useContext(UserDataContext);
const isLoggedIn = userDataCtx.isLoggedIn;

const logoutHandler = ()=> {

    userDataCtx.logout();
    history.replace("/");
    userDataCtx.clearRegistrationStatus();
}

    return (
             <header className={classes.header}>
                 <Link to="/">
                     <div className={classes.logo}> User Registration App</div>
                 </Link>
                 <nav>
                     <ul>
                         {!isLoggedIn && <li>
                             <Link to="/auth">Login/Register</Link>
                         </li>}
                         {isLoggedIn && <li>
                             <Link to="/profile">Profile</Link>
                         </li>}
                        {isLoggedIn && <li>
                             <button onClick={logoutHandler}>Logout</button>
                         </li>}
                     </ul>
                 </nav>
             </header>
           
    )
}

export default MainNavigation;