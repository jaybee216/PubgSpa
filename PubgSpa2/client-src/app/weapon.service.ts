import { Injectable } from '@angular/core';
import { Weapon } from './weapon';
import { WEAPONS } from './mock-weapons';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class WeaponService {

  constructor(private messageService:MessageService) { }

  getWeapons(): Observable<Weapon[]> {
    //TODO: send message after fetching weapons
    this.messageService.add('WeaponService: retrieved weapons')
    return of(WEAPONS);
  }

  getWeapon(id: number): Observable<Weapon> {
    this.messageService.add(`WeaponService: retrieved weapon id=${id}`);
    return of(WEAPONS.find(w => w.id === id));
  }
}
