import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../components/employee-list/employee-list.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:3000/employees';
  teams = [
    {name:'Team1',players:11},
    {name:'Team2',players:10},
    {name:'Team3',players:5},
    {name:'Team4',players:6},
  ]

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>{
    return <Observable<Employee[]>>this.http.get(this.url);
  }

  addEmployee(data):Observable<Employee>{
    return <Observable<Employee>>this.http.post(this.url,data);
  }

  editEmployee(data,id):Observable<any>{
    console.log('data:',data);
    return this.http.put(`${this.url}/${id}`,data);
  }

  getEmployeeById(id):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }

  deleteEmployee(id):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }


}
