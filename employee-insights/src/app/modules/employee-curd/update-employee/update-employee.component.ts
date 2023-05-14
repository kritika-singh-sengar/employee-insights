import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPLOYEE } from 'src/app/shared/models/employee.model';
import { EmployeeCurdService } from '../employee-curd.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  private employeeId: number = this.route.snapshot.params['employeeId'];
  public selectedSkillsValue: string[] = [];
  public employeeDetails: EMPLOYEE = {
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
    private route: ActivatedRoute,
    private formGroup: FormBuilder) { }

  editEmployee = new FormGroup({
    id: new FormControl(this.employeeId),
    name: new FormControl(this.employeeDetails.name, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    country: new FormControl(this.employeeDetails.country, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    skills: this.addSkillsControls(),
    proficiency: new FormControl(this.employeeDetails.proficiency, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    mobile: new FormControl(this.employeeDetails.mobile, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    email: new FormControl(this.employeeDetails.email, [Validators.required, Validators.email])
  });

  get name() { return this.editEmployee.get('name'); }
  get country() { return this.editEmployee.get('country'); }
  get skills() { return <FormArray>this.editEmployee.get('skills'); }
  get proficiency() { return this.editEmployee.get('proficiency'); }
  get mobile() { return this.editEmployee.get('mobile'); }
  get email() { return this.editEmployee.get('email'); }

  public addSkillsControls(): FormArray {
    const arr = this.skillsList.map((skill) => {
      return this.formGroup.control(skill.selected);
    });
    return this.formGroup.array(arr);
  }

  private setSkillsControlValue() {
    this.employeeDetails.skills.forEach((skill) => {
      this.skillsList.forEach((e) => {
        if (e.name == skill) { e.selected = true; }
      });
    });
  }


  ngOnInit(): void {
    this.service.getEmployeeById(this.employeeId).subscribe((response) => {
      let skills: boolean[] = [];
      this.employeeDetails = response;
      this.setSkillsControlValue();
      this.skillsList.forEach((skill) => {
        skills.push(skill.selected);
        if (skill.selected) { this.selectedSkillsValue.push(skill.name); }
      });
      this.editEmployee.setValue({
        id: this.employeeId,
        name: this.employeeDetails.name,
        country: this.employeeDetails.country,
        skills: skills,
        proficiency: this.employeeDetails.proficiency,
        mobile: this.employeeDetails.mobile,
        email: this.employeeDetails.email
      });
    });
  }

  public getSelectedSkillsValue() {
    this.selectedSkillsValue = [];
    this.skills.controls.forEach((control, index) => {
      if (control.value) {
        this.selectedSkillsValue.push(this.skillsList[index].name);
      }
    });
  }

  public onSubmit() {
    this.employeeDetails.name = this.name?.value;
    this.employeeDetails.country = this.country?.value;
    this.employeeDetails.skills = this.selectedSkillsValue;
    this.employeeDetails.proficiency = this.proficiency?.value;
    this.employeeDetails.email = this.email?.value;
    this.employeeDetails.mobile = this.mobile?.value;
    this.service.updateEmployee(this.employeeId, this.employeeDetails).subscribe((response) => {
      this.editEmployee.reset();
      this.toastr.success("Employee Details Updated Successfully!!", "Successful");
      this.toastr.info("Page Will Redirect Automatically!!", 'Info');
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 5000);
    }, () => {
      this.toastr.error("Something went worng.", "Error")
    });
  }

}
