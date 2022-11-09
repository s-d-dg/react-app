# Getting Started Coding Challenge App

## 1 Starting mock backend server
Please go to ./book-store-api
- run `npm install` to install all dependencies
- Serve it on the port 3000 by running `npm run start`

If you need more information read README.md in /book-store-api


## 2 Starting frontend application
Please go to ./coding-challenge
- run `npm install` to install all dependencies
- Serve it on the port 3005 by running `npm run start`

This application is written using React. 

If you need more information read README.md in /coding-challenge

## 3 Running unit tests
Please go to ./coding-challenge
- Make sure that all dependencies were installed earlier. If dependencies haven't been installed yet, please install them with `npm install`
- start test runner (jest) by running `npm run test`

## 4 Running Cypress tests
First make sure that you have running frontend application by doing steps from point 2. 
Backend is not required because tests contain mocks of responses from the backend.

Please go to ./integration-tests
- run `npm install` to install all dependencies
- start cypress by running `npm run e2e` and if you want to use watch mode then `npm run e2e:watch`


