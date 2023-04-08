import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';

  constructor(private router: Router, private authService: AuthService, private modalService: NgbModal, private authGuard: AuthGuard) {}

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
