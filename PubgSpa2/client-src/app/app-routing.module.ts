import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeaponsComponent } from './weapons/weapons.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { WeaponClassesComponent } from './weapon-classes/weapon-classes.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  { path: '', redirectTo: '/weapons', pathMatch: 'full' },
  { path: 'weapons', component: CalculatorComponent },
  { path: 'weapons/:id', component: WeaponDetailComponent }
];

@NgModule({
  imports: [
    //CommonModule -- don't need this in a routing module
    RouterModule.forRoot(routes)
  ],
  //declarations: [] -- don't need this in a routing module
  exports: [RouterModule]
})
export class AppRoutingModule { }
