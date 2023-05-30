import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hunt, HuntsService } from '../hunts.service';
import { Observable, forkJoin, map } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { ApplicationService } from '../application.service';
import { DateTime, Interval } from 'luxon';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  private huntId = Number(inject(ActivatedRoute).snapshot.paramMap.get('id'));
  private huntService = inject(HuntsService);
  private applicationService = inject(ApplicationService);

  hunt$: Observable<Hunt> = this.huntService.hunts$.pipe(
    map((hunts) => hunts.find((hunt) => hunt.id === this.huntId) as Hunt)
  );

  applications$ = forkJoin([
    this.hunt$,
    this.applicationService.applications$,
  ]).pipe(
    map(([hunt, applications]) =>
      applications.filter((application) =>
        Interval.fromDateTimes(
          hunt.startDate,
          hunt?.endDate ?? DateTime.now()
        ).contains(application.date)
      )
    )
  );
}
