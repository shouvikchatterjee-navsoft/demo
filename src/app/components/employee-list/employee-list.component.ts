import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

export interface Employee{
  id:string;
  employeeName:string;
  age:string;
  department:string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {

  employeeList:Employee[];
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.dataService.getEmployees().subscribe(response=>{
      console.log('response:',response);
      this.employeeList = response;
    },error=>{
      console.log('error:',error);
    })
  }

  onAddEmployee(){
    this.router.navigate(['add-employee']);
  }

  onEditEmployee(employee){
    this.router.navigate(['edit-employee',employee.id]);
  }

  onDeleteEmployee(id){
    this.dataService.deleteEmployee(id).subscribe(res=>{
      console.log('Employee deleted!');
      this.getEmployees();
    })
  }

  
}
