import { Injectable } from '@angular/core';
import { Armor, Helmet } from './armor';
import { ARMORS, HELMETS } from './mock-armors';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable()
export class ArmorService {

  constructor(private messageService: MessageService) { }

  getArmors(): Observable<Armor[]> {
    return of(ARMORS)
      .pipe(
      tap(_ => this.log('retreived armors'))
      );
  }

  getHelmets(): Observable<Armor[]> {
    return of(HELMETS)
      .pipe(
      tap(_ => this.log('retreived helmets'))
      );
  }

  getArmor(name: string): Observable<Armor> {
    return of(ARMORS.find(a => a.name === name));
  }

  getHelmet(name: string): Observable<Helmet> {
    return of(HELMETS.find(a => a.name === name));
  }

  private log(message: string): void {
    this.messageService.log('ArmorService: ' + message);
  }
}
