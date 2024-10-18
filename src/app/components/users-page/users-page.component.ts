import { Component, OnInit } from '@angular/core';
import { iUser } from '../../interfaces/i-user';
import { UserServiceService } from '../../services/user-service.service';
import { TodoServiceService } from '../../services/todo-service.service';
import { iTodo } from '../../interfaces/i-todo';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent implements OnInit {
  todos:iTodo[] = []
  users:iUser [] =[]
  constructor (
   private TodoSvc:TodoServiceService,
   private UserSvc: UserServiceService
  ){}
  ngOnInit(): void {
    this.UserSvc.UsersPlusTodo(this.TodoSvc.todos)
    this.users = this.UserSvc.users
  }

}
