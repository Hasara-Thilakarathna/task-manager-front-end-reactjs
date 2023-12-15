import './Task.css';
import {TaskDto} from "../dto/TaskDto.ts";
import {useId} from "react";
import {useTaskDispatcher} from "../context/TaskContext.tsx";
export function Task(task:TaskDto) {
    const id = useId();
    const taskDispatcher = useTaskDispatcher();

    return (
        <div id="task" className="d-flex justify-content-between align-items-center px-2 fs-5">
            <div className="d-flex gap-2 py-3">
                <input id={id} type="checkbox"/>
                <label htmlFor={id}>{task.description}</label>
            </div>
            <i id="btn-delete" className="bi bi-trash-fill fs-4"></i>
        </div>

    );
}