using books.api.Models;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace books.api.Services.Repositories
{
    public interface IBookRepository : IRepository<Book, string>
    {
        IEnumerable<Book> GetBooksWithDescriptions(int id);
    }
}
