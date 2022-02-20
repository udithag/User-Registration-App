
import classes from "./UserList.module.css";
import User from "./User";

const UserList =(props) => {

    

    const filteredUserList = props.userList.filter((user)=> user.userType !=="admin");
    const userList = filteredUserList.map(user => <User user = {user} key={user.email}/>   
    
    );

     return  <ul className={classes.list} >
               {userList}
            </ul>
           
        
}

export default UserList;