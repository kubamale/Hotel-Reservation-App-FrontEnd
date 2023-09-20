import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AxiosService } from '../axios.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  registrationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private axiosService: AxiosService, private router: Router, private userService: UserService){}

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
      this.axiosService.reqest('POST', '/register', this.registrationForm.value).then(response => {
        this.axiosService.setAuthToken(response.data.token);
        this.userService.userLoggedIn(response.data.id);
        this.router.navigate(['/']);
        window.localStorage.setItem('user', JSON.stringify(response.data.id));
      });
    }

  }
}
