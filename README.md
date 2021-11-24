# Chat app

This example uses React, React-Redux, Redux-Saga and SocketIO.

## Design overview

### Flow

To enable real-time messaging, we are using a socket between the server and the clients. 
We also use a single HTTP call to retrieve all past messages.

### Structure

We use the smart/dumb component architecture. UI components are wrapped by Redux containers. These containers are connected directly to the redux store.
This creates a sharp separation between state and UI ("dumb" components can be reused in other context).

### Redux Saga

Redux Saga allows us to catch dispatched actions and handle them accordingly. It also allows us to handle socket events. 
Another important point - With the use of generators, Redux-saga allows us to write asynchronous code as if it is synchronous. 



[![Screen-Shot-2021-11-24-at-2-55-37-PM.png](https://i.postimg.cc/mkqkWLXN/Screen-Shot-2021-11-24-at-2-55-37-PM.png)](https://postimg.cc/JHNMbLWG)








## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
