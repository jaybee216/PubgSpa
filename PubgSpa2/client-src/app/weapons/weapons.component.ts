import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Weapon } from '../weapon';
import { WeaponService } from '../weapon.service';
import { HitAreaService } from '../hit-area.service';
import { WeaponClass } from '../weapon-class';
import { HitArea } from '../hit-area';

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

  selectedHitArea: HitArea;

  selectedHelmetModifier: number;

  selectedArmorModifier: number;

  weapons: Weapon[];

  constructor(private weaponService: WeaponService,
              private hitAreaService: HitAreaService)
  { }

  ngOnInit() {
    console.log('onInit()');
    this.getWeapons();
    this.selectedHitArea = {name: 'head', hitModifier: 1, helmetProtected: true, armorProtected: false, isHead: true, isChest: false, isLimb: false };
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

  onSelectHitArea(event, name: string): void {
    console.log('onSelectHitArea:', event, name);
    event.preventDefault();
    this.getHitArea(name);
  }

  getHitArea(name: string): void {
    this.hitAreaService.getHitArea(name)
      .subscribe(area => this.selectedHitArea = area);
  }

  onSelectHelmet(modifier: number): void {
    this.selectedHelmetModifier = modifier;
  }

  onSelectArmor(modifier: number): void {
    this.selectedArmorModifier = modifier;
  }
}
