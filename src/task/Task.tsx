import './Task.css';
import {TaskDto} from "../dto/TaskDto.ts";
import React, {ChangeEvent, createElement, useId, useState} from "react";
import {useTaskDispatcher} from "../context/TaskContext.tsx";
import {deleteTask, updateTask} from "../service/task-service.tsx";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import classes from "*.module.css";

export function Task(task: TaskDto) {
    const id = useId();
    const taskDispatcher = useTaskDispatcher();
    const [checked, setChecked] = useState(task.status);
    const [remove, setRemove] = useState(false);

    function handleCheck(e: ChangeEvent<HTMLInputElement>) {
        updateTask(task).then(value => {
            setChecked(!checked)
        }).catch(err => {
            alert("Failed to update the task")
        })
    }

    function handleDelete() {
        deleteTask(task.id!).then(value => {
            setRemove(true);
            setTimeout(() => {
                taskDispatcher({
                    type: 'delete',
                    id: task.id
                });
            }, 500)
        }).catch(err => {
            alert("Failed to delete the task")
        });
    }


    return (
        <div id="task"
             className={checked ? 'task d-flex justify-content-between align-items-center py-3 px-2 fs-5 bg-dark-subtle opacity-50  border':'d-flex justify-content-between align-items-center py-3 px-2 fs-5'}>
            <div className="d-flex gap-2 py-3">
                <input
                    onChange={handleCheck}
                    checked={checked ?? false}
                    id={id}
                    className={checked ? 'form-check-input bg-info' : 'form-check-input'}
                    type="checkbox"/>
                <label htmlFor={id}>{task.description}</label>
            </div>
            <i onClick={handleDelete} id="btn-delete" className="bi bi-trash-fill fs-4"></i>
        </div>

    );
}