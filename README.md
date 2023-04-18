# TOP-todo-list

A standard todo list. The user can create todo items and put them into a "projects" list. Todos are created as objects within an array of a project folder. Users can create new projects and choose which created todo items go into which project. Through clicking there is the ability to sort todos by all todos, todos with a date of today, todos with a date within the next week, and also todos of user-created projects individually. Todos can be deleted with the respective button, as well as projects. Todos can be edited, and while using a mobile device this also functions as a way to see the details of a todo, due to trimming down the todo elements to fit mobile resolutions. There's a hamburger menu to help with information presentation on mobile. Local storage has also been implemented, so refreshing the page should keep user-inputed data, resetting upon clearing of browser cache.

## Built With 

- JavaScript
- HTML
- CSS
- Webpack
- npm

## Live Demo
[Todo List](https://bykimus-prime.github.io/TOP-todo-list/)

## Getting Started

In order to setup and work on this project on your own, you will need to:

1. Clone this project:  
`git clone https://github.com/bykimus-prime/TOP-todo-list.git`

2. Once you have cloned this project, you need to install npm and webpack. The required dependencies are:  
`npm install webpack webpack-cli --save-dev`. This will create the needed node_modules file in your project directory.

3. The package.json should be configured so that distribution files can be produced using:  
`npm run build` or your preferred method.

4. I used date-fns for date manipulation in javascript and other handy functions. For webpack:
`npm install date-fns --save`

### Usage
##### There is a default project to add todos. The user can create more todos and put them here or create their own projects.
- **All Tasks** - Shows all todos across all projects, including default.
- **Today** - Shows all todos with a due date of today's date.
- **Week** - Shows all todos with a due date that is within the next 7 days.
- **Add New Project** - Creates a new project that the user can add todos into.
- **Add New Task** - Creates a new todo item.

## Deployed on GitHub Pages

Deployed on [GitHub Pages](https://pages.github.com/)

## Image Credits

- trash can icon by Icons8
- edit button icon by SVG Repo
- burger menu icon by SVG Repo