import { Weapon } from './weapon';
import { WeaponClass } from './weapon-class';

export const WEAPONS: Weapon[] = [
  {weaponId: 11, name: 'M16A4', ammoType: '5.56', weaponClass: 'AR', baseDamage: 44, capacity: 30, capacityExtended: 40, ammoTypeId: 1, chestModifier : 1, cleanName : 'M16A4', fireRate : 1, headModifier : 1, limbModifier : 1, range : 1, weaponClassId : 5},
  { weaponId: 11, name: 'M16A4', ammoType: '5.56', weaponClass: 'AR', baseDamage: 44, capacity: 30, capacityExtended: 40, ammoTypeId: 1, chestModifier: 1, cleanName: 'M16A4', fireRate: 1, headModifier: 1, limbModifier: 1, range: 1, weaponClassId: 5 },
  { weaponId: 11, name: 'M16A4', ammoType: '5.56', weaponClass: 'AR', baseDamage: 44, capacity: 30, capacityExtended: 40, ammoTypeId: 1, chestModifier: 1, cleanName: 'M16A4', fireRate: 1, headModifier: 1, limbModifier: 1, range: 1, weaponClassId: 5 },
  { weaponId: 11, name: 'M16A4', ammoType: '5.56', weaponClass: 'AR', baseDamage: 44, capacity: 30, capacityExtended: 40, ammoTypeId: 1, chestModifier: 1, cleanName: 'M16A4', fireRate: 1, headModifier: 1, limbModifier: 1, range: 1, weaponClassId: 5 },
  { weaponId: 11, name: 'M16A4', ammoType: '5.56', weaponClass: 'AR', baseDamage: 44, capacity: 30, capacityExtended: 40, ammoTypeId: 1, chestModifier: 1, cleanName: 'M16A4', fireRate: 1, headModifier: 1, limbModifier: 1, range: 1, weaponClassId: 5 },
  { weaponId: 11, name: 'M16A4', ammoType: '5.56', weaponClass: 'AR', baseDamage: 44, capacity: 30, capacityExtended: 40, ammoTypeId: 1, chestModifier: 1, cleanName: 'M16A4', fireRate: 1, headModifier: 1, limbModifier: 1, range: 1, weaponClassId: 5 }
];

export const WEAPONCLASSES: WeaponClass[] = [
  { weaponClassId : 1, name : 'AR', imageName : 'M16A4', limbModifier : 1, headModifier : 2, chestModifier : 1.5 },
  { weaponClassId: 1, name: 'SMG', imageName: 'M16A4', limbModifier: 1, headModifier: 2, chestModifier: 1.5 },
  { weaponClassId: 1, name: 'Shotgun', imageName: 'M16A4', limbModifier: 1, headModifier: 2, chestModifier: 1.5 },
  { weaponClassId: 1, name: 'Pistol', imageName: 'M16A4', limbModifier: 1, headModifier: 2, chestModifier: 1.5 }
]
