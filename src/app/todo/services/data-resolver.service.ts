import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService {

  url = 'http://localhost:3000/todo';

  constructor(private http:HttpClient) { }

  getTodoList():Observable<any>{
    return this.http.get(this.url);
  }

  addTodoData(data):Observable<any>{
    return this.http.post(this.url,data);
  }

  deleteTodoData(id):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
