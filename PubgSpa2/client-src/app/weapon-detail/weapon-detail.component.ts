import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Weapon } from '../weapon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WeaponService } from '../weapon.service';
import { HitArea } from '../hit-area';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.css']
})
export class WeaponDetailComponent implements OnInit, OnChanges {
  @Input() weapon: Weapon;
  
  image: string;

  constructor(
    private route: ActivatedRoute,
    private weaponService: WeaponService,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getWeapon();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.weapon && changes.weapon.currentValue) {
      this.log(`weapon change detected: ${changes.weapon.currentValue}`);
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

  private log(message: string): void {
    this.messageService.log('WeaponDetailComponent: ' + message);
  }
}
