"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var weapon_service_1 = require("./weapon.service");
describe('WeaponService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [weapon_service_1.WeaponService]
        });
    });
    it('should be created', testing_1.inject([weapon_service_1.WeaponService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=weapon.service.spec.js.map