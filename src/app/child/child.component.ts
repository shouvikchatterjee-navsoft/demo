import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() dataChild;
  @Output() sendToParent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  passData(){
    this.sendToParent.emit('Kunal');
  }

}
