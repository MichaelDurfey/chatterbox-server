# React Chatterbox Client
In this sprint, you'll be re-making chatterbox-client, but this time in React (and from scratch)!

### High Level Goals of This Sprint
* Gain experience confronting a blank editor
* Get practice planning and architecting an application
* Improve researching and documentation parsing skills
* Avoid rabbit holes (this can easily happen when you're the one creating the task list!)
* Use some development tools that are currently industry best practice
* Level up your React skills


### Pro Tips
* As much as humanly possible, **do not** reference your old code. Looking at your old code might help you solve *this* problem faster, but it'll decelerate your problem solving skills. If possible, reference official documentation. If you're tempted to look at your old code, use the help desk or ask your peers instead!
* Sufficient planning will really help the development process - it's nearly impossible to over plan!
* Reading != planning, make sure that if you are reading, there is a *specific* question you are trying to answer. Stop reading once you've answered that question. Reading to "get familiar with" a technology is not a great idea.
* Building your app incrementally will be faster and more efficient than trying to build everything all at once. A common practice is to implement features with sample data before connecting to any APIs.

# Bare Minimum Requirements

## Setup
- [ ] Initialize npm (hint: look up `npm init`)
- [ ] Install any dependencies you'll need to get started (for example, react)
- [ ] Figure out how to install and setup webpack (you can use a [tutorial](https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr) for this if you'd like - the one linked is pretty solid, though be aware that tools and packages update frequently and so you might need to make a few tweaks - just read the error messages!) You'll have to use es2015's `import` and `export` syntax with webpack - it's worth taking a few minutes to read about this feature on MDN.
- [ ] Install [`eslint`](https://eslint.org/docs/user-guide/getting-started) globally using npm and then run `eslint --init` and choose "Popular Style Guide", then "AirBnB" - this style guide is an industry standard for writing React code! You're going to need to get used all the new rules - including a few that force some ES6 features. If you're curious about what any of the rules are, take a look at the [AirBnB github page](https://github.com/airbnb/javascript).
- [ ] Create a `.gitignore` to ignore any files you don't want to commit

## Planning
**This is a required part of the sprint!**

- [ ] Draw a wireframe of your application, determine which components you will make, and name all components
- [ ] Determine what properties will be on the state and the value types
- [ ] Draw a diagram showing the data flow among components (hint: what props will be passed to each component?)
- [ ] Explain these diagrams to a peer, then explain these diagrams to a staff member **before proceeding**
- [ ] Decide an order for implementing each feature/component - try to choose an sequence that allows you to check frequently that your code is working as intended!
- [ ] Make a task list that breaks down each feature/component into subtasks. This is great practice for when you will have to manage multiple engineers all trying to contribute to the same codebase. If you want to get really fancy, use github issues or trello to track your tasks and progress.

## Features
Implement the following features:  

- [ ] A feed of chat messages (from the PARSE API you used in chatterbox-client)
- [ ] The ability to set a username
- [ ] The ability to send a chat message
- [ ] Automatic refreshing of chat messages

# Advanced Content
*Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer. The following problems are no exception, and you may have to do a fair amount of work to get enough context to get started on the problem itself.*

- [ ] Make it so that you can use es2015+ features in your javascript code
- [ ] Make a fork of pomander and modify pomander to work with your new eslint config
- [ ] Set up a testing suite and write tests that ensure your core functionality is working as expected
- [ ] Implement additional features (with tests!)
    - [ ] Add rooms
    - [ ] Add a way to block certain users so that their messages are no longer seen
    - [ ] Message filter/search
    - [ ] Add some basic markdown parsing so that users can bold or underline
    - [ ] Add a giphy integration such that a user could add a random giphy to their message
- [ ] Add CSS so your app looks professional

# Nightmare Mode
- [ ] Learn redux and convert your application to use redux
- [ ] Learn react router and refactor your implementation of rooms to use it