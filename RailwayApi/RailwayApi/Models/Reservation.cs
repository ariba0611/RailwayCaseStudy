using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RailwayApi.Models
{
    public class Reservation
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Res_Id { get; set; }
        public string Res_Name { get; set; }
        public string Res_Gender { get; set; }

        public virtual int User_Id { get; set; }


        public string QuotaType { get; set; }

        public string Res_Date { get; set; }

        public virtual int Train_Id { get; set; }
      
    }
}
