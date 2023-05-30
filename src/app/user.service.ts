import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface User {
  id: number;
  key: string;
  photo?: string;
  name: string;
  surname1: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signIn() {
    return of<User>({
      id: 123,
      key: '46d899kf-6b23-a2ee-b875-c8682cab231s',
      name: 'Miguel Ángel',
      surname1: 'Durán',
    });
  }
}
