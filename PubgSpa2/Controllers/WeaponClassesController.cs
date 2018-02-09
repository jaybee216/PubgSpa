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
  public class WeaponClassesController : Controller
  {
    private readonly WeaponsContext _context;

    public WeaponClassesController(WeaponsContext context)
    {
      _context = context;
    }

    [HttpGet]
    [Route("")]
    [ProducesResponseType(typeof(IEnumerable<DTO.WeaponClass>), 200)]
    public async Task<IActionResult> WeaponClasses()
    {
      var classes = _context.WeaponType
      .AsQueryable();

      var classesDto = await classes.Select(c => new DTO.WeaponClass
      {
        WeaponClassId = c.WeaponTypeId,
        Name = c.Name,
        HeadModifier = c.HeadModifier ?? 1,
        ChestModifier = c.ChestModifier ?? 1,
        LimbModifier = c.LimbModifier ?? 1
      }).ToListAsync();

      return Ok(classesDto);
    }

    [HttpGet]
    [Route("{id}")]
    [ProducesResponseType(typeof(DTO.WeaponClass), 200)]
    public async Task<IActionResult> WeaponClass(long id)
    {
      var weaponClass = await _context.WeaponType
          .FirstOrDefaultAsync(w => w.WeaponTypeId == id);

      var weaponClassDto = new DTO.WeaponClass
      {
        Name = weaponClass.Name,
        WeaponClassId = weaponClass.WeaponTypeId
      };

      return Ok(weaponClassDto);
    }
  }
}
