# Test Plan - MockAPI Testing Hub

## Objective
Verify that CRUD operations on `/api/users` work correctly in MockAPI.

## Tools & Environment
- Postman for manual testing
- MockAPI URL: `https://mockapi.io/api/v1/api/users`
- Node.js + Axios + Jest (future)
- Python + Requests + Pytest (future)

## Test Strategy / Approach
- Start with **manual testing** of all endpoints
- Gradually move to **automation** using JavaScript and Python
- Test types:
  - Valid requests
  - Invalid requests
  - Edge cases (missing fields, large payloads, special characters)

## Deliverables
- Manual test cases in `manual-tests/`
- Test data in `test-data/`
- Postman collection and environment
- Future automation scripts
