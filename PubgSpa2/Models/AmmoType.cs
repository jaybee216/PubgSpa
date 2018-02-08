using System;
using System.Collections.Generic;

namespace PubgSpa2.Models
{
    public partial class AmmoType
    {
        public AmmoType()
        {
            Weapon = new HashSet<Weapon>();
        }

        public long AmmoTypeId { get; set; }
        public string Name { get; set; }

        public ICollection<Weapon> Weapon { get; set; }
    }
}
