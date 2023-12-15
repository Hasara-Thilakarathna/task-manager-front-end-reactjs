import './Header.css'
import {auth} from "../firebase.ts";
import { signOut } from 'firebase/auth';
export function Header() {
    function handleSignOut(){
        signOut(auth);
    }
    return (
        <header className="d-flex justify-content-between p-3 border-bottom border-3 border-dark-subtle bg-secondary">
            <h3 className="fs-1 text-white fw-bold">TaskVista📑</h3>
            <button onClick={handleSignOut} className="btn btn-outline-danger px-1 py-0">Sign Out</button>
        </header>
    );
}