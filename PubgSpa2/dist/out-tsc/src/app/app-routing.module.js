"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { CommonModule } from '@angular/common';
var router_1 = require("@angular/router");
var weapons_component_1 = require("./weapons/weapons.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var weapon_detail_component_1 = require("./weapon-detail/weapon-detail.component");
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'weapons', component: weapons_component_1.WeaponsComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'detail/:id', component: weapon_detail_component_1.WeaponDetailComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                //CommonModule don't need this in a routing module
                router_1.RouterModule.forRoot(routes)
            ],
            //declarations: [] don't need this in a routing module
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map