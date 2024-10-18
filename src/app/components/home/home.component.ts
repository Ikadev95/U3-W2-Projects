import { iTodo } from '../../interfaces/i-todo';
import { UserServiceService } from '../../services/user-service.service';
import { TodoServiceService } from './../../services/todo-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  stringa:string = ''
  todos:iTodo [] =[]

 constructor (
  private TodoSvc:TodoServiceService,
  private UserSvc: UserServiceService
 ){}
  ngOnInit(): void {
  this.TodoSvc.TodoPlusUser(this.UserSvc.users)
    this.todos = this.TodoSvc.todos

  }
  filterTodos(): void {
    this.todos = this.TodoSvc.searchTodos(this.stringa)
    console.log(this.stringa)
    console.log(this.todos)
  }



}
