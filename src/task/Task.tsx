import './Task.css';
import {TaskDto} from "../dto/TaskDto.ts";
import {ChangeEvent, useId, useState} from "react";
import {useTaskDispatcher} from "../context/TaskContext.tsx";
import {updateTask} from "../service/task-service.tsx";
export function Task(task:TaskDto) {
    const id = useId();
    const taskDispatcher = useTaskDispatcher();
    const [checked, setChecked] = useState(task.status);

    function handleCheck(e:ChangeEvent<HTMLInputElement>){
        updateTask(task).then(value => {
            setChecked(!checked)
        }).catch(err =>{
            alert("Failed to update the task")
        })
    }

    return (
        <div id="task" className="d-flex justify-content-between align-items-center px-2 fs-5">
            <div className="d-flex gap-2 py-3">
                <input
                    onChange={handleCheck}
                    checked={checked ?? false}
                    id={id}
                    className="form-check-input"
                    type="checkbox"/>
                <label htmlFor={id}>{task.description}</label>
            </div>
            <i id="btn-delete" className="bi bi-trash-fill fs-4"></i>
        </div>

    );
}