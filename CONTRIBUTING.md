This guide is made for people seeking to contribute to this project. In perticular those which want to submit code.

- [Version control](#version-control)
  - [Commit messages](#commit-messages)
  - [Trunk based development](#trunk-based-development)
  - [Merge requests](#merge-requests)

# Version control
> enables collaboration by sharing bits and pieces of code at a time

We use a tool called git which enables us to share code between contributes. Make sure git is installed on your system by [downloading a binary for their website](https://git-scm.com/downloads).

You may want to use a graphical user interface instead of the command line interface application. We suggest installing [gitkraken](https://www.gitkraken.com/). Most editors like visual studio code and webstorm already has a user interface for git which may cover your needs.

## Commit messages
> a commit is a label given to a set of changes

Please read [this article](https://chris.beams.io/posts/git-commit/) about creating valuable git commit messages.
Quoting the above mentioned article, there are seven rules to create a good git commit message.

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

## Trunk based development
> A source-control branching model, where developers collaborate on code in a single branch called ‘trunk’ *, resist any pressure to create other long-lived development branches by employing documented techniques. They therefore avoid merge hell, do not break the build, and live happily ever after.
>
>\* master, in Git nomenclature
>
>source: https://trunkbaseddevelopment.com/#one-line-summary

In short, create new branch for your feature and when done, create a merge request to merge into the `master` branch.

## Merge requests
> enables code reviews before code is published

Whenever you've writen some code in a branch and want to publish this. Please create a merge request so the code can be reviewed.
[How to create a merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)

