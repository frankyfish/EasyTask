import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUserId = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: string
  @Input() name!: string

  get avatarPath() {
    return '/assets/users/' + this.avatar
  }

  onUserClicked() {}
}