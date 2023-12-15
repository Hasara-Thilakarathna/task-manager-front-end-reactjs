import './Header.css'
import {auth} from "../firebase.ts";
import { signOut } from 'firebase/auth';
export function Header() {
    function handleSignOut(){
        signOut(auth);
    }
    return (
        <header className="d-flex justify-content-between py-3 px-2 border-bottom border-3 border-dark-subtle">
            <h3 className="animate__animated animate__tada fs-3 text-white fw-bold">TaskVista📑</h3>
            <button onClick={handleSignOut} className="btn btn-danger px-1 btn-sm">
                <i className="bi bi-escape"></i> SIGN OUT
            </button>
        </header>
    );
}