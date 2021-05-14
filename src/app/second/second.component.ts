import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  isShow = false;
  employees = [
    {id:1,name:'Shouvik',age:30},
    {id:2,name:'Kunal',age:25},
    {id:3,name:'Arup',age:35},
    {id:4,name:'Prosen',age:18},
    {id:5,name:'Bingo',age:50},
    {id:6,name:'Monoj',age:40},
    {id:7,name:'Somu',age:60},
  ];
  myColor = 'red';
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    console.log('second teams:',this.dataService.teams);
  }

  onClick(){
    this.isShow = !this.isShow;
  }

  onRefresh(){
    this.employees = [
      {id:1,name:'Shouvik',age:30},
      {id:2,name:'Kunal',age:25},
      {id:3,name:'Arup',age:Math.round(Math.random()*100)},
      {id:4,name:'Prosen',age:18},
      {id:5,name:'Bingo',age:Math.round(Math.random()*100)},
      {id:6,name:'Monoj',age:40},
      {id:7,name:'Somu',age:60},
    ];
  }

  trackByFunc(index,item){
    return item.id;
  }

  changeColor(){
    this.myColor = (this.myColor === 'red')?'green':'red';
  }

  
}

  

