using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Api.WebTest.Validators
{
    public class ProjectValidator : AbstractValidator<ProjectValidatorModel>
    {
         public ProjectValidator()
         {
            RuleFor(p => p.Name)
                .Cascade(CascadeMode.Stop)
                .NotEmpty()
                .Length(1, 50);

            RuleFor(p => p.Description)
                .Cascade(CascadeMode.Stop)
                .NotEmpty()
                .Length(0, 255);
         }
    }
}
