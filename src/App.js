import {Switch, Route} from "react-router-dom";
import './App.css';
import Layout from './Components/Layout/Layout';
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import UserProfile from "./Components/Profile/UserProfile";


function App() {
  return (
   
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/auth">
          <AuthPage/>
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
      </Switch>        
    </Layout>
   
  );
}

export default App;
