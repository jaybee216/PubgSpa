using System;
using System.Collections.Generic;

namespace PubgSpa2.Models
{
    public partial class WeaponType
    {
        public WeaponType()
        {
            Weapon = new HashSet<Weapon>();
        }

        public long WeaponTypeId { get; set; }
        public string Name { get; set; }
        public double? HeadModifier { get; set; }
        public double? ChestModifier { get; set; }
        public double? LimbModifier { get; set; }

        public ICollection<Weapon> Weapon { get; set; }
    }
}
