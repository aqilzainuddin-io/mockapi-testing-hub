# MockAPI Testing Hub

## Project Overview
This project is a beginner-friendly API testing practice using [MockAPI](https://mockapi.io). 

It focuses on testing CRUD operations on the `/api/users` endpoint. 

Manual testing is done in Postman, and automation using JavaScript and Python will be added later.

## Testing Coverage
This project currently focuses on the **happy path (positive flow)** for API testing.  

Due to limitations of the free/public API used:
- Some features, including **negative testing** and **edge-case scenarios**, are not accessible in the free tier and are therefore not covered in this project.  
- Full coverage for these scenarios would require a paid subscription or access to a private API version.  

Despite this, the project demonstrates:
- Sending requests and validating successful responses  
- Data creation, retrieval, update, and deletion in the happy flow  
- Integration with Postman collections and environments

## Project Structure
```text
mockapi-testing-hub/
├── README.md
├── docs/
│   ├── assumptions.md
│   ├── limitations.md
│   ├── scope.md
│   ├── test-plan.md
│   └── manual-test-cases/
│       ├── get-users.md
│       ├── post-users.md
│       ├── put-users.md
│       ├── patch-users.md
│       └── delete-users.md
│
├── automation/
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   ├── jest.config.js
│   ├── README.md
│   └── src/
│       ├── config/
│       │   └── apiClient.js
│       └── tests/
│           ├── getUsers.test.js
│           ├── postUsers.test.js
│           ├── putUsers.test.js
│           ├── patchUsers.test.js
│           └── deleteUsers.test.js
```

- `docs/` → Documentation for test plan, scope, and assumptions.
- `manual-tests/` → Manual API test cases for each HTTP method.
- `postman/` → Postman collection.
- `automation/` → Future automation scripts.

## Tools Used
- [Postman](https://www.postman.com/) – for manual API testing
- [MockAPI](https://mockapi.io/) – test API backend
- Node.js + Axios + Jest – for future JS automation
- Python + Requests + Pytest – for future Python automation

## How to Use
1. Manual Tests:
   - Open Postman
   - Import the Postman collection in `postman/MockAPI.postman_collection.json`
   - Run the requests manually following test cases in `manual-tests/`

2. Automation (future):
   - JavaScript: `npm install`, then run tests using Jest
   - Python: install `requests` and `pytest`, then run test scripts


## Automation Testing (JavaScript: In Progress)
This project also includes API automation testing using JavaScript.

The automation tests are located in the `/automation` directory and are designed to automate selected happy-path CRUD test cases originally executed manually in Postman.

Tech stack:
- Node.js
- Axios
- Jest

Automation is introduced as a second phase of this project.
