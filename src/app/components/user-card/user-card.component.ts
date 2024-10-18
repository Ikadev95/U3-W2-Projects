import { Component, Input, OnInit } from '@angular/core';
import { iUser } from '../../interfaces/i-user';
import { TodoServiceService } from '../../services/todo-service.service';
import { UserServiceService } from '../../services/user-service.service';
import { iTodo } from '../../interfaces/i-todo';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit {
@Input() user! : iUser

todos:iTodo [] =[]
constructor (
 private TodoSvc:TodoServiceService,
 private UserSvc: UserServiceService
){}
  ngOnInit(): void {

    this.todos = this.TodoSvc.TodosOfUser(this.user)
  }

  updateTodos(newTodos: iTodo[]) {
    this.todos = newTodos;
    this.TodoSvc.updateTodo(this.todos);
  }
}
