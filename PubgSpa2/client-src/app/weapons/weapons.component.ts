import { Component, OnInit, Input, Output, OnChanges, SimpleChange, SimpleChanges, EventEmitter } from '@angular/core';
import { Weapon } from '../weapon';
import { WeaponService } from '../weapon.service';
import { MessageService } from '../message.service';
import { WeaponClass } from '../weapon-class';
import { HitArea } from '../hit-area';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit, OnChanges {
  @Input() weaponClassId: number;
  @Output() onWeaponSelected = new EventEmitter<Weapon>();

  selectedWeapon: Weapon;
  
  weapons: Weapon[];

  constructor(private weaponService: WeaponService,
              private messageService: MessageService)
  { }

  ngOnInit() {
    this.log('onInit()');
    this.getWeapons();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.log(`change detected: , ${changes.weaponClassId.currentValue}`);
    if (changes.weaponClassId.currentValue) {
      this.selectedWeapon = null;
      this.weapons = [];
      this.getWeaponsByClass(changes.weaponClassId.currentValue);
    }
  }

  getWeapons(): void {
    this.log('getWeapons()');
    this.weaponService.getWeapons()
      .subscribe(weapons => this.weapons = weapons);
  }

  getWeaponsByClass(weaponClassId: number): void {
    this.log(`retrieving weapons for classId: ${weaponClassId}`);
    this.weaponService.getWeaponsByClass(weaponClassId)
      .subscribe(weapons => this.weapons = weapons);
  }

  onSelectWeapon(weapon: Weapon): void {
    this.log(`onSelectWeapon: ${weapon.name}`);
    this.selectedWeapon = weapon;
    this.onWeaponSelected.emit(weapon);
  }

  private log(message: string): void {
    this.messageService.log('WeaponsComponent: ' + message);
  }
}
