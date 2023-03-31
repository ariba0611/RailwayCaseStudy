using Microsoft.EntityFrameworkCore;

namespace RailwayApi.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<TrainDetails> TrainDetails { get; set; }
        public DbSet<Ticket> Ticket { get; set; }
    }
}
