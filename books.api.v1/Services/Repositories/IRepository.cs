using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace books.api.Services.Repositories
{
    public interface IRepository<TEntity, TPrimaryKey> where TEntity : IEntity<TPrimaryKey>
    {
        TEntity Get(string id);
        IEnumerable<TEntity> GetAll();
        IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);

        TEntity SingleOrDefault(Expression<Func<TEntity, bool>> predicate);

        void Add(TEntity entity);
        void AddRange(IEnumerable<TEntity> entities);

        void Remove(TEntity entity);
        void RemoveRange(IEnumerable<TEntity> entities);
        void Remove(string id);
        void RemoveRange(IEnumerable<string> id);
    }
    public interface IEntity<out TKey>
    {
        string Id { get; }
    }
}
