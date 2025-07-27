import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ApiService } from 'src/app/services/api';
   

@Component({
  selector: "app-login",
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./login.html",
  styleUrls: ["./login.scss"],
})
export class Login {
  apiService = inject(ApiService);
  loginForm: FormGroup=new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  login() {
    try{
    this.apiService
      .post("https://dummy.restapiexample.com/api/v1/create", {
        name: "test",
        salary: "123",
        age: "23",
      })
      .subscribe({
        next: (response) => {
          console.log("Login successful", response);
        },
      });    

    }catch(e){}
  }
}
