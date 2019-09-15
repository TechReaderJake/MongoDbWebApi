using books.api.Services.Repositories;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace books.api.Models
{
    public class Book : IEntity<string>
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("title")]
        public string Title { get; set; }
        [BsonElement("description")]
        public string Description { get; set; }
        [BsonElement("authors")]
        public string Authors { get; set; }
        [BsonElement("genre")]
        public string Genre { get; set; }

        //public string Publisher { get; set; }
        //public int Published { get; set; }
        [BsonElement("words")]
        public int Words { get; set; }
        [BsonElement("pages")]
        public int Pages { get; set; }
        [BsonElement("chapters")]
        public int Chapters { get; set; }
        [BsonElement("created")]
        public DateTime Created { get; set; }
        [BsonElement("modified")]
        public DateTime Modified { get; set; }

    }
}
