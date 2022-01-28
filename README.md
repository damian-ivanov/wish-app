# "Wish" app - share your Christmas wish with others and see how it is rated

Note: this is a SPA built for the ReactJS Softuni defence project.

## The idea
The purpose of this app is to allow users to share their Christmas wish(es) with other people and see how others rate it. Users have the ability to sort the wishes by date and by count of likes on the front (index) page - ascending and descending. In the details page of each wish you can see when it was submitted, how many likes does it have and also the list of users who liked it.

## User experience
### Not logged in users can
- open the app and see the list with Christmas wishes of the other people
- view the details on the wish: it's title, description and photo, date of submission, the email of the user who created it, the count of likes and the list of people who gave a like to this wish
- access the Log in, Registration and "Contact me" pages

### Logged in users can
- create a new wish (add a title, description and upload a photo)
- edit their wishes
- delete their wishes
- give and revoke their likes on other people's wishes
- access the "My profile" page where they can see their personal statistics: the total count of the wishes they have submitted and the count of received likes. On that page users can also see all their submitted wishes
- log out 

## Workflows

### Registration
Users can create a new account by clicking on the "Register" link located at the navigation bar. They need to use an unique email address which will serve as their username. They also need to enter and re-enter a password.

## Technology used
- ReactJS
- Firebase for authentication
- Firestore database




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
