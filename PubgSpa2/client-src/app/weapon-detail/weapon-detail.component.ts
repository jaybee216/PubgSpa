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
  @Input() helmetModifier: number;
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
    if (changes.weapon && changes.weapon.currentValue) {
      console.log('weapon-detail component: weapon change detected:', changes.weapon.currentValue);
      this.calculateDamage();
      this.image = `../assets/${this.weapon.name}.png`;
    }
    if (changes.bodyPart && changes.bodyPart.currentValue) {
      console.log('weapon-detail component: bodyPart change detected:', changes.bodyPart.currentValue);
      this.calculateDamage();
    }
    if (changes.helmetModifier && changes.helmetModifier.currentValue) {
      console.log('weapon-detail component: helmetModifier change detected:', changes.helmetModifier.currentValue);
      this.calculateDamage();
    }
    if (changes.armorModifier && changes.armorModifier.currentValue) {
      console.log('weapon-detail component: armorModifier change detected:', changes.armorModifier.currentValue);
      this.calculateDamage();
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
    if (this.weapon) {
      console.log('calculateDamage(): ', [this.bodyPart, this.helmetModifier, this.armorModifier, this.weapon.baseDamage])

      var areaModifier: number = this.bodyPart === 'head' ? this.weapon.headModifier :
        this.bodyPart === 'chest' ? this.weapon.chestModifier : this.weapon.limbModifier;

      var armorModifier = this.bodyPart === 'head' ? this.helmetModifier :
        this.bodyPart === 'chest' ? this.armorModifier : 0.5 //approx. limb modifier;

      console.log('areaModifier, armorModifier: ', areaModifier, armorModifier);

      this.damage = this.weapon.baseDamage *
        areaModifier *
        armorModifier;

      this.hitsToKill = Math.ceil(100 / this.damage);

      this.timeToKill = this.hitsToKill * this.weapon.fireRate;
    }
  }
}
