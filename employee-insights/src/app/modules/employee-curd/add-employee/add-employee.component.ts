import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeCurdService } from '../employee-curd.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service: EmployeeCurdService,
    private toastr: ToastrService,
    private router: Router) { }

  newEmployee = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    country: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    skills: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    proficiency: new FormControl(0, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    mobile: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email])
  });

  get name() { return this.newEmployee.get('name'); }
  get country() { return this.newEmployee.get('country'); }
  get skills() { return this.newEmployee.get('proficiency'); }
  get mobile() { return this.newEmployee.get('mobile'); }
  get email() { return this.newEmployee.get('email'); }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.addEmployee(this.newEmployee.value).subscribe((response) => {
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