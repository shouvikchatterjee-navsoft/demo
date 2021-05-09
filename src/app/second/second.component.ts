import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    console.log('Regular---getColor:',this.getColor());
    console.log('Arrow----get:',this.get());
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

  getColor(){
    // console.log('this:',this);
    return this.myColor;
  }

  get = () => {
    console.log('this:',this);
    return this.myColor;
  }

  }

  

