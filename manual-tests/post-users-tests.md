# POST /api/users – Manual Test Cases

## Purpose
This document contains manual test cases for the **POST /api/users** endpoint.
The goal is to verify that the API correctly creates new user data, handles validations, and returns proper responses and status codes.

## Endpoint Details
- **Method:** POST
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
- Successful creation of a user
- Sequential POST operations
- Response time verification

## Test Cases
### POST001 - Create a new user with valid data
```text
Precondition:
Users endpoint is available

Steps:
1. Send POST request to /api/users with valid name, email, country, and notes

Expected Result:
Status Code: 201
Response Type: Object
Behavior: User is created successfully with a unique ID
Required Fields: name, email, country, notes and id
```

### POST002 - Verify newly created user is retrievable
```text
Precondition:
A user has been created successfully

Steps:
1. Send GET request to /api/users/{id}

Expected Result:
Status Code: 200
Response Type: Array
Behavior: Created user data is persisted and retrievable
Required Fields: name, email, country, notes and id
```

### POST003 - Create user with long notes text
```text
Precondition:
Users endpoint is available

Steps:
1. Send POST request with valid data and a long notes string

Expected Result:
Status Code: 201
Response Type: Object
Behavior: User is created successfully with a unique ID
Required Fields: name, email, country, notes and id
```

### POST004 - Create multiple users sequentially
```text
Precondition:
Users endpoint is available

Steps:
1. Send POST request to create a user
2. Send GET request to /api/users

Expected Result:
Status Code: 200
Response Type: Object
Behavior: All created users are returned in the users list
Required Fields: name, email, country, notes and id
```

### POST005 - Verify response time for user creation
```text
Precondition:
Users endpoint is available

Steps:
1. Send POST request with valid data
2. Measure response time

Expected Result:
Status Code: 201
Response Type: Object
Behavior: Successfully created user < 60,000 ms
Required Fields: name, email, country, notes and id
```

## Test Execution Results
### POST001 - Create a new user with valid data
- **Status:** Pass
- **Actual Status Code:** 201
- **Post Request:**
```json
{
    "name": "Ms Rinn",
    "email": "rinn.dev@gmail.com",
    "country": "Philipines",
    "notes": "POST001 - Create a new user with valid data."
}
```
- **Actual Response:**
```json
{
    "name": "Ms Rinn",
    "email": "rinn.dev@gmail.com",
    "country": "Philipines",
    "notes": "POST001 - Create a new user with valid data.",
    "id": "5"
}
```
- **Notes:** Data created with unique id; response status code (201).

### POST002 - Verify newly created user is retrievable
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json
{
    "name": "Ms Rinn",
    "email": "rinn.dev@gmail.com",
    "country": "Philipines",
    "notes": "POST001 - Create a new user with valid data.",
    "id": "5"
}
```
- **Notes:** Able to retrieved specific id created from POST001 test case.

### POST003 - Create user with long notes text
- **Status:** Pass
- **Actual Status Code:** 201
- **Post Request:**
```json
{
    "name": "Ms Rinn",
    "email": "rinn.dev@gmail.com",
    "country": "Japan",
    "notes": "POST003 - Create user with long notes text. This test cases focus on verifying on creating user with long notes."
}
```
- **Actual Response:**
```json
{
    "name": "Ms Rinn",
    "email": "rinn.dev@gmail.com",
    "country": "Japan",
    "notes": "POST003 - Create user with long notes text. This test cases focus on verifying on creating user with long notes.",
    "id": "6"
}
```
- **Notes:** Data created with unique id, notes text consist of (2) sentence; response status code (201).

### POST004 - Create multiple users sequentially
- **Status:** Pass
- **Actual Status Code:** 201, 200
- **Post Request:**
```json
{
    "name": "Ms Avieevian",
    "email": "ms.avieevian@gmail.com",
    "country": "Japan",
    "notes": "POST004 - Create multiple users sequentially.",
    "id": "7"
}
```
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
    },
    {
        "name": "Ms Rinn",
        "email": "rinn.dev@gmail.com",
        "country": "Philipines",
        "notes": "POST001 - Create a new user with valid data.",
        "id": "5"
    },
    {
        "name": "Ms Rinn",
        "email": "rinn.dev@gmail.com",
        "country": "Japan",
        "notes": "POST003 - Create user with long notes text. This test cases focus on verifying on creating user with long notes.",
        "id": "6"
    },
    {
        "name": "Ms Avieevian",
        "email": "ms.avieevian@gmail.com",
        "country": "Japan",
        "notes": "POST004 - Create multiple users sequentially.",
        "id": "7"
    }
]
```
- **Notes:** Data creation from POST003 and POST004 successfully, Able to retrieve all created users data.

### POST005 - Verify response time for user creation
- **Status:** Pass
- **Actual Status Code:** 201
- **Post Request:**
```json
{
    "name": "Mr Steven Chao",
    "email": "steven.chao@gmail.com",
    "country": "China",
    "notes": "POST005 - Verify response time for user creation."
}
```
- **Actual Response:**
```json
{
    "name": "Mr Steven Chao",
    "email": "steven.chao@gmail.com",
    "country": "China",
    "notes": "POST005 - Verify response time for user creation.",
    "id": "8"
}
```
- **Response Time (responseTimeMs):** 879 
- **Notes:** Successfully created in 879ms||0.879s.