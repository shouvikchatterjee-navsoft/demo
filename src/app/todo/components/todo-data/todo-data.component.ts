import { Component, OnInit } from '@angular/core';
import { DataResolverService } from '../../services/data-resolver.service';

@Component({
  selector: 'app-todo-data',
  templateUrl: './todo-data.component.html',
  styleUrls: ['./todo-data.component.scss']
})
export class TodoDataComponent implements OnInit {
  isProgress:boolean;
  todoList;
  constructor(private dataResolverService:DataResolverService) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList(){
    this.dataResolverService.getTodoList().subscribe(list=>{
      this.todoList = list;
    })
  }

  onAddTodo(e){
    // console.log(e.target.value);
    this.isProgress = true;
    const todo = {todo:e.target.value};
    this.dataResolverService.addTodoData(todo).subscribe(res=>{
      console.log('data added!');
      this.isProgress = false;
      this.getTodoList();
      e.target.value = '';
    })

  }

  onDeleteTodo(item){
    this.isProgress = true;
    this.dataResolverService.deleteTodoData(item.id).subscribe(res=>{
      console.log('data deleted!');
      this.isProgress = false;
      this.getTodoList();
    })
  }

}
