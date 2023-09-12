import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  registrationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http:HttpClient){}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      login: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  register(): void {

    if (this.registrationForm.valid) {
      console.log(this.registrationForm.valid);
    this.http.post("http://localhost:8080/register", this.registrationForm.value).subscribe(data => console.log(data));
    }

  }
}
