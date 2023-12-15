import './Task.css';
import {TaskDto} from "../dto/TaskDto.ts";
import {useId} from "react";
import {useTaskDispatcher} from "../context/TaskContext.tsx";
export function Task(task:TaskDto) {
    const id = useId();
    const taskDispatcher = useTaskDispatcher();

    return (
        <div>
            <div id="task" className="d-flex gap-2 px-2 py-3">
                <input id={id} type="checkbox"/>
                <label htmlFor={id}>{task.description}</label>
            </div>

        </div>

    );
}