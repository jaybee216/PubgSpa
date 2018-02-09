import { Component, OnInit } from '@angular/core';
import { WeaponClass } from '../weapon-class';
import { WeaponService } from '../weapon.service';

@Component({
  selector: 'app-weapon-classes',
  templateUrl: './weapon-classes.component.html',
  styleUrls: ['./weapon-classes.component.css']
})
export class WeaponClassesComponent implements OnInit {
  selectedClass: WeaponClass;
  selectedClassId: number;

  classes: WeaponClass[];

  constructor(private weaponService: WeaponService) { }

  ngOnInit() {
    this.getWeaponClasses();
  }

  getWeaponClasses(): void {
    this.weaponService.getWeaponClasses()
      .subscribe(classes => this.classes = classes);
  }

  onSelect(weaponClass: WeaponClass): void {
    this.selectedClass = weaponClass;
    this.selectedClassId = weaponClass.weaponClassId;
  }
}
