import {TaskDto} from "../dto/TaskDto.ts";

const API_BASE_URL = 'http://localhost:8080/api/v1/tasks';

//Load all the tasks in database for the specific email
export async function getAllTasks(email: string) {
    return await (await fetch(`${API_BASE_URL}?email=${email}`)).json();
}

// Save task in database
export async function saveTask(task: TaskDto) {
   return await (await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })).json() as TaskDto;
}
