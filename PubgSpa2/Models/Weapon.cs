using System;
using System.Collections.Generic;

namespace PubgSpa2.Models
{
    public partial class Weapon
    {
        public long WeaponId { get; set; }
        public string Name { get; set; }
        public long WeaponTypeId { get; set; }
        public long? AmmoTypeId { get; set; }
        public long? Capacity { get; set; }
        public long? CapacityExtended { get; set; }
        public double? BaseDamage { get; set; }
        public long? Range { get; set; }
        public double? FireRate { get; set; }

        public AmmoType AmmoType { get; set; }
        public WeaponType WeaponType { get; set; }
    }
}
