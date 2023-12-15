import './Form.css'
import {FormEvent, useRef, useState} from "react";
import {useTaskDispatcher} from "../context/TaskContext.tsx";
import {TaskDto} from "../dto/TaskDto.ts";
import {saveTask} from "../service/task-service.tsx";
import {useUser} from "../context/UserContext.tsx";

export function Form() {
    const user = useUser();
    const [value, setValue] = useState("")
    const txtRef = useRef<HTMLInputElement>(null);
    const taskDispatcher = useTaskDispatcher();


    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        // taskDispatcher({
        //     type: 'add',
        //     task: new TaskDto(1, value.trim(), false, '')
        // })
        saveTask(new TaskDto(null, value, null, user?.email!))
            .then(task => {
                taskDispatcher({type: 'add', task});
                setValue("");
                txtRef.current!.focus();
            }).catch(err => {
            alert(err)
        })

        // Todo: Add the task into the task list
        setValue("");
        txtRef.current!.focus();
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex gap-2 py-3 px-2">
            <input
                ref={txtRef}
                value={value}
                onChange={e => {
                    setValue(e.target.value.trim());
                }}
                className="form-control"
                type="text"
                placeholder="Eg. Finish task manager app "
            />
            <button className="btn btn-primary fw-bold py-0">ADD</button>

        </form>
    );
}