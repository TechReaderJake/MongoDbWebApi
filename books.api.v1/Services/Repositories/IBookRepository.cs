using books.api.Models;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace books.api.Services.Repositories
{
    /// <summary>
    /// Extends the generic CRUD Repository and 
    /// allows adding specific methods for the object that needs implemented.
    /// </summary>
    public interface IBookRepository : IRepository<Book, string>
    {
        IEnumerable<Book> GetBooksWithDescriptions(int id);
    }
}
