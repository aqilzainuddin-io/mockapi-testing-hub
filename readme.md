# MockAPI Testing Hub

## Project Overview
This project is a beginner-friendly API testing practice using [MockAPI](https://mockapi.io). 

It focuses on testing CRUD operations on the `/api/users` endpoint. 

Manual testing is done in Postman, and automation using JavaScript and Python will be added later.

## Project Structure
```text
mockapi-testing/
├── README.md
├── docs/
├── manual-tests/
├── test-data/
├── postman/
└── automation/
```

- `docs/` → Documentation for test plan, scope, and assumptions.
- `manual-tests/` → Manual API test cases for each HTTP method.
- `test-data/` → Example JSON payloads for testing.
- `postman/` → Postman collection & environment.
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

