import './Form.css'
import {FormEvent, useRef, useState} from "react";
export function Form() {
    const [value, setValue] = useState("")

    const txtRef = useRef<HTMLInputElement>(null);


    function handleSubmit(e:FormEvent){
        e.preventDefault();
        // Todo: Create a new task
        // Todo: Add the task into the task list
        setValue("");
        txtRef.current!.focus();
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex gap-2 py-3 px-2">
            <input
                ref={txtRef}
                value={value}
                onChange={e =>{
                   setValue(e.target.value.trim());
                }}
                className="form-control"
                type="text"
                placeholder="Eg. Finish task manager app "
            />
            <button className="btn btn-primary fw-bold py-0" >ADD</button>

        </form>
    );
}