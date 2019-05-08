# Wishlist [![Build Status](https://travis-ci.org/sirkells/wishlist.svg?branch=master)](https://travis-ci.org/sirkells/wishlist)

> A web app that allows search and add items to your wishlist

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Docker](#docker)
* [CI/CD](#CI/CD)
* [Deployment](#deployment)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
Add more general information about project. What the purpose of the project is? Motivation?

## Screenshots
![Example screenshot](./img/screenshot.png)

## Technologies
* React - version 16.8.6
* Redux - version 4.0.1
* Jest -
* Enzyme - 
* Semantic UI - version 2.4.1
* Docker -
* TravisCI -


## Setup

To get the frontend running locally:

- Clone this repo
- cd into the cloned repo
- `yarn` to install all required dependencies
- `yarn start` to start the local server 
- `yarn test` to run tests

Local web server will use port 3000 

## Docker

To setup locally:
- Download [Docker](https://docs.docker.com/) if you dont have it
- Make sure Docker is running
- Clone this repo
- cd into the project
- run `docker-compose up` in your terminal to setup, build and run image. Tjis may take some time to complete
- When complete go to your localhost on port 8080



## CI/CD
To setup for CI/CD for production Travis
- Make sure your project is on github
- Create a [Travis](https://travis-ci.org/) account if you dont have one and follow the instructions
- The Travis config is on the .travis.yml file 
- Start build on Travis
https://docs.travis-ci.com/user/deployment/elasticbeanstalk/
https://aws.amazon.com/
## Deployment
To setup deployment to AWS Elastic Bean Stalk:

- Create an [AWS](https://aws.amazon.com/) account if you dont have one and follow instruction to setup ELasticbeanstalk application 

- before_deploy:
    docker build -t prod .
# deploy:
#   skip_cleanup: true
#   provider: elasticbeanstalk
#   access_key_id: $ACCESS_KEY_ID
#   secret_access_key:
#     secure: $SECRET_ACCESS_KEY
#   region: "us-east-2"
#   app: "wishlist"
#   env: "Wishlist-env"
#   bucket_name: "elasticbeanstalk-us-east-2-275017868740"


## Code Examples
Show examples of usage:
`put-your-code-here`

## Features
List of features ready and TODOs for future development
* Awesome feature 1
* Awesome feature 2
* Awesome feature 3

To-do list:
* Wow improvement to be done 1
* Wow improvement to be done 2

## Status
Project is: _in progress_, _finished_, _no longer continue_ and why?


```
$ cd ../lorem
$ npm install
$ npm start

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
