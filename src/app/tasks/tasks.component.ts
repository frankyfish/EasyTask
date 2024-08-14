import { Component, Input } from '@angular/core';
import { TaskComponent, Task } from "../task/task.component";
import { dummyTasks } from './dummy-tasks';
import { CreateComponent } from "./create/create.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CreateComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true})userId!: string
  @Input({required: true})username!: string
  tasks = dummyTasks
  isNewTaskCreation = false


  onAddTask() {
    console.log('task creation triggered...')
    this.isNewTaskCreation = true
    // let newTask = {title: 'New task', description: 'todo'}
    // this.tasks.push(newTask as TaskContent)
  }

  onCancelCreateTask() {
    this.isNewTaskCreation = false
  }

  get tasksByUser() {
    console.log('filtering tasks by user:' + this.userId)
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  removeCompletedTask(taskId: string) {
    console.log('removing taskId=' + taskId)
    this.tasks = this.tasks.filter((task) => task.id !== taskId)
  }
}
