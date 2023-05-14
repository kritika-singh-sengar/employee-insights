import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeCurdService } from '../employee-curd.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  newEmployee!: FormGroup;
  public selectedSkillsValue: string[] = [];
  public employee: {
    name: string, country: string, skills: string[],
    proficiency: number, mobile: number, email: string
  } = {
      name: '',
      country: '',
      skills: [],
      proficiency: 0,
      mobile: 0,
      email: ''
    };
  public skillsList = [
    { id: 1, name: 'HTML', selected: false },
    { id: 2, name: 'CSS', selected: false },
    { id: 3, name: 'JS', selected: false }
  ];

  constructor(private service: EmployeeCurdService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder) {

  }

  addSkillsControls() {
    const arr = this.skillsList.map(skill => {
      return this.fb.control(skill.selected);
    });
    return this.fb.array(arr);
  }

  ngOnInit(): void {
    this.newEmployee = this.fb.group({
      name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      country: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      skills: this.addSkillsControls(),
      proficiency: new FormControl(0, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      mobile: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  get name() { return this.newEmployee.get('name'); }
  get country() { return this.newEmployee.get('country'); }
  get skills() { return <FormArray>this.newEmployee.get('skills'); }
  get proficiency() { return this.newEmployee.get('proficiency'); }
  get mobile() { return this.newEmployee.get('mobile'); }
  get email() { return this.newEmployee.get('email'); }

  getSelectedSkillsValue() {
    this.selectedSkillsValue = [];
    this.skills.controls.forEach((control, index) => {
      if (control.value) {
        this.selectedSkillsValue.push(this.skillsList[index].name);
      }
    });
  }

  onSubmit() {
    this.employee.name = this.name?.value;
    this.employee.country = this.country?.value;
    this.employee.skills = this.selectedSkillsValue;
    this.employee.proficiency = this.proficiency?.value;
    this.employee.email = this.email?.value;
    this.employee.mobile = this.mobile?.value;
    this.service.addEmployee(this.employee).subscribe((response) => {
      this.newEmployee.reset();
      this.toastr.success("Employee Details Added Successfully!!", "Successful");
      this.toastr.info("Page Will Redirect Automatically!!", 'Info');
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 5000);
    }, () => {
      this.toastr.error("Something went worng.", "Error")
    });
  }

}