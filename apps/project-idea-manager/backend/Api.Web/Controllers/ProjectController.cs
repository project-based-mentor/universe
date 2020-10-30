using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Api.Models;
using Service;

namespace Api.Web.Controllers
{
    [ApiController]
    [Route("/projects")]
    public class ProjectController : ControllerBase
    {
        private readonly IProjectService ProjectService;

        public ProjectController(IProjectService projectService)
        {
            ProjectService = projectService;
        }

        [HttpGet]
        public async Task<IEnumerable<ApiProject>> Get()
        {
            return await ProjectService.GetProjectAsync().ConfigureAwait(false);
        }
    }
}
