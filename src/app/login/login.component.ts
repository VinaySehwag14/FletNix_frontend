import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router,private fb: FormBuilder,private http: HttpClient,private authService: AuthService) { }
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      age: ['', [Validators.required]]
    
    });
  }

  onSubmit() {
    const formData = this.loginForm.value;
    this.authService.login(formData).subscribe(
      (res) => {
        this.authService.setToken(res.token);
        this.router.navigate(['/home']);
      },
      (err) => {
        console.error(err);
      }
    );
  }
  
}