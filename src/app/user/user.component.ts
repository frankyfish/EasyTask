import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// const randomUserId = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User
  @Input({required: true}) selected!: boolean
  @Output() select = new EventEmitter<string>()
  @Output() userId = new EventEmitter<string>()

  get avatarPath() {
    return '/assets/users/' + this.user.avatar
  }

  onUserClicked() {
    // this.select.emit(this.user.id)
    this.userId.emit(this.user.id)
  }
}