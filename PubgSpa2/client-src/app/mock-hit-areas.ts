import { HitArea } from './hit-area';

export const HITAREAS: HitArea[] = [
  { name: 'head', hitModifier: 1, helmetProtected: true, armorProtected: false, isHead: true, isChest: false, isLimb: false },
  { name: 'neck', hitModifier: 0.75, helmetProtected: true, armorProtected: false, isHead: true, isChest: false, isLimb: false },
  { name: 'shoulder', hitModifier: 1, helmetProtected: false, armorProtected: true, isHead: false, isChest: true, isLimb: false },
  { name: 'upper chest', hitModifier: 1.1, helmetProtected: false, armorProtected: true, isHead: false, isChest: true, isLimb: false },
  { name: 'lower chest', hitModifier: 1, helmetProtected: false, armorProtected: true, isHead: false, isChest: true, isLimb: false },
  { name: 'midsection', hitModifier: .9, helmetProtected: false, armorProtected: true, isHead: false, isChest: true, isLimb: false },
  { name: 'waist', hitModifier: 1, helmetProtected: false, armorProtected: true, isHead: false, isChest: true, isLimb: false },
  { name: 'upper arm', hitModifier: 0.6, helmetProtected: false, armorProtected: false, isHead: false, isChest: false, isLimb: true },
  { name: 'lower arm', hitModifier: 0.5, helmetProtected: false, armorProtected: false, isHead: false, isChest: false, isLimb: true },
  { name: 'hand', hitModifier: 0.3, helmetProtected: false, armorProtected: false, isHead: false, isChest: false, isLimb: true },
  { name: 'upper leg', hitModifier: 0.5, helmetProtected: false, armorProtected: false, isHead: false, isChest: false, isLimb: true },
  { name: 'lower leg', hitModifier: 0.5, helmetProtected: false, armorProtected: false, isHead: false, isChest: false, isLimb: true },
  { name: 'foot', hitModifier: 0.3, helmetProtected: false, armorProtected: false, isHead: false, isChest: false, isLimb: true },
];
