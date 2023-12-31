import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { AxiosService } from '../axios.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private axiosService: AxiosService,  private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.axiosService.reqest('POST', '/login', this.loginForm.value)
      .then(response => {
        this.axiosService.setAuthToken(response.data.token);
        this.userService.userLoggedIn();
        this.router.navigate(['/']);
        window.localStorage.setItem('user', JSON.stringify(response.data.id));
        window.localStorage.setItem('role', response.data.role);
      });
    }

  }

}
