import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { WeaponService } from './weapon.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { WeaponClassesComponent } from './weapon-classes/weapon-classes.component';
import { WeaponClassDetailComponent } from './weapon-class-detail/weapon-class-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponsComponent,
    WeaponDetailComponent,
    MessagesComponent,
    DashboardComponent,
    WeaponClassesComponent,
    WeaponClassDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeaponService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
