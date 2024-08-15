import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @Output() taskCreationCanceler = new EventEmitter<void>()
  @Output() addNewTask = new EventEmitter<NewTask>()
  enteredTitle = ''
  enteredSummary = ''
  enteredDate = signal('') // example using 2-way binding using signals

  onCancelTaskCreation() {
    this.taskCreationCanceler.emit()
  }

  onTaskCreationFormSubmit() {
    this.addNewTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate() //  reading value from signal by treating it as a function
    })
  }

}
