import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http:HttpClient){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.valid);
    this.http.post("http://localhost:8080/login", this.loginForm.value).subscribe(data => console.log(data));
    }

  }

}
