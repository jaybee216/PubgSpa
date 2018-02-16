import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../weapon';
import { WeaponClass } from '../weapon-class';
import { HitArea } from '../hit-area';
import { MessageService } from '../message.service';
import { WeaponSelectionService } from '../weapon-selection.service';
import { Subscription } from 'rxjs/Subscription';
import { WeaponService } from '../weapon.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  subscription: Subscription;

  weaponClass: WeaponClass;
  weapon: Weapon;
  hitArea: HitArea;
  helmetModifier: number;
  armorModifier: number;

  damage: number;
  hitsToKill: number;
  timeToKill: number;

  constructor(private messageService: MessageService,
              private weaponService: WeaponService,
              private weaponSelectionService: WeaponSelectionService) {
    this.subscription = weaponSelectionService.weaponSelected$.subscribe(
      weapon => {
        this.log(`subscription received: ${weapon.name}`);
        this.onWeaponSelected(weapon);
      }
    );
  }

  ngOnInit() {
    this.helmetModifier = 1;
    this.armorModifier = 1;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  onWeaponClassSelected(weaponClass: WeaponClass): void{
    if (weaponClass === null) {
      this.weaponClass = null;
      this.weapon = null;
      this.calculateDamage();
      return;
    }
    this.log(`onWeaponClassSelected: ${weaponClass.name}`);
    if (!this.weaponClass || this.weaponClass.weaponClassId != weaponClass.weaponClassId) {
      this.weaponClass = weaponClass;
    }
    if (!this.weapon || this.weapon.weaponClassId != weaponClass.weaponClassId) {
      this.weapon = null;
      this.calculateDamage();
    }
  }

  onWeaponSelected(weapon: Weapon): void {
    this.log(`onWeaponSelected: ${weapon.name}`);
    this.weapon = weapon;
    this.weaponService.getWeaponClass(weapon.weaponClassId)
      .subscribe(weaponClass => this.updateWeaponClass(weaponClass));
  }

  updateWeaponClass(weaponClass: WeaponClass) {
    this.weaponClass = weaponClass;
    this.log(`weaponClass: ${this.weaponClass.name} headmodifier: ${this.weaponClass.headModifier}`);
    this.calculateDamage();
  }

  onArmorSelected(modifier: number): void {
    this.log(`onArmorSelected: ${modifier}`);
    this.armorModifier = modifier;
    this.calculateDamage();
  }

  onHelmetSelected(modifier: number): void {
    this.log(`onHelmetSelected: ${modifier}`);
    this.helmetModifier = modifier;
    this.calculateDamage();
  }

  onHitAreaSelected(hitArea: HitArea): void {
    this.log(`onHitAreaSelected: ${hitArea.name}`);
    this.hitArea = hitArea;
    this.calculateDamage();
  }

  calculateDamage(): void {
    this.damage = null;
    if (this.weapon && this.hitArea) {
      this.log(`calculateDamage(): ${[this.hitArea.name, this.helmetModifier, this.armorModifier, this.weapon.baseDamage]}`)

      var areaModifier = this.hitArea.hitModifier;

      var weaponModifier = this.hitArea.isHead ? this.weapon.headModifier :
        this.hitArea.isChest ? this.weapon.chestModifier : this.weapon.limbModifier;

      var armorModifier = this.hitArea.helmetProtected ? this.helmetModifier :
        this.hitArea.armorProtected ? this.armorModifier : 1;

      this.log(`areaModifier: ${areaModifier}, armorModifier: ${armorModifier}`);

      this.damage = this.weapon.baseDamage *
        areaModifier *
        weaponModifier *
        armorModifier;

      this.hitsToKill = Math.ceil(100 / this.damage);

      this.timeToKill = this.hitsToKill * this.weapon.fireRate;
    }
  }

  private log(message: string): void {
    this.messageService.log('CalculatorComponent: ' + message);
  }
}
