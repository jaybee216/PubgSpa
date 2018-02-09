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
  //TODO: rename to CalculatorComponent, factor WeaponsList into its own component

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

  selectedHelmetModifier: number;

  selectedArmorModifier: number;

  weapons: Weapon[];

  constructor(private weaponService: WeaponService) { }

  ngOnInit() {
    console.log('onInit()');
    this.getWeapons();
    this.selectedBodyPart = 'head';
    this.selectedHelmetModifier = 1;
    this.selectedArmorModifier = 1;
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

  onSelectWeapon(weapon: Weapon): void {
    this.selectedWeapon = weapon;
  }

  onSelectBodyPart(bodyPart: string): void {
    this.selectedBodyPart = bodyPart;
  }

  onSelectHelmet(modifier: number): void {
    this.selectedHelmetModifier = modifier;
  }

  onSelectArmor(modifier: number): void {
    this.selectedArmorModifier = modifier;
  }
}
