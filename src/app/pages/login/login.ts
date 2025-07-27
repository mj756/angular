import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  apiService = inject(ApiService);
  loginForm: FormGroup=new FormGroup({
    email: new FormControl(),
    password:new FormControl()
  });
  login(){
    
  }
}
