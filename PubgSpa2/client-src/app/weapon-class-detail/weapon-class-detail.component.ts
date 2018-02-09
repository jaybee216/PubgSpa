import { Component, OnInit, Input } from '@angular/core';
import { WeaponClass } from '../weapon-class';

@Component({
  selector: 'app-weapon-class-detail',
  templateUrl: './weapon-class-detail.component.html',
  styleUrls: ['./weapon-class-detail.component.css']
})
export class WeaponClassDetailComponent implements OnInit {
  @Input() weaponClass: WeaponClass;

  constructor() { }

  ngOnInit() {
  }
}
