import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { noop, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  private userService = inject(UserService);
  private router = inject(Router);
  signIn() {
    this.userService
      .signIn()
      .pipe(tap(() => this.router.navigate(['/create-hunt'])))
      .subscribe(noop);
  }
}
