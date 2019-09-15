using books.api.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace books.api.Services.Repositories
{
    public class BookRepository : Repository<Book, string>, IBookRepository
    {
        private const string BookCollection = "Books";
        public BookRepository(AppDbContext context) : base(context, BookCollection)
        {
            //context.DB().CreateCollection(BookCollection);
        }
        public IEnumerable<Book> GetBooksWithDescriptions(int id)
        {
            return _context.Find(book => book.Description != "").ToList();
        }
    }
}
