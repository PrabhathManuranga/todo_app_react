<h1 style="text-align:center;">
Todo App
</h1>

<p style="text-align:center;">
   <img src="readmeAssets/TodoApp_softwareBox.png" alt="Todo App software box picture" title="Todo App by Piotr Otta" height="320" />
</p>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)


## Table Of Content

- [About](#about)
- [Features](#features)
- [Libraries used](#libraries-used)
  - [Production dependencies](#production-dependencies)
  - [Development dependencies](#development-dependencies)
- [Instalation](#installation)
- [Usage](#usage)
- [Accessibility](#accessibility)

## About

A very small Todo app built entirely with **React 19.0.0** and powered by **Zustand** state manager v5.0.3. App created for learning purposes.

<p>
<img src="readmeAssets/readme_photo.png" alt="Todo App showcase" title="Todo App showcase" width="400" />
</p>

## Features

- **Create tasks**: Add tasks with a title and completed state.

<p>
<img src="readmeAssets/readme_add.gif" alt="Todo App feature showcase - add task" title="Todo App feature showcase - add task" width="400" />
</p>

- **Delete tasks**: Remove tasks from the list.

<p>
<img src="readmeAssets/readme_delete.gif" alt="Todo App feature showcase - delete task" title="Todo App feature showcase - delete task" width="400" />
</p>

- **Edit tasks**: Modify the title of existing tasks.

<p>
<img src="readmeAssets/readme_edit.gif" alt="Todo App feature showcase - edit task" title="Todo App feature showcase - edit task" width="400" />
</p>

- **Toggle completion of the tasks**: Mark tasks as completed or revert them to incomplete.

<p>
<img src="readmeAssets/readme_toggle.gif" alt="Todo App feature showcase - toggle task completion" title="Todo App feature showcase - toggle task completion" width="400" />
</p>

- **Keyboard friendly**: Navigate the entire app using only the keyboard (tabs, space/enter to interact with buttons and inputs).

<p>
<img src="readmeAssets/readme_keyboard.gif" alt="Todo App feature showcase - keyboard accessibility" title="Todo App feature showcase - keyboard accessibility" width="400" />
</p>

## Libraries Used

### Production Dependencies
- **React 19.0.0**: core library for building the app,
- **Zustand 5.0.3**: state management,
- **uuid**: generate unique IDs for tasks.

### Development Dependencies
- **ESLint**: linting and errors,
- **Prettier**: code formatting,
- **web-vitals**: measure performance (comes bundled with **React**).

## Installation

1. If you don't have Node.js installed or if your current version is not compatible, please install Node.js **v20.17.0** from the [NodeJS website](https://nodejs.org/) or via **NVM** (**N**ode **V**ersion **M**anager). 

2. Clone the repository:
   ```bash
   git clone https://github.com/PiotrOtta/todo_app_react.git
   ```
3. Navigate to the project directory:
   ```bash
   cd todo_app_react
   ```
4. Install dependencies:
   ```bash
   npm install
   ```


## Usage

1. Start the development server:
   ```bash
   npm dev
   ```
   or 
   ```bash
   npm start
   ```
2. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Accessibility

This app is fully accessible for keyboard users.
- Use **Tab** to navigate through the app.
- Use **Space** or **Enter** to interact with buttons and inputs.

