import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeaponClass } from '../weapon-class';
import { WeaponService } from '../weapon.service';
import { Weapon } from '../weapon';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-weapon-classes',
  templateUrl: './weapon-classes.component.html',
  styleUrls: ['./weapon-classes.component.css']
})
export class WeaponClassesComponent implements OnInit {
  @Output() onWeaponSelectedByChild = new EventEmitter<Weapon>();

  selectedClass: WeaponClass;
  selectedClassId: number;

  classes: WeaponClass[];

  constructor(private weaponService: WeaponService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getWeaponClasses();
  }

  getWeaponClasses(): void {
    this.weaponService.getWeaponClasses()
      .subscribe(classes => this.classes = classes);
  }

  onSelect(weaponClass: WeaponClass): void {
    this.log(`onSelect: ${weaponClass.name}`);
    this.selectedClass = weaponClass;
    this.selectedClassId = weaponClass.weaponClassId;
  }

  onWeaponSelected(weapon: Weapon): void {
    this.log(`onWeaponSelected: ${weapon.name}`);
    this.onWeaponSelectedByChild.emit(weapon);
  }

  private log(message: string): void {
    this.messageService.log('WeaponClassesComponent: ' + message);
  }
}
