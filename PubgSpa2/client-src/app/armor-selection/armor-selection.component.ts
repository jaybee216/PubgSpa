import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-armor-selection',
  templateUrl: './armor-selection.component.html',
  styleUrls: ['./armor-selection.component.css']
})
export class ArmorSelectionComponent implements OnInit {
  @Output() onHelmetSelected = new EventEmitter<number>();
  @Output() onArmorSelected = new EventEmitter<number>();

  selectedHelmetModifier: number;
  selectedArmorModifier: number;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.log(`ngOnInit()`);
    this.selectedHelmetModifier = 1;
    this.selectedArmorModifier = 1;
  }

  onSelectHelmet(modifier: number): void {
    this.log(`onSelectHelmet: ${modifier}`);
    this.onHelmetSelected.emit(modifier);
    this.selectedHelmetModifier = modifier;
  }

  onSelectArmor(modifier: number): void {
    this.log(`onSelectArmor: ${modifier}`);
    this.onArmorSelected.emit(modifier);
    this.selectedArmorModifier = modifier;
  }

  private log(message: string): void {
    this.messageService.log('ArmorSelectionComponent: ' + message);
  }
}
