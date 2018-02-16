import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { WeaponService } from './weapon.service';
import { HitAreaService } from './hit-area.service';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WeaponClassesComponent } from './weapon-classes/weapon-classes.component';
import { WeaponClassDetailComponent } from './weapon-class-detail/weapon-class-detail.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ArmorSelectionComponent } from './armor-selection/armor-selection.component';
import { HitAreaSelectionComponent } from './hit-area-selection/hit-area-selection.component';
import { WeaponSelectionService } from './weapon-selection.service';
import { ArmorService } from './armor.service';

@NgModule({
  declarations: [
    AppComponent,
    WeaponsComponent,
    WeaponDetailComponent,
    WeaponClassesComponent,
    WeaponClassDetailComponent,
    CalculatorComponent,
    ArmorSelectionComponent,
    HitAreaSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeaponService,
    HitAreaService,
    MessageService,
    WeaponSelectionService,
    ArmorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
