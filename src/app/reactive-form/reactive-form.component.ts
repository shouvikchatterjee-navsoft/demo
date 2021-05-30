import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  skillForm:FormGroup;
  skills = new FormArray([]);
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({

    })
  }

  onAddSkill(skillForm){
    console.log(skillForm);
    this.skills.push(new FormControl(''));
  }
  onRemoveControl(i){
    this.skills.removeAt(i);
  }
}
