import { Weapon } from './weapon';

export const WEAPONS: Weapon[] = [
  { weaponId: 11, name: 'M16', ammoType: '5.56', class: 'AR', baseDamage: 44 },
  { weaponId: 12, name: 'M416', ammoType: '5.56', class: 'AR', baseDamage: 44 },
  { weaponId: 13, name: 'AKM', ammoType: '7.62', class: 'AR', baseDamage: 49 },
  { weaponId: 14, name: 'M24', ammoType: '7.62', class: 'SR', baseDamage: 80 },
  { weaponId: 15, name: 'UMP-9', ammoType: '9mm', class: 'SMG', baseDamage: 30 },
  { weaponId: 16, name: 'Groza', ammoType: '7.62', class: 'AR', baseDamage: 49 }
];
