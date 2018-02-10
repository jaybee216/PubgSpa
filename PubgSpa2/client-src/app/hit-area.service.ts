import { Injectable } from '@angular/core';
import { HitArea } from './hit-area';
import { HITAREAS } from './mock-hit-areas';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HitAreaService {

  constructor() { }

  getHitAreas(): Observable<HitArea[]> {
    return of(HITAREAS);
  }

  getHitArea(name: string): Observable<HitArea> {
    return of(HITAREAS.find(area => area.name === name));
  }
}
