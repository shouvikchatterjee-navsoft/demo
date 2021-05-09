import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  showLoop = false;
  buttonText = 'show';
  employees = [
    {id:1,name:'Shouvik', age:30},
    {id:2,name:'Arup', age:35},
    {id:3,name:'Sowmit', age:18},
    {id:4,name:'Kunal', age:28},
    {id:5,name:'Prosen', age:20},
  ];

  constructor() { }

  

  ngOnInit(): void {
  }

  toggleLoop(){
    console.log('toggleLoop');
    this.showLoop = !this.showLoop;
    this.buttonText = (this.buttonText === 'show') ? 'hide' : 'show';
  }

  refresh(){        
    this.employees = [
      {id:1,name:'Shouvik', age:30},
      {id:2,name:'Arup', age:35},
      {id:3,name:'Sowmit', age:Math.round(Math.random()*100)},
      {id:4,name:'Kunal', age:28},
      {id:5,name:'Prosen', age:Math.round(Math.random()*100)},
    ];
  }

  trackByFun(index,item){
    return item.id;
  }
}
