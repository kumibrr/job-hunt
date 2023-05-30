import { Injectable } from '@angular/core';
import { Observable, Subject, forkJoin, map, of } from 'rxjs';
import { UserService } from './user.service';

export type Hunt =
  | {
      id: number;
      startDate: Date;
      finished: true;
      endDate: Date;
    }
  | {
      id: number;
      startDate: Date;
      finished: false;
      endDate: never;
    };

@Injectable({
  providedIn: 'root',
})
export class HuntsService {
  hunts$: Observable<Hunt[]> = of([]);

  // private saveHunts = forkJoin([this.userService.user$, this.hunts$]).subscribe(
  //   ([user, hunts]) => {
  //     console.log('run save');
  //     localStorage.setItem(
  //       `hunts[${user.key}]`,
  //       window.btoa(JSON.stringify(hunts))
  //     );
  //   }
  // );

  constructor() {}

  addHunt(hunt: Hunt) {
    this.hunts$.pipe(map((hunts) => [...hunts, hunt]));
    console.log(hunt);
  }
}
