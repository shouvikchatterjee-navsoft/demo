import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  date = new Date();
  pi: number = 3.14159265359;
  amount = 5000;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(loginForm){
    console.log('loginForm:',loginForm);
    console.log('loginForm.value:',loginForm.value);
    console.log('loginForm.controls.email.value:',loginForm.controls.email.value);
    console.log('loginForm.valid:',loginForm.valid);
    
    
  }

}
