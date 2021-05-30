import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  empForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.empForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      gender:[null,[Validators.required]],
      dob:['',[Validators.required]],
      designation:['',],
      address:this.fb.group({
        street:[''],
        landMark:[''],
        pinCode:['']
      })
    })
  }

  onSubmit(){    
    console.log(this.empForm.value);
  }

  onReset(){
    this.empForm.reset();
    this.empForm.controls.firstName.markAsUntouched();
    console.log(this.empForm);
  }

}
