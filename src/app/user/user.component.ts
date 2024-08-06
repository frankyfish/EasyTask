import { Component, computed, signal } from '@angular/core';
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
  selectedUser = signal(DUMMY_USERS[randomUserId])
  imagePath = computed(() => '/assets/users/' + this.selectedUser().avatar)

  get srcAvatarPath() {
    return '/assets/users/' + this.selectedUser().avatar
  }

  onUserClicked() {
    this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)])
  }
}