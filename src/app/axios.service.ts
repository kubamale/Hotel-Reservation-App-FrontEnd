import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor(private route: Router) { 
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  reqest(method: string, url: string,data: any): Promise<any> {
    
    let headers = {};

    if(this.getAuhtToken() !== null && url !== '/login' && url !== '/register'){
      headers ={"Authorization": "Bearer " + this.getAuhtToken()};
    }

    return axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    }).catch((error) =>{
        if (error.response['status'] == 401){
            this.route.navigate(['/login']);
          }
    });
  }

  getAuhtToken(): string | null{
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string | null): void{
    if (token !== null){
      window.localStorage.setItem("auth_token",token);
    }else{
      window.localStorage.removeItem("auth_token");
    }

  }
}
