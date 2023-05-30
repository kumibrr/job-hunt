import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-hunt-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './hunt-list.component.html',
  styleUrls: ['./hunt-list.component.css'],
})
export class HuntListComponent {}
