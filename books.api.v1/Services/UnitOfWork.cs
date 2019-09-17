 using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using books.api.Models;
using books.api.Services.Repositories;

namespace books.api.Services
{
    /// <summary>
    /// Implementation of the IUnitOfWork to use the AppDbContext
    /// and the Repositories created.
    /// </summary>
    public class UnitOfWork : IUnitOfWork
    {
        public IBookRepository Books { get; private set; }
        private AppDbContext _context { get; set; }

        public UnitOfWork(AppDbContext context)
        {
            _context = context;
            Books = new BookRepository(_context);
        }

        // Not Used Currently
        public int Complete()
        {
            throw new NotImplementedException();
        }

        // Not Used Currently
        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
