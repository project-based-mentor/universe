using System;

namespace Api.Models
{
    /// <summary>
    /// ApiUser defitinion which is safe to send to the user
    /// </summary>
    public class ApiUser
    {
        public Guid? Id { get; set; }
        public string Name { get; set; }
        public DateTimeOffset? CreatedOn { get; set; }
        public DateTimeOffset? UpdatedOn { get; set; }
    }
}
