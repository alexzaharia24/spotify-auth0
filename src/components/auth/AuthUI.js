import { useEffect, useContext } from 'react';
import { AuthContext } from './Auth';

import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import firebase from 'firebase/app';


const AuthUI = () => {
    const auth = useContext(AuthContext);
    useEffect(() => {
        // FirebaseUI config.
        if (auth.user === null) {
            var uiConfig = {
                // signInSuccessUrl: '<url-to-redirect-to-on-success>',
                signInOptions: [
                    // Leave the lines as is for the providers you want to offer your users.
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                ],
                // tosUrl and privacyPolicyUrl accept either url string or a callback
                // function.
                // Terms of service url/callback.
                //   tosUrl: '<your-tos-url>',
                // Privacy policy url/callback.
                //   privacyPolicyUrl: function() {
                //     window.location.assign('<your-privacy-policy-url>');
                //   }
            };

            // Initialize the FirebaseUI Widget using Firebase.
            var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
            // The start method will wait until the DOM is loaded.
            ui.start('#firebaseui-auth-container', uiConfig);
        }
    }, [auth.user]);


    return (
        <>
            {auth.user === null &&
                <div id="auth">
                    <div id="firebaseui-auth-container"></div>
                </div>
            }
        </>
    )
}

export default AuthUI;