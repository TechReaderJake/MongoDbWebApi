using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace books.api.Services
{
    /// <summary>
    /// Interface to set up fields to get Database Settings from the JSON file.
    /// </summary>
    public interface IDatabaseSettings
    {
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
