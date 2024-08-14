import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
export { Task }; // todo: what is this (auto-gen)

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) taskContent?: Task
  @Output() completed = new EventEmitter<string>()
  userId?: string

  onComplete() {
    this.completed.emit(this.taskContent?.id)
  }
}

