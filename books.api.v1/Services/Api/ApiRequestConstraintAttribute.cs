using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace books.api.Services.Api
{
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
    public class ApiRequestConstraintAttribute : ActionMethodSelectorAttribute
    {
        public string ValueName { get; private set; }
        public bool ValuePresent { get; private set; }
        public ApiRequestConstraintAttribute(string valueName, bool valuePresent)
        {
            this.ValueName = valueName;
            this.ValuePresent = valuePresent;
        }
        public override bool IsValidForRequest(RouteContext routeContext, ActionDescriptor action)
        {
            var value = routeContext.HttpContext.Request.Query[this.ValueName];
            if(this.ValuePresent)
            {
                return !StringValues.IsNullOrEmpty(value);
            }
            return StringValues.IsNullOrEmpty(value);
        }
    }
}
