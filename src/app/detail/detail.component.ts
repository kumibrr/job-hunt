import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hunt, HuntsService } from '../hunts.service';
import { Observable, forkJoin, map } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { ApplicationService } from '../application.service';
import { DateTime, Interval } from 'luxon';
import { Chart } from 'chart.js';
import { SankeyController, Flow } from 'chartjs-chart-sankey';

Chart.register(SankeyController, Flow);

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements AfterViewInit {
  private huntId = Number(inject(ActivatedRoute).snapshot.paramMap.get('id'));
  private huntService = inject(HuntsService);
  private applicationService = inject(ApplicationService);
  @ViewChild('chart', { read: true }) ctx!: ElementRef;

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

  ngAfterViewInit(): void {
    console.log(this.ctx.nativeElement);
    new Chart(this.ctx.nativeElement, {
      data: {
        datasets: [
          {
            data: [
              { from: 'District heating', to: 'Industry', flow: 10.639 },
              {
                from: 'District heating',
                to: 'Heating and cooling - commercial',
                flow: 22.505,
              },
              {
                from: 'District heating',
                to: 'Heating and cooling - homes',
                flow: 46.184,
              },
              {
                from: 'Electricity grid',
                to: 'Over generation / exports',
                flow: 104.453,
              },
              {
                from: 'Electricity grid',
                to: 'Heating and cooling - homes',
                flow: 113.726,
              },
              { from: 'Electricity grid', to: 'H2 conversion', flow: 27.14 },
              { from: 'Electricity grid', to: 'Industry', flow: 342.165 },
              { from: 'Electricity grid', to: 'Road transport', flow: 37.797 },
              { from: 'Electricity grid', to: 'Agriculture', flow: 4.412 },
              {
                from: 'Electricity grid',
                to: 'Heating and cooling - commercial',
                flow: 40.858,
              },
              { from: 'Electricity grid', to: 'Losses', flow: 56.691 },
              { from: 'Electricity grid', to: 'Rail transport', flow: 7.863 },
              {
                from: 'Electricity grid',
                to: 'Lighting & appliances - commercial',
                flow: 90.008,
              },
              {
                from: 'Electricity grid',
                to: 'Lighting & appliances - homes',
                flow: 93.494,
              },
              {
                from: 'Pumped heat',
                to: 'Heating and cooling - homes',
                flow: 193.026,
              },
              {
                from: 'Pumped heat',
                to: 'Heating and cooling - commercial',
                flow: 70.672,
              },
              {
                from: 'Solar Thermal',
                to: 'Heating and cooling - homes',
                flow: 19.263,
              },
              { from: 'Solar', to: 'Solar Thermal', flow: 19.263 },
              { from: 'Solar', to: 'Solar PV', flow: 59.901 },
            ],
          },
        ],
      },
      type: 'sankey',
    });
  }
}
