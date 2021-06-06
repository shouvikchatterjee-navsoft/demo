import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm;
  title;
  buttonText;
  id;
  constructor(private fb:FormBuilder,private data:DataService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params.id){
        this.title = 'Edit Employee';
        this.buttonText = 'Update';
        this.setEditData(params.id);
        this.id = params.id;
      }else{
        this.title = 'Add Employee';
        this.buttonText = 'Add';
      }
    })

    this.employeeForm = this.fb.group({
      employeeName:[''],
      age:[''],
      department:['']
    })
  }

  setEditData(id){
    this.data.getEmployeeById(id).subscribe(employee=>{
      this.employeeForm = this.fb.group({
        employeeName:[employee.employeeName],
        age:[employee.age],
        department:[employee.department]
      })
    })
  }


  onAddEditEmployee(){
    if(this.title === 'Add Employee'){
      this.data.addEmployee(this.employeeForm.value).subscribe(res=>{
        console.log('Employee added!');
        this.router.navigate(['employees']);
      },error=>{
        console.log(error);
      })
    }else{
      this.data.editEmployee(this.employeeForm.value,this.id).subscribe(res=>{
        console.log('Employee updated!');
        this.router.navigate(['employees']);
      },error=>{
        console.log(error);
      })
    }
    

  }

  onCancel(){
    this.router.navigate(['employees']);
  }

}
