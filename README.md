# "Wish" app - share your Christmas wish with others and see how it is rated

Note: this is a SPA built for the ReactJS Softuni defence project.

## The idea
The purpose of this app is to allow users to share their Christmas wish(es) with other people and see how others rate it. Users have the ability to sort the wishes by date and by count of likes on the front (index) page - ascending and descending. In the details page of each wish you can see when it was submitted, how many likes does it have and also the list of users who liked it.

![index](https://user-images.githubusercontent.com/62560896/151846862-1ea1615a-cff6-443a-ae81-d82908b81bf8.png)


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

![register](https://user-images.githubusercontent.com/62560896/151846043-7162bc7a-85bd-4214-9701-d4042ff22ac9.png)

All fields are mandatory and both passwords should match.


### Login
Users can log in by clicking on the "Log in" link in the navigation at the top of the page. They will have to use their email and password they chose during the registration process.

![login](https://user-images.githubusercontent.com/62560896/151846905-2a9ee427-588c-4759-b9c6-20a29b7e2fd8.png)

All fields are mandatory.

### Creating a new wish
Logged in users can create a new wish by clicking on the "New wish" link at the navigation bar. They will have to enter a wish title, describe why they want the item, choose an image to upload and click on the checkbox to verify they were good last year :) 
Once all the information is entered - they can click on "Create" and the new wish will be entered in the database. The user will be taken to the index page.

![create](https://user-images.githubusercontent.com/62560896/151847107-7eb3d709-ccd5-411d-a6ed-a984826ad78d.png)

All fields and the checkbox are mandatory.


### Editing and deleting a wish
Logged in users will see an "Edit" and "Delete" buttons when they navigate to a wish that they have created. When they click on the "Edit" button they will see a preloaded form with the wish details. There they can edit the with title, description and upload a new image. Upon clicking on the "Save" button - the changes they did will be populated.
If they don't make any changes - the wish will be kept as it was.

![edit](https://user-images.githubusercontent.com/62560896/151847253-33479e98-076c-484d-9841-0c7ae9c0f627.png)


Clicking on the "Delete" button will reveal two new buttons on the right side - "Cancel" and "Confirm deletion". The buttons are intentionally moved to the right, so that the user can't accidentally click on "Confirm deletion".

![delete](https://user-images.githubusercontent.com/62560896/151847381-e74645da-aa91-4896-a3bd-99fc4de47c04.png)

Once they click on the "Confirm deletion" button - the wish will be removed from the database and the user will be taken to the index page.

### Giving and revoking a vote
Logged in users are able to give and revoke their vote to all wishes (including their own). They have to be on the wish details page in order to see the "Vote!" or "(revoke)" links. They can give only one vote per wish.
Upon clicking on the "Vote!" or "(revoke)" link - the request will be immediately populated in the database and also reflected in the app on the right side.

An anonymous user will see a "Log in to vote" link, instead of the "Vote!" link. When he clicks it he will be redirected to the "Login" page. When he enters his login details he will be automatically redirected to the wish where he attempted to vote. The status of the vote button will then depend on whether he has already voted or not.

### Misc
- if an anonymous user attempts to direcly access a URL for edit, vote, delete or "my profile" - he will be automatically redirected to the log in page
- if an user tries to access an URL for non-existing wish - he will see a message "No wish with this ID found!"
- if a user enters an invalid URL he will see a 404 page 
- if a user attempts to edit another user's wish by manually typing the wish ID in the URL - they will see a message "Ooops... it seems this is not your wish." and a link to go back to the wish details page.

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
