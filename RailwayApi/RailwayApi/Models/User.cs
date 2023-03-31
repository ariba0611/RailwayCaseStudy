using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RailwayApi.Models
{
    public class User
    {
        #region Properties
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int User_Id { get; set; }
        public string FirstName { get; set; }
  
        public string LastName { get; set; }

        public string Email { get; set; }

        public string Gender { get; set; }
        public string Password { get; set; }

        public DateTime RegistrationDate { get; set; }
       

        #endregion
    }
}
