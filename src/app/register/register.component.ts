import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient,private authService: AuthService,) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const formData = this.registerForm.value;
    this.authService.register(formData).subscribe(
      response => {
        console.log(response);
        // Store the JWT token
        this.authService.setToken(response.token);
        // Redirect to login page
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
