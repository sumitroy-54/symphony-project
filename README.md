# Symphony AI Assignment

A React application which uses Google OAuth mechanism to login and display details in a React Table by accepting a .json file via selection or Drag & Drop.

## Installation and Setup Guidelines

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`    

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Information

  - The Project utlizes the Google SignIn to login a user.
  - Upon successful login the user is redirected to the upload file page.
  - The user then uploads a .json file using the Drag & Drag option (react-dropzone) and the details are displayed to the table using the pivot feature.
  - Currently the pivot is applied to first three columns.
  - The application reads only .json files containing array of objects.