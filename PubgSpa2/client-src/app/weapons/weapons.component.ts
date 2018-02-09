import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Weapon } from '../weapon';
import { WeaponService } from '../weapon.service';
import { WeaponClass } from '../weapon-class';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit, OnChanges {
  //@Input() weaponClass: WeaponClass;
  @Input() weaponClassId: number;
  //private _weaponClassId: number;

  //@Input() set weaponClassId(value: number) {

  //  this._weaponClassId = value;
  //  this.getWeaponsByClass(value);

  //}

  //get weaponClassId(): number {

  //  return this._weaponClassId;

  //}

  selectedWeapon: Weapon;

  selectedBodyPart: string;

  selectedArmorModifier: number;

  weapons: Weapon[];

  constructor(private weaponService: WeaponService) { }

  ngOnInit() {
    console.log('onInit()');
    this.getWeapons();
    //this.selectedBodyPart = 'chest';
    //this.selectedArmorModifier = 0.4;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('weapons component: change detected:', changes.weaponClassId.currentValue);
    if (changes.weaponClassId.currentValue) {
      this.selectedWeapon = null;
      this.weapons = [];
      this.getWeaponsByClass(changes.weaponClassId.currentValue);
    }
  }

  getWeapons(): void {
    console.log('getWeapons()');
    this.weaponService.getWeapons()
      .subscribe(weapons => this.weapons = weapons);
  }

  getWeaponsByClass(weaponClassId: number): void {
    console.log('Retrieving weapons for classId:', weaponClassId);
    this.weaponService.getWeaponsByClass(weaponClassId)
      .subscribe(weapons => this.weapons = weapons);
  }

  onSelect(weapon: Weapon): void {
    this.selectedWeapon = weapon;
    this.selectedBodyPart = 'chest';
    this.selectedArmorModifier = 0.4;
  }
}
