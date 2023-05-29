import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { noop, tap } from 'rxjs';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  private userService = inject(UserService);
  signIn() {
    this.userService.signIn().pipe(tap(console.log)).subscribe(noop);
  }
}
