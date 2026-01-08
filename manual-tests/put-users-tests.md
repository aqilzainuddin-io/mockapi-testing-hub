# PUT /api/users/{id} – Manual Test Cases

## Purpose
This document contains manual test cases for the **PUT /api/users/{id}** endpoint.
The goal is to verify that the API correctly replaces an existing user’s data with new values.

## Endpoint Details
- **Method:** PUT
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
- Full user replacement
- Data persistence after update
- Sequential PUT operations
- Response time verification

## Test Cases
```json
{
  "endpoint": "PUT /api/users/{id}",
  "testCases": [
    {
      "id": "PUT001",
      "title": "Replace an existing user with valid data",
      "precondition": "A user exists",
      "steps": [
        "Send PUT request to /api/users/{id} with full valid user data"
      ],
      "expectedResult": {
        "statusCode": 200,
        "description": "User data is fully replaced successfully"
      }
    },
    {
      "id": "PUT002",
      "title": "Replace user data multiple times sequentially",
      "precondition": "A user exists",
      "steps": [
        "Send PUT request with first dataset",
        "Send PUT request with second dataset",
        "Send GET request to verify final state"
      ],
      "expectedResult": {
        "statusCode": 200,
        "description": "Only the last PUT data is persisted"
      }
    },
    {
      "id": "PUT003",
      "title": "Verify response time for PUT request",
      "precondition": "A user exists",
      "steps": [
        "Send PUT request with valid data",
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
### PUT001
- **Status:** Pass
- **Actual Status Code:** 200
- **Pre-Put Request:**
```json
{
    "name": "Kevin",
    "email": "Kevin@hotmail.com",
    "country": "England",
    "notes": "Creation of data using http post methodThis is the second user creation.",
    "id": "3"
}
```
- **Put Request:**
```json
{
    "name": "Luke",
    "email": "Luke@gmail.com",
    "country": "New Zealand",
    "notes": "User data is fully replaced for test case PUT001."
}
```
- **Actual Response:**
```json
{
    "name": "Luke",
    "email": "Luke@gmail.com",
    "country": "New Zealand",
    "notes": "User data is fully replaced for test case PUT001.",
    "id": "3"
}
```
- **Notes:** Succesfully replace user with id (3) data fully.

### PUT002
- **Status:** Pass
- **Actual Status Code:** 200, 200, 200
- **Pre-Put Request(1):**
```json
{
    "name": "Steven Jobs",
    "email": "StevenJobs@hotmail.com",
    "country": "England",
    "notes": "Using this field for test case PATCH004 purposes, where it mainly focus on updating notes fields without affecting other fields.",
    "id": "2"
}
```
- **Put Request(1):**
```json
{
    "name": "Ryan",
    "email": "Ryan@hotmail.com",
    "country": "New Zealand",
    "notes": "User data is fully replaced for test case PUT002(1)."
}
```
- **Actual Response(1):**
```json
{
    "name": "Ryan",
    "email": "Ryan@hotmail.com",
    "country": "New Zealand",
    "notes": "User data is fully replaced for test case PUT002(1).",
    "id": "2"
}
```

- **Pre-Put Request(2):**
```json
{
    "name": "Ryan",
    "email": "Ryan@hotmail.com",
    "country": "New Zealand",
    "notes": "User data is fully replaced for test case PUT002(1).",
    "id": "2"
}
```
- **Put Request(2):**
```json
{
    "name": "Ryan Ronald",
    "email": "RyanRonald@gmail.com",
    "country": "United Kingdom",
    "notes": "User data is fully replaced for test case PUT002(2)."
}
```
- **Actual Response(2):**
```json
{
    "name": "Ryan Ronald",
    "email": "RyanRonald@gmail.com",
    "country": "United Kingdom",
    "notes": "User data is fully replaced for test case PUT002(2).",
    "id": "2"
}
```

- **Actual Response(3):**
```json
{
    "name": "Ryan Ronald",
    "email": "RyanRonald@gmail.com",
    "country": "United Kingdom",
    "notes": "User data is fully replaced for test case PUT002(2).",
    "id": "2"
}
```
- **Notes:** Succesfully replace user with id (2) data fully twice, and the last replace of the data for user with id (2) able to retain the updated data return it correctly.

### PUT003
- **Status:** Pass
- **Actual Status Code:** 200
- **Pre-Put Request:**
```json
{
    "name": "David",
    "email": "David@gmail.com",
    "country": "United States",
    "notes": "Creation of data using http post method. This is the third user creation. Test on response time",
    "id": "4"
}
```
- **Put Request:**
```json
{
    "name": "Arthur",
    "email": "Arthur@gmail.com",
    "country": "United States",
    "notes": "User data fully replaced for test case PUT003."
}
```
- **Actual Response:**
```json
{
    "name": "Arthur",
    "email": "Arthur@gmail.com",
    "country": "United State",
    "notes": "User data fully replaced for test case PUT003.",
    "id": "4"
}
```
- **Response Time (responseTimeMs):** 4790 
- **Notes:** Successfully updated in 4790ms||4.79s.