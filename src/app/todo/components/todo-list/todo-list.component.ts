import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todoList;
  @Output() deleteItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item){
    this.deleteItem.emit(item);
  }

}
