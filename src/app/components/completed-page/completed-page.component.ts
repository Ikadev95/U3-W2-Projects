import { iTodo } from './../../interfaces/i-todo';
import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-completed-page',
  templateUrl: './completed-page.component.html',
  styleUrls: ['./completed-page.component.scss']
})
export class CompletedPageComponent implements OnInit {
  todos: iTodo[] = [];

  constructor(
    private TodoSvc: TodoServiceService,
    private UserSvc: UserServiceService
  ) {}

  ngOnInit(): void {
    this.todos = this.TodoSvc.TodoPlusUserComp(this.UserSvc.users);
    this.TodoSvc.updateTodo(this.todos);
  }

  updateTodos(newTodos: iTodo[],todo:iTodo) {
    this.todos = newTodos;
    this.TodoSvc.updateTodo(this.todos);

      const index = this.todos.findIndex(updated => updated.id === todo.id);
      this.todos.splice(index,1)

  }



}
