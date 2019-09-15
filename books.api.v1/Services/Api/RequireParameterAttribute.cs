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
    public class RequireParameterAttribute : ActionMethodSelectorAttribute
    {
        public RequireParameterAttribute(string parameterName) : this(new[] { parameterName })
        {
        }

        public RequireParameterAttribute(params string[] parameterNames)
        {
            ParameterNames = parameterNames;
            IncludeGET = true;
            IncludePOST = true;
            IncludeCookies = false;
            Mode = MatchMode.All;
        }

        public override bool IsValidForRequest(RouteContext routeContext, ActionDescriptor action)
        {
            switch (Mode)
            {
                case MatchMode.All:
                default:
                    return (
                        (IncludeGET && ParameterNames.All(p => routeContext.RouteData.Values.Keys.Contains(p)))
                        || (IncludePOST && ParameterNames.All(p => routeContext.RouteData.Values.Keys.Contains(p))))
                        || (IncludeCookies && ParameterNames.All(p => routeContext.RouteData.Values.Keys.Contains(p))
                        );
                case MatchMode.Any:
                    return (
                        (IncludeGET && ParameterNames.Any(p => routeContext.RouteData.Values.Keys.Contains(p))))
                        || (IncludePOST && ParameterNames.Any(p => routeContext.RouteData.Values.Keys.Contains(p)))
                        || (IncludeCookies && ParameterNames.Any(p => routeContext.RouteData.Values.Keys.Contains(p))
                        );
                case MatchMode.None:
                    return (
                        (!IncludeGET || !ParameterNames.Any(p => routeContext.RouteData.Values.Keys.Contains(p))))
                        && (!IncludePOST || !ParameterNames.Any(p => routeContext.RouteData.Values.Keys.Contains(p)))
                        && (!IncludeCookies || !ParameterNames.Any(p => routeContext.RouteData.Values.Keys.Contains(p))
                        );
            }
        }

        public string[] ParameterNames { get; private set; }

        /// <summary>
        /// Set it to TRUE to include GET (QueryStirng) parameters, FALSE to exclude them:
        /// default is TRUE.
        /// </summary>
        public bool IncludeGET { get; set; }

        /// <summary>
        /// Set it to TRUE to include POST (Form) parameters, FALSE to exclude them:
        /// default is TRUE.
        /// </summary>
        public bool IncludePOST { get; set; }

        /// <summary>
        /// Set it to TRUE to include parameters from Cookies, FALSE to exclude them:
        /// default is FALSE.
        /// </summary>
        public bool IncludeCookies { get; set; }

        /// <summary>
        /// Use MatchMode.All to invalidate the method unless all the given parameters are set (default).
        /// Use MatchMode.Any to invalidate the method unless any of the given parameters is set.
        /// Use MatchMode.None to invalidate the method unless none of the given parameters is set.
        /// </summary>
        public MatchMode Mode { get; set; }

        public enum MatchMode : int
        {
            All,
            Any,
            None
        }
    }
}
