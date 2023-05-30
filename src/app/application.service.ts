import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { Observable, of } from 'rxjs';

export interface Application {
  rejected: boolean;
  offerRemoved: boolean;
  processClosed: boolean;
  code: string;
  date: DateTime;
  lastEvent: ApplicationEvent;
  jobOffer: JobOffer;
}

export interface ApplicationEvent {
  tipoId: number;
  date: DateTime;
  description: string;
  finisher: boolean;
  rejectedReasons: string[];
}

export interface JobOffer {
  code: string;
  title: string;
  company: string;
  city: string;
  logoUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  applications$: Observable<Application[]> = of([
    {
      rejected: false,
      offerRemoved: false,
      processClosed: false,
      code: 'e9f3cde5-5058-4bcf-81d6-e7a3700fbd28',
      date: DateTime.fromJSDate(new Date('2023-05-16T09:59:09.000+0000')),
      lastEvent: {
        tipoId: 1,
        date: DateTime.fromJSDate(new Date('2023-05-16T09:59:09.000+0000')),
        description: 'Te has inscrito en la oferta',
        initializer: true,
        finisher: false,
        rejectedReasons: [],
      },
      jobOffer: {
        code: 'cc8923015d4b038a82708f346b1d76',
        title:
          'Beca InfoJobs Tech: 3 meses en Australia, ¡aprendiendo inglés con trabajo y todos los gastos pagados!',
        company: 'InfoJobs',
        city: 'Madrid',
        logoUrl:
          'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/f1/f1480efb-bf3e-4d4b-93f8-61c3e1a0770b?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTI0MDM3NTcsInJxcyI6IkdFVFxcL3RlbmFudHMvYzdlMmI5YzEtODQ4MC00M2IwLWFkOWUtMDAwYzE3YWEyY2JiL2RvbWFpbnMvNzE4MzAyYjYtNTM0My00M2QzLWE4YTMtODI5ZGMzZGEwODkzL2J1Y2tldHMvNmYzYWIxY2MtNTkyMC00ZjRlLWIxMzEtNDZhNDU4N2EwZTFmL2ltYWdlcy9mMS9mMTQ4MGVmYi1iZjNlLTRkNGItOTNmOC02MWMzZTFhMDc3MGIiLCJtZXRhZGF0YSI6eyJydWxlIjp7InZlcnNpb24iOiIyMDE2LTEwIiwiYWN0aW9ucyI6W119fX0.nsVS03BxbX9jAi1oN80dkshN8e900SS3JwyzH7Kh8yUaRWwM4w1biX4UIJRm1VrvRkHg0id_2lco9OGT57KDopQeE45aZTPRpv_nSMx5zsEoIwCnfcM_4_AOFLENW1In47s3_INtRFJrNo6nQ2bNO8gYcIxSh97kxWjEq2ANkq7Q1kyMUr9JSqj1wWzH7r380gkOvBYAVKTJtC-uGNMLX6oX5For_9EvOgIPPXETfRK_HVKjfpISn3HQ71wX2sHh_vS9VcMUZ6wUeLxZJV_CRf56nNP9OdlJ9lC7CKU3zM-aiqtUk2qcSeuIUK7RPXs73bEYfLBhh-D7Yje9ODeK4g&AccessKeyId=d724d9a53d95a810',
      },
    },
  ]);

  constructor() {}
}
