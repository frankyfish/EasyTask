import { Injectable } from "@angular/core";
import { Task } from "../task/task.model";
import { NewTask } from "./create/new-task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks: Task[] = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ]

    constructor() {
        // picking up data from local storage (if there is any)
        const loadedTasks = localStorage.getItem('tasks')
        if (loadedTasks) {
            this.tasks = JSON.parse(loadedTasks)
        }
    }

    getUserTasks(userId: string) {
        console.log('filtering tasks by user:' + userId)
        return this.tasks.filter((task) => task.userId === userId)
    }

    addTask(newTask: NewTask, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(), // just basic ID generation
            userId: userId,
            title: newTask.title,
            summary: newTask.summary,
            dueDate: newTask.date
          })
        this.saveToLocalStorage()
    }

    removeTask(taskId: string) {
        console.log('removing taskId=' + taskId)
        this.tasks = this.tasks.filter((task) => task.id !== taskId)
        this.saveToLocalStorage()
    }

    private saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
}