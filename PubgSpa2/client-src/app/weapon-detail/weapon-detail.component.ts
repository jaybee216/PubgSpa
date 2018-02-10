import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Weapon } from '../weapon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WeaponService } from '../weapon.service';
import { HitArea } from '../hit-area';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.css']
})
export class WeaponDetailComponent implements OnInit, OnChanges {
  @Input() weapon: Weapon;
 // @Input() bodyPart: string;
  @Input() helmetModifier: number;
  @Input() armorModifier: number;
  @Input() hitArea: HitArea;

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
    //if (changes.bodyPart && changes.bodyPart.currentValue) {
    //  console.log('weapon-detail component: bodyPart change detected:', changes.bodyPart.currentValue);
    //  this.calculateDamage();
    //}
    if (changes.hitArea && changes.hitArea.currentValue) {
      console.log('weapon-detail component: hitArea change detected:', changes.hitArea.currentValue);
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
    if (this.weapon && this.hitArea) {
      console.log('calculateDamage(): ', [this.hitArea, this.helmetModifier, this.armorModifier, this.weapon.baseDamage])

      var areaModifier = this.hitArea.hitModifier;

      var weaponModifier = this.hitArea.isHead ? this.weapon.headModifier :
        this.hitArea.isChest ? this.weapon.chestModifier : this.weapon.limbModifier;

      var armorModifier = this.hitArea.helmetProtected ? this.helmetModifier :
        this.hitArea.armorProtected ? this.armorModifier : 1;

      console.log('areaModifier, armorModifier: ', areaModifier, armorModifier);

      this.damage = this.weapon.baseDamage *
        areaModifier *
        weaponModifier *
        armorModifier;

      this.hitsToKill = Math.ceil(100 / this.damage);

      this.timeToKill = this.hitsToKill * this.weapon.fireRate;
    }
  }
}
