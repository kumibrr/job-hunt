import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface User {
  id: number;
  key: string;
  hasPhoto: true;
  photo: string;
  name: string;
  surname1: string;
  surname2: string;
  validatedMail: 1;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signIn() {
    return this.http.post<User>(
      'http://localhost:3000/api/proxy',
      { url: '/6/candidate' },
      {
        headers: {
          Authorization: `Basic ${window.btoa(
            `${environment.client_id}:${environment.client_secret}`
          )}`,
        },
      }
    );
  }
}
