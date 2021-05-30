import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.scss']
})
export class LifecyclehooksComponent implements OnInit {

  @Input() data;

  constructor() { 
    console.log('constructor');
  }

  ngOnChanges(){
    console.log('ngOnChanges');
    console.log('data:',this.data);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log('data:',this.data);
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngDestroy(){
    console.log('ngDestroy');
  }



  onChange(){
    console.log('onChange');
  }

}
