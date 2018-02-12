import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HitArea } from '../hit-area';
import { HitAreaService } from '../hit-area.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hit-area-selection',
  templateUrl: './hit-area-selection.component.html',
  styleUrls: ['./hit-area-selection.component.css']
})
export class HitAreaSelectionComponent implements OnInit {
  @Output() onHitAreaSelected = new EventEmitter<HitArea>();

  selectedHitArea: HitArea;

  constructor(private hitAreaService: HitAreaService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.onSelectHitArea(null, 'head');
  }

  onSelectHitArea(event, name: string): void {
    this.log(`onSelectHitArea: ${name}`);
    if (event) {
      event.preventDefault();
    }
    this.getHitArea(name);
    this.onHitAreaSelected.emit(this.selectedHitArea);
  }

  getHitArea(name: string): void {
    this.hitAreaService.getHitArea(name)
      .subscribe(area => this.selectedHitArea = area);
  }

  private log(message: string): void {
    this.messageService.log('HitAreaSelectionComponent: ' + message);
  }
}
