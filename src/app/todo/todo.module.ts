import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoDataComponent } from './components/todo-data/todo-data.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [TodoDataComponent, TodoListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatRippleModule,
    MatProgressBarModule,
    MatIconModule
  ]
})
export class TodoModule { }
