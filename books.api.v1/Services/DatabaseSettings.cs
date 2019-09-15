using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace books.api.Services
{
    public class DatabaseSettings : IDatabaseSettings
    {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
