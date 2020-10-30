using System;

namespace Api.Models
{
    public class ApiComment
    {
        public Guid Id { get; set; }
        public string Body { get; set; }
        public ApiUser Author { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public DateTimeOffset UpdatedOn { get; set; }
    }
}
