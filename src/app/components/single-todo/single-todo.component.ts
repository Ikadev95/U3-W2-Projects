import { iTodo } from './../../interfaces/i-todo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrl: './single-todo.component.scss'
})
export class SingleTodoComponent implements OnInit{
  ngOnInit(): void {

  }
  @Input() todo!:iTodo
  @Output() edit = new EventEmitter<iTodo>();

  onEdit() {
    this.edit.emit(this.todo);
  }
}
