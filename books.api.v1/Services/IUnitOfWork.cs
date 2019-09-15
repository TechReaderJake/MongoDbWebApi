using books.api.Services.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace books.api.Services
{
    public interface IUnitOfWork : IDisposable
    {
        IBookRepository Books { get; }
        int Complete();
    }
}
