using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace books.api.Services.Repositories
{
    /// <summary>
    /// Generic Repository Interface. 
    /// Used to create generic CRUD operations for different objects.
    /// Eventually will add asyncronous calls.
    /// </summary>
    /// <typeparam name="TEntity"></typeparam>
    /// <typeparam name="TPrimaryKey"></typeparam>
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

        void Update(string id, TEntity entity);
    }

    /// <summary>
    /// Interface used to allow usage of the Id field in our Generic Repository.
    /// </summary>
    /// <typeparam name="TKey"></typeparam>
    public interface IEntity<out TKey>
    {
        string Id { get; }
    }
}
