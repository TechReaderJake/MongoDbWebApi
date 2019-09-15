using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using books.api.Models;
using books.api.Services;
using books.api.Services.Api;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace books.api.Controllers
{
    [Route("api/v1/[controller]")]
    //[Route("api/[controller]/[action]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly UnitOfWork _work;
        public BooksController(AppDbContext appdb)
        {
            _work = new UnitOfWork(appdb);
        }

        // GET: api/Books/5d7617ab1662733dd0d2927b
        [HttpGet("{id:length(24)}", Name = "GetById")]
        public ActionResult<Book> GetBook(string id)
        {
            return _work.Books.Get(id);
        }

        // GET: api/Books
        [HttpGet]
        public ActionResult<List<Book>> GetBooks()
        {
            return _work.Books.GetAll().ToList();
        }

        //// POST: api/Books
        //[HttpPost(Name = "AddBook")]
        //public IActionResult AddBook([FromBody] Book book)
        //{
        //    _work.Books.Add(book);
        //    return NoContent();
        //}

        // POST: api/Books
        [HttpPost(Name = "AddBooks")]
        public IActionResult AddBooks([FromBody] IEnumerable<Book> books)
        {
            _work.Books.AddRange(books);
            return NoContent();
        }

        // PUT: api/Books/5
        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, [FromBody] Book book)
        {
            return NoContent();
        }

        [HttpDelete(Name = "RemoveBook")]
        public IActionResult DeleteBook(Book rbook)
        {
            _work.Books.Remove(rbook);
            return NoContent();
        }

        [HttpDelete(Name = "RemoveBooks")]
        public IActionResult DeleteBooks(IEnumerable<Book> rbooks)
        {
            _work.Books.RemoveRange(rbooks);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult DeleteById(string id)
        {
            _work.Books.Remove(id);
            return NoContent();
        }

        //[HttpDelete]
        //public IActionResult Delete(IEnumerable<string> ids)
        //{
        //    _work.Books.RemoveRange(ids);
        //    return NoContent();
        //}
    }
}
