import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MyChildComponent implements OnInit {

  @Input() person:Person;

  constructor(private cdr:ChangeDetectorRef) { }

  ngOnChanges(){
    console.log('person:',this.person);
    this.cdr.markForCheck();
  }

  ngOnInit(): void {
  }

}
