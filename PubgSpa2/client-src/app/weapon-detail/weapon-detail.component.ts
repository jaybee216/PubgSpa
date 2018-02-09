import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Weapon } from '../weapon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WeaponService } from '../weapon.service';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.css']
})
export class WeaponDetailComponent implements OnInit, OnChanges {
  @Input() weapon: Weapon;
  @Input() bodyPart: string;
  @Input() armorModifier: number;

  damage: number;
  hitsToKill: number;
  timeToKill: number;

  image: string;

  constructor(
    private route: ActivatedRoute,
    private weaponService: WeaponService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getWeapon();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('weapon-detail component: change detected:', changes.weapon.currentValue);
    if (changes.weapon.currentValue) {
      this.calculateDamage();
      this.image = `../assets/${this.weapon.name}.png`;
    }
  }

  getWeapon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.weaponService.getWeapon(id)
        .subscribe(weapon => this.weapon = weapon);
    }
  }

  calculateDamage(): void {
    console.log('calculateDamage(): ', [this.bodyPart, this.armorModifier, this.weapon.baseDamage])

    var areaModifier : number = this.bodyPart === 'head' ? this.weapon.headModifier :
      this.bodyPart === 'chest' ? this.weapon.chestModifier : this.weapon.limbModifier;

      this.damage = this.weapon.baseDamage *
        areaModifier *
      this.armorModifier;

      this.hitsToKill = Math.ceil(100 / this.damage);

      this.timeToKill = this.hitsToKill * this.weapon.fireRate;
  }
}
