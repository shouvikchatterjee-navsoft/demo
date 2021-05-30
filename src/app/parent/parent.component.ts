import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  dataParent = 'Shouvik';
  childVal;

  constructor() { }

  ngOnInit(): void {
  }

  onReceiveChild(e){
    console.log(e);
    this.childVal = e;
  }

}
