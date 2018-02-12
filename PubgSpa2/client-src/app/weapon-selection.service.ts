import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Weapon } from './weapon';

@Injectable()
export class WeaponSelectionService {
  private weaponSelectedSource = new Subject<Weapon>();

  weaponSelected$ = this.weaponSelectedSource.asObservable();

  constructor() { }

  selectWeapon(weapon: Weapon) {
    this.weaponSelectedSource.next(weapon);
  }
}
