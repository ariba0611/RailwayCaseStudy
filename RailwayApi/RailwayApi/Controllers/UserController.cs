using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using RailwayApi.Models;
using RailwayApi.Models.DAL;
using System.Net.Mail;
using System.Net;


namespace RailwayApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly IRailwayRepository<User> _userObj;

        public UserController(IConfiguration config, IRailwayRepository<User> userObj)
        {
            _config = config;
            _userObj = userObj;
        }
        [AllowAnonymous]
        [HttpPost("CreateUser")]
        public IActionResult Create(User user)
        {
            if(_userObj.GetModel().Where(x => x.Email == user.Email).FirstOrDefault()!= null)
            {
                return Ok("AlreadyExist");
            }
            user.RegistrationDate = DateTime.Now;
           

            try
            {
                MailMessage mm = new MailMessage("radhakrishna36495@gmail.com", user.Email);
     
                mm.Subject = "Welcome To Railway Reservation System";
                mm.Body = $"Username : {user.Email}\nPassword : {user.Password}\n\nHave a safe journey with us !\n\n\n\n\n\n\nThank You!!";
                mm.IsBodyHtml = false;
                SmtpClient smtp = new SmtpClient();
               
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.EnableSsl = true;

               
                NetworkCredential nc = new NetworkCredential("radhakrishna36495@gmail.com", "iufedzbfhqlpypdl");
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = nc;
                smtp.Send(mm);
            }
            catch (Exception ex)
              {
             
                var innerExceptionMessage = ex.InnerException != null ? ex.InnerException.Message : ex.Message;

                return StatusCode(500,innerExceptionMessage);
            }
           

            _userObj.InsertModel(user);
        

            _userObj.Save();

            return Ok("Success");
        
        
        }

       


        [AllowAnonymous]
        [HttpPost("LoginUser")]
        public IActionResult Login(Login user)
        {

            var CheckUser = _userObj.GetModel().Where(x => x.Email == user.Email && x.Password == user.Password).FirstOrDefault(); 
            if (CheckUser!=null)
            {
                return Ok(new JwtService(_config).GenerateToken(
                    CheckUser.User_Id.ToString(),
                    CheckUser.FirstName,
                    CheckUser.LastName,
                    CheckUser.Email,
                    CheckUser.Gender));
            }
            return Ok("Failure");

        }




    }
}
