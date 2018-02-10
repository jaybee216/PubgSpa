import { Component, OnInit, Input } from '@angular/core';
import { WeaponClass } from '../weapon-class';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-weapon-class-detail',
  templateUrl: './weapon-class-detail.component.html',
  styleUrls: ['./weapon-class-detail.component.css']
})
export class WeaponClassDetailComponent implements OnInit {
  @Input() weaponClass: WeaponClass;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  private log(message: string): void {
    this.messageService.log('WeaponClassDetailComponent: ' + message);
  }
}
