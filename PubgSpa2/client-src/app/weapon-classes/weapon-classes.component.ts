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
  @Output() onWeaponClassSelected = new EventEmitter<WeaponClass>();

  selectedClass: WeaponClass = null;
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

  getWeaponClass(id: number): void {
    this.weaponService.getWeaponClass(id)
      .subscribe(weaponClass => this.selectedClass = weaponClass);
  }

  onSelect(weaponClass: WeaponClass): void {
    if (weaponClass === null) {
      this.selectedClassId = 0;
      this.selectedClass = null;
      this.onWeaponClassSelected.emit(null);
    }
    else {
      this.log(`onSelect: ${weaponClass.name}`);
      this.selectedClass = weaponClass;
      this.selectedClassId = weaponClass.weaponClassId;
      this.onWeaponClassSelected.emit(weaponClass);
    }
  }

  private log(message: string): void {
    this.messageService.log('WeaponClassesComponent: ' + message);
  }
}
