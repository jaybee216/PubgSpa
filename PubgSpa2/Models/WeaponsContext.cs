using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PubgSpa2.Models
{
    public partial class WeaponsContext : DbContext
    {
        public virtual DbSet<AmmoType> AmmoType { get; set; }
        public virtual DbSet<Armor> Armor { get; set; }
        public virtual DbSet<Helmet> Helmet { get; set; }
        public virtual DbSet<Weapon> Weapon { get; set; }
        public virtual DbSet<WeaponType> WeaponType { get; set; }

        public WeaponsContext(DbContextOptions<WeaponsContext> options)
    : base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AmmoType>(entity =>
            {
                entity.Property(e => e.AmmoTypeId).ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("nvarchar(50)");
            });

            modelBuilder.Entity<Armor>(entity =>
            {
                entity.Property(e => e.ArmorId).ValueGeneratedNever();

                entity.Property(e => e.DamageModifier).HasColumnType("float");

                entity.Property(e => e.Durability).HasColumnType("int");

                entity.Property(e => e.Level).HasColumnType("int");
            });

            modelBuilder.Entity<Helmet>(entity =>
            {
                entity.Property(e => e.HelmetId).ValueGeneratedNever();

                entity.Property(e => e.DamageModifier).HasColumnType("float");

                entity.Property(e => e.Durability).HasColumnType("int");

                entity.Property(e => e.Level).HasColumnType("int");
            });

            modelBuilder.Entity<Weapon>(entity =>
            {
                entity.Property(e => e.WeaponId).ValueGeneratedNever();

                entity.Property(e => e.AmmoTypeId).HasColumnType("int");

                entity.Property(e => e.BaseDamage).HasColumnType("float");

                entity.Property(e => e.Capacity).HasColumnType("int");

                entity.Property(e => e.CapacityExtended).HasColumnType("int");

                entity.Property(e => e.FireRate).HasColumnType("float");

                entity.Property(e => e.Name).HasColumnType("nvarchar(50)");

                entity.Property(e => e.Range).HasColumnType("int");

                entity.Property(e => e.WeaponTypeId).HasColumnType("int");

                entity.HasOne(d => d.AmmoType)
                    .WithMany(p => p.Weapon)
                    .HasForeignKey(d => d.AmmoTypeId);

                entity.HasOne(d => d.WeaponType)
                    .WithMany(p => p.Weapon)
                    .HasForeignKey(d => d.WeaponTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<WeaponType>(entity =>
            {
                entity.Property(e => e.WeaponTypeId).ValueGeneratedNever();

                entity.Property(e => e.ChestModifier).HasColumnType("float");

                entity.Property(e => e.HeadModifier).HasColumnType("float");

                entity.Property(e => e.LimbModifier).HasColumnType("float");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("nvarchar(50)");
            });
        }
    }
}
