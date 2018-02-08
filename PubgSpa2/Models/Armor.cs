using System;
using System.Collections.Generic;

namespace PubgSpa2.Models
{
    public partial class Armor
    {
        public long ArmorId { get; set; }
        public long Level { get; set; }
        public double DamageModifier { get; set; }
        public long Durability { get; set; }
    }
}
