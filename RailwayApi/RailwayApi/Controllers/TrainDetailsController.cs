using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RailwayApi.Models;

namespace RailwayApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainDetailsController : ControllerBase
    {
        private readonly DataContext _context;

        public TrainDetailsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/TrainDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrainDetails>>> GetTrainDetails()
        {
            return await _context.TrainDetails.ToListAsync();
        }

        // GET: api/TrainDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TrainDetails>> GetTrainDetails(int id)
        {
            var trainDetails = await _context.TrainDetails.FindAsync(id);

            if (trainDetails == null)
            {
                return NotFound();
            }

            return trainDetails;
        }

        // PUT: api/TrainDetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrainDetails(int id, TrainDetails trainDetails)
        {
            if (id != trainDetails.Train_Id)
            {
                return BadRequest();
            }

            _context.Entry(trainDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrainDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TrainDetail
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TrainDetails>> PostTrainDetails(TrainDetails trainDetails)
        {
            _context.TrainDetails.Add(trainDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrainDetails", new { id = trainDetails.Train_Id }, trainDetails);
        }

        // DELETE: api/TrainDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrainDetails(int id)
        {
            var trainDetails = await _context.TrainDetails.FindAsync(id);
            if (trainDetails == null)
            {
                return NotFound();
            }

            _context.TrainDetails.Remove(trainDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TrainDetailsExists(int id)
        {
            return _context.TrainDetails.Any(e => e.Train_Id == id);
        }
    }
}
