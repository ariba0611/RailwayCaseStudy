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

        // Foreign key   
       // [Display(Name = "User")]
        public virtual int User_Id { get; set; }

      /*  [ForeignKey("User_Id")]
        public virtual User Users { get; set; }
*/
        public string QuotaType { get; set; }

        public string Res_Date { get; set; }

      //  [Display(Name = "TrainDetails")]
        public virtual int Train_Id { get; set; }
/*
        [ForeignKey("User_Id")]

        public TrainDetails Trains { get; set; }
      */
      
    }
}
