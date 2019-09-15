using System;
using System.Runtime.Serialization;

namespace books.shared.Repository
{
    [Serializable]
    internal class HttpRequestExceptionEx : Exception
    {
        private object statusCode;
        private string jsonResult;

        public HttpRequestExceptionEx()
        {
        }

        public HttpRequestExceptionEx(string message) : base(message)
        {
        }

        public HttpRequestExceptionEx(object statusCode, string jsonResult)
        {
            this.statusCode = statusCode;
            this.jsonResult = jsonResult;
        }

        public HttpRequestExceptionEx(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected HttpRequestExceptionEx(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}