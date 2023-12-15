import './App.css'
import {Header} from "./header/Header.tsx";
import {useUser, useUserDispatcher} from "./context/UserContext.tsx";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase.ts";
import {SignIn} from "./signin/SignIn.tsx";
import {Loader} from "./loader/Loader.tsx";
import {Form} from "./form/Form.tsx";
import {useTaskDispatcher, useTaskList} from "./context/TaskContext.tsx";
import {getAllTasks} from "./service/task-service.tsx";
import {Task} from "./task/Task.tsx";

function App() {
    const [loader, setLoader] = useState(true);
    const user = useUser();
    const userDispatcher = useUserDispatcher();
    const taskDispatcher = useTaskDispatcher();
    const taskList = useTaskList();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setLoader(false);
            if (user) {
                userDispatcher({type: 'sign-in', user: user});
                getAllTasks(user.email!).then(taskList => {
                    taskDispatcher({type: 'set-list', taskList})
                });
            } else {
                userDispatcher({type: 'sign-out'});
                taskDispatcher({type: 'set-list', taskList: []})
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
                        (<>
                            <Header/>
                            <Form/>
                            <div>
                                {taskList.map((task) => (
                                        <Task {...task}></Task>
                                    ))}
                            </div>
                        </>)
                        :
                        <SignIn/>

            }


        </>
    )
}

export default App
