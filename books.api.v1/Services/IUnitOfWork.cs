using books.api.Services.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace books.api.Services
{
    /// <summary>
    /// Allows usage of the IBookRepository and can be extend to other objects
    /// to be saved in the database.
    /// </summary>
    public interface IUnitOfWork : IDisposable
    {
        IBookRepository Books { get; }

        // Not Used Currently
        int Complete();
    }
}
