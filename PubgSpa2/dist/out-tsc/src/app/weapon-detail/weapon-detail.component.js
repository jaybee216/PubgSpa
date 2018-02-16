"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var weapon_1 = require("../weapon");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var weapon_service_1 = require("../weapon.service");
var WeaponDetailComponent = /** @class */ (function () {
    function WeaponDetailComponent(route, weaponService, location) {
        this.route = route;
        this.weaponService = weaponService;
        this.location = location;
    }
    WeaponDetailComponent.prototype.ngOnInit = function () {
        this.getWeapon();
    };
    WeaponDetailComponent.prototype.getWeapon = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.weaponService.getWeapon(id)
            .subscribe(function (weapon) { return _this.weapon = weapon; });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", weapon_1.Weapon)
    ], WeaponDetailComponent.prototype, "weapon", void 0);
    WeaponDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-weapon-detail',
            templateUrl: './weapon-detail.component.html',
            styleUrls: ['./weapon-detail.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            weapon_service_1.WeaponService,
            common_1.Location])
    ], WeaponDetailComponent);
    return WeaponDetailComponent;
}());
exports.WeaponDetailComponent = WeaponDetailComponent;
//# sourceMappingURL=weapon-detail.component.js.map