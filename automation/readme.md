# API Automation – MockAPI Testing Hub

This directory contains API automation tests written in JavaScript using Node.js, Axios, and Jest.

The automated tests focus on happy-path CRUD operations for the `/api/users` endpoint, aligned with the manual test cases documented in the main project.

## Tech Stack
- JavaScript (Node.js)
- Axios
- Jest

## How to Run
1. npm install
2. npm test


# Initialize Node Project
## 1. make sure node.js installed by running following command
```text
node -v
```
if it show version, proceed with number 2, if not install node first.
## 2. move to where you want to init
```text
mockapi-testing-hub/automation
```
## 3. run following command
```text
npm init -y
```
## 4. package.json will be created.
## 5. install jest (test runner)
```text
npm install --save-dev jest
```
## 6. install axios (HTTP client)
```text
npm install axios
```
## 7. install dotenv (environment variables)
```text
npm install dotenv
```
## 8. run the test
```text
npm test
```