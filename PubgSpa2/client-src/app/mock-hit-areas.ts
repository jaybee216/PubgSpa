import { HitArea } from './hit-area';

export const HITAREAS: HitArea[] = [
  { name: 'Head', hitModifier: 1, helmetProtected: true, armorProtected: false, isHead: true, isChest: false, isLimb: false },
  { name: 'Neck', hitModifier: 0.75, helmetProtected: true, armorProtected: false, isHead: true, isChest: false, isLimb: false },
  { name: 'Shoulder', hitModifier: 1, helmetProtected: false, armorProtected: true, isHead: false, isChest: true, isLimb: false },
  { name: 'Upper Chest', hitModifier: 1.1, helmetProtected: false, armorProtected: true, isHead: false, isChest: true, isLimb: false },
  { name: 'Lower Chest', hitModifier: 1, helmetProtected: false, armorProtected: true, isHead: false, isChest: true, isLimb: false },
  { name: 'Midsection', hitModifier: .9, helmetProtected: false, armorProtected: true, isHead: false, isChest: true, isLimb: false },
  { name: 'Waist', hitModifier: 1, helmetProtected: false, armorProtected: true, isHead: false, isChest: true, isLimb: false },
  { name: 'Upper Arm', hitModifier: 0.6, helmetProtected: false, armorProtected: false, isHead: false, isChest: false, isLimb: true },
  { name: 'Lower Arm', hitModifier: 0.5, helmetProtected: false, armorProtected: false, isHead: false, isChest: false, isLimb: true },
  { name: 'Hand', hitModifier: 0.3, helmetProtected: false, armorProtected: false, isHead: false, isChest: false, isLimb: true },
  { name: 'Upper Leg', hitModifier: 0.5, helmetProtected: false, armorProtected: false, isHead: false, isChest: false, isLimb: true },
  { name: 'Lower Leg', hitModifier: 0.5, helmetProtected: false, armorProtected: false, isHead: false, isChest: false, isLimb: true },
  { name: 'Foot', hitModifier: 0.3, helmetProtected: false, armorProtected: false, isHead: false, isChest: false, isLimb: true },
];
