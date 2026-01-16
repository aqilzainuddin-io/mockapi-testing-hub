# GET /api/users – Manual Test Cases

## Purpose
This document contains manual test cases for the **GET /api/users** endpoint.
The goal is to verify that the API correctly retrieves user data and returns
a valid response structure, status codes, and performance behavior.

## Endpoint Details
- **Method:** GET
- **URL:** /api/users
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
- Successful retrieval of users
- Response structure validation
- Response time verification

## Test Cases
### GET001 - Retrieve all users successfully
Precondition:
```text
At least one user exists
```
Expected Result:
```text
Status Code: 200
Response Type: Array
Required Fields: name, email, country, notes and id
```

### GET002 - Validate response structure
Precondition:
```text
Users endpoint is available
```
Steps:
```text
1. Send GET request to /api/users
2. Inspect response body
```
Expected Result:
```text
Status Code: 200
Response Type: Array
Required Fields: name, email, country, notes and id
```

### GET003 - Retrieve single user with valid ID
Precondition:
```text
At least one user exists
```
Steps:
```text
1. Send GET request to /api/users/{id} with a valid ID
```
Expected Result:
```text
Status Code: 200
Response Type: Object
Required Fields: name, email, country, notes and id
```

### GET004 - Retrieve single user with invalid ID
Precondition:
```text
Users endpoint is available
```
Steps:
```text
1. Send GET request to /api/users/999999 (non-existent ID)
```
Expected Result:
```text
Status Code: 404
Response Type: Object
Behavior: Returns "Not Found" or empty response
```

### GET005 - Verify API response time is acceptable
Precondition:
```text
Users endpoint is available and at least one user exists
```
Steps:
```text
1. Send GET request to /api/users
2. Measure response time
```
Expected Result:
```text
Status Code: 200
Response Type: Array
Behavior: Response time < 60,000 ms
```

### GET006 - Retrieve users when no users exist
```text
Precondition:
All users are deleted

Steps:
1. Send GET request to /api/users

Expected Result:
Status Code: 200
Response Type: Array
Behavior: Response body with empty array []
```

## Test Execution Results
### GET001
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json
[
    {
        "name": "Mr Adrian Collins",
        "email": "adrian.collins14@gmail.com",
        "country": "Malaysia",
        "notes": "Sample data.",
        "id": "1"
    },
    {
        "name": "Ms Farah Aisyah",
        "email": "farah.aisyah89@yahoo.com",
        "country": "Singapore",
        "notes": "Sample data.",
        "id": "2"
    },
    {
        "name": "Mr Daniel Wong",
        "email": "daniel.wong22@hotmail.com",
        "country": "Hong Kong",
        "notes": "Sample data.",
        "id": "3"
    },
    {
        "name": "Ms Aina Sofea",
        "email": "aina.sofea.dev@gmail.com",
        "country": "Indonesia",
        "notes": "Sample data.",
        "id": "4"
    }
]
```
- **Notes:** Return all existing data.

### GET002
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json
[
    {
        "name": "Mr Adrian Collins",
        "email": "adrian.collins14@gmail.com",
        "country": "Malaysia",
        "notes": "Sample data.",
        "id": "1"
    },
    {
        "name": "Ms Farah Aisyah",
        "email": "farah.aisyah89@yahoo.com",
        "country": "Singapore",
        "notes": "Sample data.",
        "id": "2"
    },
    {
        "name": "Mr Daniel Wong",
        "email": "daniel.wong22@hotmail.com",
        "country": "Hong Kong",
        "notes": "Sample data.",
        "id": "3"
    },
    {
        "name": "Ms Aina Sofea",
        "email": "aina.sofea.dev@gmail.com",
        "country": "Indonesia",
        "notes": "Sample data.",
        "id": "4"
    }
]
```
- **Notes:** Match and followed the schema/structure.

### GET003
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json
{
    "name": "Mr Adrian Collins",
    "email": "adrian.collins14@gmail.com",
    "country": "Malaysia",
    "notes": "Sample data.",
    "id": "1"
}
```
- **Notes:** Return one specific by user, where the id is 1.

### GET004
- **Status:** Pass
- **Actual Status Code:** 404
- **Actual Response:** "Not found"
- **Notes:** Return "Not found" response.

### GET005
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json
[
    {
        "name": "Mr Adrian Collins",
        "email": "adrian.collins14@gmail.com",
        "country": "Malaysia",
        "notes": "Sample data.",
        "id": "1"
    },
    {
        "name": "Ms Farah Aisyah",
        "email": "farah.aisyah89@yahoo.com",
        "country": "Singapore",
        "notes": "Sample data.",
        "id": "2"
    },
    {
        "name": "Mr Daniel Wong",
        "email": "daniel.wong22@hotmail.com",
        "country": "Hong Kong",
        "notes": "Sample data.",
        "id": "3"
    },
    {
        "name": "Ms Aina Sofea",
        "email": "aina.sofea.dev@gmail.com",
        "country": "Indonesia",
        "notes": "Sample data.",
        "id": "4"
    }
]
```
- **Response Time (responseTimeMs):** 242ms
- **Notes:** Successfully return response in 242ms||0.242s response.

### GET006
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:** []
- **Notes:** Return "[]" response.