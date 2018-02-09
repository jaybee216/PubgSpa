using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PubgSpa2.DTO
{
  public class WeaponClass
  {
    public long WeaponClassId { get; set; }
    public string Name { get; set; }
    public double HeadModifier { get; set; }
    public double ChestModifier { get; set; }
    public double LimbModifier { get; set; }
  }
}
