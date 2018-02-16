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
var mock_weapons_1 = require("./mock-weapons");
var of_1 = require("rxjs/observable/of");
var message_service_1 = require("./message.service");
var WeaponService = /** @class */ (function () {
    function WeaponService(messageService) {
        this.messageService = messageService;
    }
    WeaponService.prototype.getWeapons = function () {
        //TODO: send message after fetching weapons
        this.messageService.add('WeaponService: retrieved weapons');
        return of_1.of(mock_weapons_1.WEAPONS);
    };
    WeaponService.prototype.getWeapon = function (id) {
        this.messageService.add("WeaponService: retrieved weapon id=" + id);
        return of_1.of(mock_weapons_1.WEAPONS.find(function (w) { return w.id === id; }));
    };
    WeaponService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], WeaponService);
    return WeaponService;
}());
exports.WeaponService = WeaponService;
//# sourceMappingURL=weapon.service.js.map