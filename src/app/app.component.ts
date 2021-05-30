import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  address ='Kolkata';

  num1 = 10;
  num2 = 20;

  constructor(private router:Router){

  }

  clickFirst(){
    this.router.navigate(['first']);
  }

  openTemplate(){
    this.router.navigate(['template']);
  }
}
