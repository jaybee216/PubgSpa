using System;
using System.Collections.Generic;

namespace PubgSpa2.Models
{
    public partial class Helmet
    {
        public long HelmetId { get; set; }
        public long Level { get; set; }
        public double DamageModifier { get; set; }
        public long Durability { get; set; }
    }
}
