
import './App.css'
import {Header} from "./header/Header.tsx";
import {useUser, useUserDispatcher} from "./context/UserContext.tsx";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase.ts";
import {SignIn} from "./signin/SignIn.tsx";
import {Loader} from "./loader/Loader.tsx";
import {Form} from "./form/Form.tsx";

function App() {
    const [loader, setLoader] = useState(true);
    const user = useUser();
    const userDispatcher = useUserDispatcher();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setLoader(false);
            if (user) {
                userDispatcher({type: 'sign-in', user: user});
            } else {
                userDispatcher({type: 'sign-out'});
            }
        })
    }, []);



  return (
    <>
        {
            loader ?
                <Loader/>
                :
                user ?
                   ( <>
                        <Header/>
                        <Form/>
                    </>)

                    :
                    <SignIn/>

        }



    </>
  )
}

export default App
