# Talk About React

"Talk About React - Student Discussion Board" is a [reddit](https://www.reddit.com/) style discussion forum web app, for [Udacity’s React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) second project assignment, "Readable". Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Also, users will also be able to edit and delete posts and comments.

* This app was built with react, redux, [react-redux-router](https://github.com/reactjs/react-router-redux), [redux-thunk](https://github.com/gaearon/redux-thunk)

* Most application state(Create, Read, Edit, Delete, Voting posts/comments) is managed by the Redux store. Updates are triggered by dispatching actions to reducers.

## Quick Start
#### Run React App (Frontend)
* Clone project locally `git clone https://github.com/romanonatacha/readable-react-project.git`.
* Go to react app `cd readable`.
* Install all project dependencies with `npm install` in `readable` folder.
* Run server with `npm start`.
* Check console or browser if server runs on [http://localhost:3000/](http://localhost:3000/).


#### Run local backend development server (Node)
To install and start the API server, run the following commands in  `api-server` directory:

* Go to Server Directory `cd readable/src/api-server`.
* Install all server dependencies with `npm install`.
* Run backend server with `node server.js`.
* Check console or browser if server runs on [http://localhost:3001/](http://localhost:3001/).

### To build & deploy on firebase:
```
npm run build && npm run deploy
```

## Copyright and License 
* A project [starter server repository](https://github.com/udacity/reactnd-project-readable-starter) contributed by Udacity.
* The MIT License.