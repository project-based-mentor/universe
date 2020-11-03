using NUnit.Framework;
using FluentValidation;
using FluentValidation.TestHelper;
using FluentValidation.Results;
using System;

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
            var model = new ProjectValidatorModel { Name = null };
            var result = validator.TestValidate(model);
            result.ShouldHaveValidationErrorFor(p => p.Name);

 //           Assert.Pass();
        }
    }
}
