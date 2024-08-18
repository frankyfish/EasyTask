import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
  users = DUMMY_USERS

  selectedUser?:User
  
  onUserSelected(userId: string) {
    console.log('userId selected:' + userId)
    this.selectedUser = DUMMY_USERS.find(dummyUser => dummyUser.id === userId)
  }
}

