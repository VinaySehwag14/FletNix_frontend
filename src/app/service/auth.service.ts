import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'jwtToken';

  constructor(private http: HttpClient) { }

  apiurl = "https://fletnix.onrender.com/api/";

  login(user: User): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiurl}user/login`, user);
  }

  register(user: User): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiurl}user/register`, user);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey) ?? '';
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    // Check whether the token is expired and return
    return !!token; // returns true if token is not null or undefined
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}



interface User {
  email: string;
  password: string;
}

interface TokenResponse {
  token: string;
}
