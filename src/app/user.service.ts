import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  id: number;
  key: string;
  hasPhoto: true;
  photo: 'https://www.infojobs.net/candidato.foto?id_candidato=eecd09b6-0cd1-4d22-bbea-70ee5aa57e10';
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
    return this.http.get<User>('https://api.infojobs.net/api/6/candidate', {
      headers: {
        Host: '',
        Authorization: `Basic ${btoa(
          `${proccess.env.CLIENT_ID};${process.env.CLIENT_SECRET}`
        )}`,
      },
    });
  }
}
