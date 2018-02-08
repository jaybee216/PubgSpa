using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PubgSpa2.DTO
{
    public class WeaponDetails
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
        public string AmmoType { get; set; }
        public string WeaponType { get; set; }
    }
}
