import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @Input({required: true}) userId!: string
  @Output() taskCreationCanceler = new EventEmitter<void>()
  enteredTitle = ''
  enteredSummary = ''
  enteredDate = signal('') // example using 2-way binding using signals
  private tasksService = inject(TasksService) // example of field DI

  onCancelTaskCreation() {
    this.taskCreationCanceler.emit()
  }

  onTaskCreationFormSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate() //  reading value from signal by treating it as a function
      }, this.userId)
    // closing create dialog
    this.taskCreationCanceler.emit()
  }

}
