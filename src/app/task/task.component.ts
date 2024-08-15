import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../shared/card/card.component";
import { DatePipe } from '@angular/common';
export { Task }; // todo: what is this (auto-gen)

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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

