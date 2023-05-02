# Project 12 - Front-end Dashboard

This repo contains the front-end for the sports analytics dashboard SportSee.
To work, it must use the micro API found on this repo https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

## Technologies

- JS
- React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

- React-router-dom version: 6.10.0
- Styled-components version: 5.3.9
- Recharts version: 2.5.0
- Prop-types version: 15.8.1

## Authors

the front-end developer: Lucie

## Project

Project contains just one Route to the root of the project (scr/index.js).
The getData function is used for all API calls (scr/utils/services/api.js).
All API calls are centralized in the Context component (scr/utils/context/Context.jsx).
Here are the Recharts components used in the project :

- BarChart
- LineChart
- RadarChart
- PieChart

### Prerequisites

- [NodeJS ](https://nodejs.org/en/)
- Install and run the back-end API. (https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

You will find all the instructions to install and run the micro API in the Readme of its repo

### Launching the project

- Fork the repository
- Clone it on your computer.
- The `npm install` command will allow you to install the dependencies.
- The `npm start` command will allow you to run the app in the development mode.

### Endpoints

To display the dashboard of a user you need this url
http://localhost:3001/user/${userId}

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**
