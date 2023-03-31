using Microsoft.EntityFrameworkCore;

namespace RailwayApi.Models.DAL
{
    public class RailwayRepository<T> : IRailwayRepository<T> where T : class
    {

        private readonly DataContext _context;
        private readonly DbSet<T> dbEntity;

        public RailwayRepository(DataContext context)
        {
            _context = context;
            dbEntity = _context.Set<T>();
        }
        public void DeleteModel(int ModelId)
        {
            T model = dbEntity.Find(ModelId);
            dbEntity.Remove(model);
        }

        public IEnumerable<T> GetModel()
        {
            return dbEntity.ToList();
        }

        public T GetModelByID(int ModelId)
        {
            return dbEntity.Find(ModelId);
        }

        public void InsertModel(T model)
        {
            dbEntity.Add(model);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void UpdateModel(T model)
        {
            _context.Entry(model).State = EntityState.Modified;
        }
    }
}
