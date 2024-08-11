import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUserId = Math.floor(Math.random() * DUMMY_USERS.length)

type User = {
  id: string,
  avatar: string,
  name: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User
  // @Input({required: true}) id!: string
  // @Input({required: true}) avatar!: string
  // @Input({required: true}) name!: string
  @Output() select = new EventEmitter<string>()
  @Output() username = new EventEmitter<string>()

  get avatarPath() {
    return '/assets/users/' + this.user.avatar
  }

  onUserClicked() {
    this.select.emit(this.user.id)
    this.username.emit(this.user.name)
  }
}