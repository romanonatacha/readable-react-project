React REdux Readable
===============================

## Description

Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Also, users will also be able to edit and delete posts and comments.

* This app was built with react, redux, [react-redux-router](https://github.com/reactjs/react-router-redux), [redux-thunk](https://github.com/gaearon/redux-thunk)

* Most application state(Create, Read, Edit, Delete, Voting posts/comments) is managed by the Redux store. Updates are triggered by dispatching actions to reducers.

## Run the Application localy

Clone this repository

```
git clone https://github.com/romanonatacha/redable-react-project.git
```

### Installing

Inside the project directory run

```
npm install
```

### Run the application

Start the application

```
npm start
```

### Run the server

Inside the project directory run

```
cd api-server
```

Run the server

```
node server.js
```

* With your server running, visit the site: http://localhost:3000

## Testing offline
The service worker is from the create-react-app and it only works in production mode, so you run
```
npm run build
```

 ## Authors

* **Natacha Romano** - [GitHub Account](https://github.com/romanonatacha)