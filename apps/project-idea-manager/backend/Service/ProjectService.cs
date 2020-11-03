using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Models;

namespace Service
{
    /// <summary>
    /// Responsible for all interactions with the database considering the Project model
    /// </summary>
    public class ProjectService : IProjectService
    {
        /// <summary>
        /// Static fake projects to enable local development against this api.
        /// Should be removed once we use a real database
        /// </summary>
        /// <typeparam name="ApiProject"></typeparam>
        /// <returns></returns>
        static private readonly List<ApiProject> _projects = new List<ApiProject>() {
            new ApiProject() {
                Id = Guid.NewGuid(),
                Name = "Project Manager",
                Description = "Manage and upvote cool project ideas",
                Author = new ApiUser() {
                    Id = Guid.NewGuid(),
                    Name = "Thomas",
                    CreatedOn = DateTimeOffset.UtcNow,
                    UpdatedOn = DateTimeOffset.UtcNow,
                },
                Comments = new List<ApiComment>() {
                    new ApiComment() {
                        Id = Guid.NewGuid(),
                        Body = "Great idea!",
                        CreatedOn = DateTimeOffset.UtcNow,
                        UpdatedOn = DateTimeOffset.UtcNow,
                        Author = new ApiUser() {
                            Id = Guid.NewGuid(),
                            Name = "Justin",
                            CreatedOn = DateTimeOffset.UtcNow,
                            UpdatedOn = DateTimeOffset.UtcNow,
                        },
                    },
                },
                CreatedOn = DateTimeOffset.UtcNow,
                UpdatedOn = DateTimeOffset.UtcNow,
            },
            new ApiProject() {
                Id = Guid.NewGuid(),
                Name = "Todo app",
                Description = "Organize your life by installing a kanban board on your fridge",
                Author = new ApiUser() {
                    Id = Guid.NewGuid(),
                    Name = "Justin",
                    CreatedOn = DateTimeOffset.UtcNow,
                    UpdatedOn = DateTimeOffset.UtcNow,
                },
                CreatedOn = DateTimeOffset.UtcNow,
                UpdatedOn = DateTimeOffset.UtcNow,
            }
        };

        /// <summary>
        /// Fetches the projects from the datasource
        /// </summary>
        /// <returns></returns>
        public Task<List<ApiProject>> GetProjectAsync()
        {
            return Task.FromResult(_projects);
        }
    }
}
