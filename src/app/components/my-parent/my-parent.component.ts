import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-my-parent',
  templateUrl: './my-parent.component.html',
  styleUrls: ['./my-parent.component.scss']
})
export class MyParentComponent implements OnInit {

  parentPerson:Person;

  constructor() { }

  ngOnInit(): void {
    this.parentPerson = {
      name:'Kunal',
      age:25
    };
  }

  onSend(){
    this.parentPerson = {
      name:'Shouvik',
      age:30
    }
  }
}
