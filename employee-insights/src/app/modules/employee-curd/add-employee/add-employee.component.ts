import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }

  addEmployee = new FormGroup({
    name: new FormControl(null, [Validators.pattern('[a-zA-Z ]*')]),
    country: new FormControl(""),
    skills: new FormControl(),
    proficiency: new FormControl(),
    mobile: new FormControl(),
    email: new FormControl()
  });

  get name() { return this.addEmployee.get('name'); }
  get country() { return this.addEmployee.get('country'); }
  get skills() { return this.addEmployee.get('proficiency'); }
  get mobile() { return this.addEmployee.get('mobile'); }
  get email() { return this.addEmployee.get('email'); }

  ngOnInit(): void {
  }

}
