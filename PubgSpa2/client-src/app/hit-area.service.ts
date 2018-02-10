import { Injectable } from '@angular/core';
import { HitArea } from './hit-area';
import { HITAREAS } from './mock-hit-areas';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable()
export class HitAreaService {

  constructor(private messageService: MessageService) { }

  getHitAreas(): Observable<HitArea[]> {
    return of(HITAREAS)
      .pipe(
        tap(_ => this.log('retreived hit areas'))
      );
  }

  getHitArea(name: string): Observable<HitArea> {
    return of(HITAREAS.find(area => area.name === name))
      .pipe(
        tap(_ => this.log(`retreived hit area: ${name}`))
      );
  }

  private log(message: string): void {
    this.messageService.log('HitAreaService: ' + message);
  }
}
