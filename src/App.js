import './App.css';
import { useEffect } from 'react';
import LoginButton from './components/auth/auth0/LoginButton';
import LogoutButton from './components/auth/auth0/LogoutButton';
import Profile from './components/auth/auth0/Profile';

import { useAuth0 } from "@auth0/auth0-react";
import logo from './logo.png';


function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    console.log("Is authenticated?: ", isAuthenticated);
    console.log("User: ", user);
  }, [isAuthenticated, user])

  return (
    <div className="app">
      <img src={logo} width="50px" alt="logo"/>
      {
        isLoading
          ? <h3> Loading ... </h3>
          : <>
            {!isAuthenticated
              ?
              <>
                <p className="heading"><strong> Authenticate with Spotify</strong></p>
                <div className="buttons">
                  <LoginButton />
                </div>
              </>
              :
              <>
                <p className="heading"> Authenticated as <strong>{user.name}</strong> </p>
                <Profile user={user} />
                <div className="buttons">
                  <LogoutButton />
                </div>
              </>
          }</>
      }
    </div>

  );
}

export default App;
