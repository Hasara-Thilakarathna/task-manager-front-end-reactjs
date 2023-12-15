import './SignIn.css';
import {signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import {auth} from "../firebase.ts";


export function SignIn() {

    function handleSignIn() {
        signInWithPopup(auth, new GoogleAuthProvider());
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 ">
            <div id="signin-wrapper" className="border p-3 d-flex flex-column justify-content-center align-items-center rounded">
                <h1 className="fs-5 text-secondary">Welcome to</h1>
                <img src="/logo/TaskVista.png" alt="logo"/>
                <img id="btn-google-signin" onClick={handleSignIn} src="/google/web_light_rd_SI@1x.png"
                     alt="google signin"/>
            </div>


        </div>
    );
}