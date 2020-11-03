using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Api.Models;

namespace Api.WebTest.Validators
{
    public class ProjectValidator : AbstractValidator<ApiProject>
    {
         public ProjectValidator()
         {
            RuleFor(p => p.Name)
                .NotEmpty()
                .MaximumLength(50);

            RuleFor(p => p.Description)
                .NotEmpty()
                .MaximumLength(255);
         }
    }
}
