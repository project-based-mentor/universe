using NUnit.Framework;
using FluentValidation;
using FluentValidation.TestHelper;

namespace Api.WebTest.Validators
{
    [TestFixture]
    public class ProjectValidatorTest
    {
        [SetUp]
        public void Setup()
        {
            // validator = new ProjectValidator();
        }

        [Test]
        public void Should_have_error_when_Name_is_null()
        {
            Assert.Pass();
        }
    }
}
