# DELETE /api/users/{id} – Manual Test Cases

## Purpose
This document contains manual test cases for the **DELETE /api/users/{id}** endpoint.
The goal is to verify that the API correctly deletes an existing user and reflects the change in subsequent requests.

## Endpoint Details
- **Method:** DELETE
- **URL:** /api/users/{id}
- **Authentication:** None
- **Content-Type:** application/json

## Request Schema (Reference)
```json
{
  "name": "string",
  "email": "string",
  "country": "string",
  "notes": "string"
}
```

## Response Schema (Reference)
```json
[
  {
    "name": "string",
    "email": "string",
    "country": "string",
    "notes": "string",
    "id": "string"
  }
]
```

## Test Scope
The following scenarios are covered:
- Successful user deletion
- Data removal verification
- Response time verification

## Test Cases
```json
{
  "endpoint": "DELETE /api/users/{id}",
  "testCases": [
    {
      "id": "DEL001",
      "title": "Delete an existing user successfully and verify deleted user is no longer retrievable",
      "precondition": "A user exists",
      "steps": [
        "Send DELETE request to delete user",
        "Send GET request to /api/users/{id}"
      ],
      "expectedResult": {
        "statusCode": 404,
        "description": "Deleted user is not found"
      }
    },
    {
      "id": "DEL002",
      "title": "Verify user list reflects deletion",
      "precondition": "Multiple users exist",
      "steps": [
        "Send DELETE request to delete one user",
        "Send GET request to /api/users"
      ],
      "expectedResult": {
        "statusCode": 200,
        "description": "Deleted user is not included in the list"
      }
    },
    {
      "id": "DEL003",
      "title": "Verify response time for DELETE request",
      "precondition": "A user exists",
      "steps": [
        "Send DELETE request",
        "Measure response time"
      ],
      "expectedResult": {
        "statusCode": 200,
        "responseTimeMs": "< 60000"
      }
    }
  ]
}
```

## Test Execution Results
### DEL001
- **Status:** Pass
- **Actual Status Code:** 200, 404
- **Pre-Delete Request:**
```json
[
    {
        "name": "Johnney",
        "email": "HeyJohnney@hotmail.com",
        "country": "New Zealand",
        "notes": "Using this field for test case PATCH006 purposes to measure response time for patch method",
        "id": "1"
    },
    {
        "name": "Ryan Ronald",
        "email": "RyanRonald@gmail.com",
        "country": "United Kingdom",
        "notes": "User data is fully replaced for test case PUT002(2).",
        "id": "2"
    },
    {
        "name": "Luke",
        "email": "Luke@gmail.com",
        "country": "New Zealand",
        "notes": "User data is fully replaced for test case PUT001.",
        "id": "3"
    },
    {
        "name": "Arthur",
        "email": "Arthur@gmail.com",
        "country": "United State",
        "notes": "User data fully replaced for test case PUT003.",
        "id": "4"
    }
]
```
- **Actual Response:**
```json
"Not found"
```
- **Notes:** Successfully delete an user with id (1).

### DEL002
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json
[
    {
        "name": "Ryan Ronald",
        "email": "RyanRonald@gmail.com",
        "country": "United Kingdom",
        "notes": "User data is fully replaced for test case PUT002(2).",
        "id": "2"
    },
    {
        "name": "Luke",
        "email": "Luke@gmail.com",
        "country": "New Zealand",
        "notes": "User data is fully replaced for test case PUT001.",
        "id": "3"
    },
    {
        "name": "Arthur",
        "email": "Arthur@gmail.com",
        "country": "United State",
        "notes": "User data fully replaced for test case PUT003.",
        "id": "4"
    }
]
```
- **Notes:** Successfully return all users except deleted user with id (1).

### DEL003
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json
[
    {
        "name": "Ryan Ronald",
        "email": "RyanRonald@gmail.com",
        "country": "United Kingdom",
        "notes": "User data is fully replaced for test case PUT002(2).",
        "id": "2"
    },
    {
        "name": "Luke",
        "email": "Luke@gmail.com",
        "country": "New Zealand",
        "notes": "User data is fully replaced for test case PUT001.",
        "id": "3"
    }
]
```
- **Response Time (responseTimeMs):** 2440 
- **Notes:** Successfully delete an user with id (4) in 2440ms||2.44s.

