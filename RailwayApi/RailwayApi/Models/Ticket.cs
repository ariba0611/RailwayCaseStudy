using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RailwayApi.Models
{
    public class Ticket
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Ticket_Id { get; set; }

       
        public int Res_Id { get; set; }
    
        public Double Amount { get; set; }

        public string PNR_NO { get; set; }
        public int Seat_No { get; set; }
        public string Transaction_Id { get; set; }

        public string DateOfJourney { get; set; }
    }
}
