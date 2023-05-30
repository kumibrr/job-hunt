import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { tap } from 'rxjs';

@Component({
  selector: 'app-create-hunt',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-hunt.component.html',
  styleUrls: ['./create-hunt.component.css'],
  animations: [
    trigger('inAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class CreateHuntComponent {
  form = new FormGroup({
    start: new FormControl<Date | null>(null, [Validators.required]),
    finished: new FormControl<Boolean | null>(null, Validators.required),
    end: new FormControl<Date | null>(null, [Validators.required]),
  });

  finished$ = this.form.controls.finished.valueChanges.pipe(
    tap(() => this.form.controls.end.reset())
  );
}
