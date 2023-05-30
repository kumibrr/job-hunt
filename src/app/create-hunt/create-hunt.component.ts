import { Component, inject } from '@angular/core';
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
import { HuntsService } from '../hunts.service';
import { DateTime } from 'luxon';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-create-hunt',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent],
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
  huntService = inject(HuntsService);

  form = new FormGroup({
    start: new FormControl<string | null>(null, [Validators.required]),
    finished: new FormControl<boolean | null>(null, Validators.required),
    end: new FormControl<string | null>(null, [Validators.required]),
    name: new FormControl<string>('', Validators.required),
  });

  finished$ = this.form.controls.finished.valueChanges.pipe(
    tap(() => this.form.controls.end.reset())
  );

  submit() {
    const { end, finished, start, name } = this.form.value;
    if (typeof finished === 'boolean') {
      this.huntService.addHunt({
        id: new Date().getMilliseconds(),
        name: name!,
        endDate: end ? DateTime.fromISO(end) : undefined,
        finished: finished,
        startDate: DateTime.fromISO(start!),
      });
    }
  }
}
