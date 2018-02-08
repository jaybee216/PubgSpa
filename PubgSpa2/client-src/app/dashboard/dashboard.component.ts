import { Component, OnInit } from '@angular/core';
import { Weapon } from '../weapon';
import { WeaponService } from '../weapon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  weapons: Weapon[] = [];

  constructor(private weaponService:WeaponService) { }

  ngOnInit() {
    this.getWeapons();
  }

  getWeapons(): void {
    this.weaponService.getWeapons()
      .subscribe(weapons => this.weapons = weapons.slice(1, 3));
  }
}
