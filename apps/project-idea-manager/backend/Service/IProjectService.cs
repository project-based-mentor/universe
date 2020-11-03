using System.Collections.Generic;
using System.Collections;
using System.Threading.Tasks;
using Api.Models;

namespace Service
{
    public interface IProjectService
    {
         Task<List<ApiProject>> GetProjectAsync();
    }
}
