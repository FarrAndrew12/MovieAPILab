using Microsoft.AspNetCore.Mvc;
using MovieLab.Models;

namespace MovieLab.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        MoviesContext db = new MoviesContext();
        [HttpDelete("DeleteMovie/{Id}")]
        public string DeleteMovie (int id)
        {
            Movie m = db.Movies.Find(id);
            db.Movies.Remove(m);
            db.SaveChanges();
            return $"The Movie at id {id} has been deleted successfully";

        }
    }
}
