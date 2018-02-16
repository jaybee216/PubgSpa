import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../message.service';
import { ArmorService } from '../armor.service';
import { Armor, Helmet } from '../armor';

@Component({
  selector: 'app-armor-selection',
  templateUrl: './armor-selection.component.html',
  styleUrls: ['./armor-selection.component.css']
})
export class ArmorSelectionComponent implements OnInit {
  @Output() onHelmetSelected = new EventEmitter<number>();
  @Output() onArmorSelected = new EventEmitter<number>();

  armors: Armor[];
  helmets: Helmet[];

  selectedHelmet: Helmet;
  selectedArmor: Armor;

  constructor(private messageService: MessageService,
              private armorService: ArmorService) { }

  ngOnInit() {
    this.log(`ngOnInit()`);
    this.getArmors();
    this.getHelmets();
    this.armorService.getArmor('None')
      .subscribe(armor => this.selectedArmor = armor);
    this.armorService.getHelmet('None')
      .subscribe(helmet => this.selectedHelmet = helmet);
  }

  getArmors(): void {
    this.armorService.getArmors()
      .subscribe(armors => this.armors = armors);
  }

  getHelmets(): void {
    this.armorService.getHelmets()
      .subscribe(helmets => this.helmets = helmets);
  }

  onSelectHelmet(helmet: Helmet): void {
    this.log(`onSelectHelmet: ${helmet.name}`);
    this.onHelmetSelected.emit(helmet.modifier);
    this.selectedHelmet = helmet;
  }

  onSelectArmor(armor: Armor): void {
    this.log(`onSelectArmor: ${armor.name}`);
    this.onArmorSelected.emit(armor.modifier);
    this.selectedArmor = armor;
  }

  private log(message: string): void {
    this.messageService.log('ArmorSelectionComponent: ' + message);
  }
}
