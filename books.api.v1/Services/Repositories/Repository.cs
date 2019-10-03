using books.api.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace books.api.Services.Repositories
{
    /// <summary>
    /// Implementation of the Generic Repository to allow objects to extend the class for the CRUD operations.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <typeparam name="TPrimaryKey"></typeparam>
    public class Repository<T, TPrimaryKey> : IRepository<T, TPrimaryKey> where T : IEntity<TPrimaryKey>
    {
        protected readonly IMongoCollection<T> _context;
        public Repository(AppDbContext context, string collection)
        {
            var c = context.DB() ?? throw new ArgumentNullException(nameof(context));
            _context = c.GetCollection<T>(collection);
        }

        public T SingleOrDefault(Expression<Func<T, bool>> predicate)
        {
            return _context.Find<T>(predicate).FirstOrDefault();
        }

        public IEnumerable<T> Find(Expression<Func<T, bool>> predicate)
        {
            return _context.Find<T>(predicate).ToList();
        }

        public T Get(string id)
        {
           return _context.Find<T>(e => e.Id == id).FirstOrDefault();
        }

        public IEnumerable<T> GetAll()
        {
            return _context.Find<T>(e => true).ToList();
        }

        public void Add(T entity)
        {
            _context.InsertOne(entity);
        }

        public void AddRange(IEnumerable<T> entities)
        {
            _context.InsertMany(entities);
        }

        public void Remove(T entity)
        {
            _context.DeleteOne(e => e.Id == entity.Id);
        }

        public void RemoveRange(IEnumerable<T> entities)
        {
            foreach(var item in entities)
            {
                _context.DeleteOne(e => e.Id == item.Id);
            }
            //_context.DeleteMany(e => foreach(var item in entities));
        }

        public void Remove(string id)
        {
            _context.DeleteOne(e => e.Id == id);
        }

        public void RemoveRange(IEnumerable<string> entities)
        {
            foreach (var item in entities)
            {
                _context.DeleteOne(e => e.Id == item);
            }
        }

        public void Update(string id, T entity)
        {
            _context.ReplaceOne(e => e.Id == id, entity);
        }
    }
}
