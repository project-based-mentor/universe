An app to manage and discuss new project ideas which integrates with gitlab.

- [Features](#features)
- [Backend](#backend)
  - [Requirements](#requirements)
- [Frontend](#frontend)
  - [Requirements](#requirements-1)
  - [Getting started](#getting-started)
  - [Component driven development](#component-driven-development)
  - [Resources](#resources)

# Features

- show a list of ideas
- user login using gitlab accounts (https://docs.gitlab.com/ee/api/oauth2.html)
- submit ideas
- assign a codeowner for the project
- comment on ideas (and commnent on comments)
- like/upvote an idea
- categorize idea (frontend, c#, react, backend)

# Backend

## Requirements

- [dotnet core 3.1](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-3.1&tabs=visual-studio)


# Frontend

## Requirements

- [nodejs](https://nodejs.org/en/download/)

## Getting started
Open a terminal inside

```sh
cd apps/project-idea-manager/frontend
# Instal all dependencies (may take a few minutes)
npm install

# Start the application
npm start
```

## Component driven development
> Component-Driven Development (CDD) is a development methodology that anchors the build process around components. It is a process that builds UIs from the “bottom up” by starting at the level of components and ending at the level of pages or screens.
> https://www.chromatic.com/blog/component-driven-development/

Storybook makes development on the frontend a lot easier by enabling you to focus on all small components instead of the entire application.

```sh
# make sure your terminal is in the frontend directory
cd apps/project-idea-manager/frontend
# Run the storybook application
npm run storybook
```

Please click through the stories and feel free to create one yourself

## Resources

- https://elijahmanor.com/blog/cra-debug-vscode
- https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
- https://reactjs.org/docs/getting-started.html
- https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/
