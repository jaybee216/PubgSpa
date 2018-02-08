import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../weapon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WeaponService } from '../weapon.service';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.css']
})
export class WeaponDetailComponent implements OnInit {
  @Input() weapon: Weapon;

  constructor(
    private route: ActivatedRoute,
    private weaponService: WeaponService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getWeapon();
  }

  getWeapon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.weaponService.getWeapon(id)
      .subscribe(weapon => this.weapon = weapon);
  }

}
