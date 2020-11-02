using System;
using System.Collections.Generic;

namespace Api.Models
{
    public class ApiProject
    {
        public Guid? Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public IEnumerable<ApiComment> Comments { get; set; } = new List<ApiComment>();
        public ApiUser Author { get; set; }
        public DateTimeOffset? CreatedOn { get; set; }
        public DateTimeOffset? UpdatedOn { get; set; }
    }
}
