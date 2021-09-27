import { useEffect, useState, createContext} from 'react';
import firebase from 'firebase/app';

export const AuthContext = createContext({user: null})

const Auth = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (loggedInUser) {
            if (loggedInUser) {
                // User is signed in.
                setUser(loggedInUser);

            } else {
                // User is signed out.

            }
        }, function (error) {
            console.log(error);
        });
        return () => {
        }
    }, [])



    return (
        <AuthContext.Provider value={{user:user, setUser: setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default Auth;