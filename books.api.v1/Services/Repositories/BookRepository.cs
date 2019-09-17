using books.api.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace books.api.Services.Repositories
{
    /// <summary>
    /// Implementation of the Book Repository and inheriting from the Generic Repository.
    /// </summary>
    public class BookRepository : Repository<Book, string>, IBookRepository
    {
        private const string BookCollection = "Books";
        public BookRepository(AppDbContext context) : base(context, BookCollection)
        {
            /* 
             * If it is the first time creating the collection uncomment line below this block comment.
             * This line below will eventually have an if the collection hasn't been created to create it and 
             * seed the database with generic information. 
            */

            //context.DB().CreateCollection(BookCollection);
        }
        public IEnumerable<Book> GetBooksWithDescriptions(int id)
        {
            return _context.Find(book => book.Description != "").ToList();
        }
    }
}
