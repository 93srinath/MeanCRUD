import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    _id : '',
    username: '',
    email: '',
    password: ''
  };

  baseURL = 'http://localhost:3000/user/';
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  // HttpMethods
  postUser(user: User) {
    return this.http.post(this.baseURL + '/register', user, this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(this.baseURL + '/authenticate', authCredentials, this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(this.baseURL + '/userProfile');
  }


  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    const token = this.getToken();
    if (token) {
      const userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
  }}

  isLoggedIn() {
    const userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
     } else {
      return false;
  }}
}
