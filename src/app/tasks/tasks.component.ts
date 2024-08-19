import { Component, Input } from '@angular/core';
import { NewTask } from './create/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true})userId!: string
  @Input({required: true})username!: string
  isNewTaskCreation = false

  constructor(private tasksService: TasksService) {}

  get tasksByUser() {
    console.log('filtering tasks by user:' + this.userId)
    return this.tasksService.getUserTasks(this.userId)
  }

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
    // closing the task creation dialog
    this.isNewTaskCreation = false
    this.tasksService.addTask(newTask, this.userId)
  }

  removeCompletedTask(taskId: string) {
    this.tasksService.removeTask(taskId)
  }
}
