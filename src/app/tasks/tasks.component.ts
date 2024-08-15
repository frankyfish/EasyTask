import { Component, Input } from '@angular/core';
import { TaskComponent, Task } from "../task/task.component";
import { dummyTasks } from './dummy-tasks';
import { CreateComponent } from "./create/create.component";
import { NewTask } from './create/new-task.model';

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


  /**
   * Handles 'Add Task' button. Basically makes
   * visible the new task form.
   */
  onAddTask() {
    console.log('task creation triggered...')
    this.isNewTaskCreation = true
  }

  onCancelCreateTask() {
    this.isNewTaskCreation = false
  }
  /**
   * Handles submission of the form with new task
   * data.
   */
  onAddTaskSubmit(newTask: NewTask) {
    this.tasks.push({
      id: new Date().getTime().toString(), // just basic ID generation
      userId: this.userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date
    })
    // closing the task creation dialog
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
