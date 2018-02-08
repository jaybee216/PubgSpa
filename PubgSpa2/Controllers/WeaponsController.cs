using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PubgSpa2.Models;
using Microsoft.EntityFrameworkCore;

namespace PubgSpa2.Controllers
{
    [Route("api/[controller]")]
    public class WeaponsController : Controller
    {
        private readonly WeaponsContext _context;

        public WeaponsController(WeaponsContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("")]
        [ProducesResponseType(typeof(IEnumerable<DTO.WeaponDetails>), 200)]
        public async Task<IActionResult> Weapons(int? weaponTypeId = null)
        {
            var weapons = _context.Weapon
                .Include(w => w.WeaponType)
                .Include(w => w.AmmoType)
                .AsQueryable();

            if (weaponTypeId != null)
            {
                weapons = weapons.Where(w => w.WeaponTypeId == weaponTypeId);
            }

            var weaponsDto = await weapons.Select(w => new DTO.WeaponDetails
            {
                AmmoType = w.AmmoType.Name,
                AmmoTypeId = w.AmmoTypeId,
                BaseDamage = w.BaseDamage,
                Capacity = w.Capacity,
                CapacityExtended = w.CapacityExtended,
                FireRate = w.FireRate,
                Name = w.Name,
                Range = w.Range,
                WeaponId = w.WeaponId,
                WeaponType = w.WeaponType.Name,
                WeaponTypeId = w.WeaponTypeId
            }).ToListAsync();

            return Ok(weaponsDto);
        }

    [HttpGet]
    [Route("{id}")]
    [ProducesResponseType(typeof(DTO.WeaponDetails), 200)]
    public async Task<IActionResult> Weapon(long id)
    {
      var weapon = await _context.Weapon
          .Include(w => w.WeaponType)
          .Include(w => w.AmmoType)
          .FirstOrDefaultAsync(w => w.WeaponId == id);
      
      var weaponDto = new DTO.WeaponDetails
      {
        AmmoType = weapon.AmmoType.Name,
        AmmoTypeId = weapon.AmmoTypeId,
        BaseDamage = weapon.BaseDamage,
        Capacity = weapon.Capacity,
        CapacityExtended = weapon.CapacityExtended,
        FireRate = weapon.FireRate,
        Name = weapon.Name,
        Range = weapon.Range,
        WeaponId = weapon.WeaponId,
        WeaponType = weapon.WeaponType.Name,
        WeaponTypeId = weapon.WeaponTypeId
      };

      return Ok(weaponDto);
    }
  }
}
