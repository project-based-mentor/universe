using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Models;

namespace Service
{
    public class ProjectService : IProjectService
    {
        public Task<List<ApiProject>> GetProjectAsync()
        {
            return Task.FromResult(new List<ApiProject>());
        }
    }
}
