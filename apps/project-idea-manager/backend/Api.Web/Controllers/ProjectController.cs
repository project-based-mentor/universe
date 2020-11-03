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
    /// <summary>
    /// Responsible for client requests towards /projects
    /// </summary>
    [ApiController]
    [Route("/projects")]
    public class ProjectController : ControllerBase
    {
        private readonly IProjectService _projectService;

        public ProjectController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        /// <summary>
        /// GET /projects
        /// gets all ApiProjects
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IEnumerable<ApiProject>> Get()
        {
            return await _projectService.GetProjectAsync().ConfigureAwait(false);
        }
    }
}
