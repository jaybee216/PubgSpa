import { Armor, Helmet } from './armor';

export const ARMORS: Armor[] = [
  { name: 'None', modifier: 1, imageName: 'Armor_0' },
  { name: 'Level 1', modifier: .7, imageName: 'Armor_1' },
  { name: 'Level 2', modifier: .6, imageName: 'Armor_2' },
  { name: 'Level 3', modifier: .45, imageName: 'Armor_3' }
];

export const HELMETS: Helmet[] = [
  { name: 'None', modifier: 1, imageName: 'Helmet_0' },
  { name: 'Level 1', modifier: .7, imageName: 'Helmet_1' },
  { name: 'Level 2', modifier: .6, imageName: 'Helmet_2' },
  { name: 'Level 3', modifier: .45, imageName: 'Helmet_3' }
];
