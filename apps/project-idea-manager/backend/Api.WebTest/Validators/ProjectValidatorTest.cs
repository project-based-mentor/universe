using NUnit.Framework;
using FluentValidation;
using FluentValidation.TestHelper;
using FluentValidation.Results;
using System;
using Api.Models;

namespace Api.WebTest.Validators
{
    [TestFixture]
    public class ProjectValidatorTest
    {
        private ProjectValidator validator;

        [SetUp]
        public void Setup()
        {
            validator = new ProjectValidator();
        }
        [Test]
        public void Should_have_error_when_Name_is_null()
        {
            var model = new ApiProject { Name = null };
            var result = validator.TestValidate(model);
            result.ShouldHaveValidationErrorFor(p => p.Name);
        }

        [Test]
        public void Should_have_error_when_Description_is_null()
        {
            var model = new ApiProject { Description = null };
            var result = validator.TestValidate(model);
            result.ShouldHaveValidationErrorFor(p => p.Description);
        }

        [Test]
        public void Should_not_have_error_when_Name_is_specified()
        {
            var model = new ApiProject { Name = "ThomasIsCool" };
            var result = validator.TestValidate(model);
            result.ShouldNotHaveValidationErrorFor(p => p.Name);
        }

        [Test]
        public void Should_not_have_error_when_Description_is_specified()
        {
            var model = new ApiProject { Description = "The man who moves a mountain begins by carrying away small stones" };
            var result = validator.TestValidate(model);
            result.ShouldNotHaveValidationErrorFor(p => p.Description);
        }
    }
}
