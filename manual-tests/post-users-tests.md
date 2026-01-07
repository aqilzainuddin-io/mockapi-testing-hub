# GET /api/users – Manual Test Cases

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
- The following scenarios are covered:
- Successful creation of a user
- Validation of required fields
- Duplicate email handling
- Unsupported HTTP method behavior
- Response time verification

## Test Cases
```json
{
  "endpoint": "POST /api/users",
  "testCases": [
    {
      "id": "POST001",
      "title": "Create a new user with valid data",
      "precondition": "Users endpoint is available",
      "steps": [
        "Send POST request to /api/users with valid name, email, country, and notes"
      ],
      "expectedResult": {
        "statusCode": 201,
        "responseType": "object",
        "requiredFields": ["id", "name", "email", "country", "notes"],
        "description": "User is created successfully with a unique ID"
      }
    },
    {
      "id": "POST002",
      "title": "Verify newly created user is retrievable",
      "precondition": "A user has been created successfully",
      "steps": [
        "Send POST request to create a user",
        "Send GET request to /api/users/{id}"
      ],
      "expectedResult": {
        "statusCode": 200,
        "description": "Created user data is persisted and retrievable"
      }
    },
    {
      "id": "POST003",
      "title": "Create user with long notes text",
      "precondition": "Users endpoint is available",
      "steps": [
        "Send POST request with valid data and a long notes string"
      ],
      "expectedResult": {
        "statusCode": 201,
        "description": "User is created successfully and notes field is stored correctly"
      }
    },
    {
      "id": "POST004",
      "title": "Create multiple users sequentially",
      "precondition": "Users endpoint is available",
      "steps": [
        "Send POST request to create first user",
        "Send POST request to create second user",
        "Send GET request to /api/users"
      ],
      "expectedResult": {
        "statusCode": 200,
        "description": "All created users are returned in the users list"
      }
    },
    {
      "id": "POST005",
      "title": "Verify response time for user creation",
      "precondition": "Users endpoint is available",
      "steps": [
        "Send POST request with valid data",
        "Measure response time"
      ],
      "expectedResult": {
        "statusCode": 201,
        "responseTimeMs": "< 60000"
      }
    }
  ]
}
```

## Test Execution Results
### POST001
- **Status:** Pass
- **Actual Status Code:** 201
- **Post Request:**
```json
{
    "name": "Johnney",
    "email": "HeyJohnney@hotmail.com",
    "country": "United States",
    "notes": "Creation of data using http post method."
}
```
- **Actual Response:**
```json
{
    "name": "Johnney",
    "email": "HeyJohnney@hotmail.com",
    "country": "United States",
    "notes": "Creation of data using http post method.",
    "id": "1"
}
```
- **Notes:** Data created with unique id; response status code (201).

### POST002
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json
{
    "name": "Johnney",
    "email": "HeyJohnney@hotmail.com",
    "country": "United States",
    "notes": "Creation of data using http post method.",
    "id": "1"
}
```
- **Notes:** Able to retrieved specific id created from POST001 test case.

### POST003
- **Status:** Pass
- **Actual Status Code:** 201
- **Post Request:**
```json
{
    "name": "Steven J",
    "email": "StevenJ@hotmail.com",
    "country": "England",
    "notes": "Creation of data using http post method. Test for the long notes text. Instead of a sentence, it consist of three sentence."
}
```
- **Actual Response:**
```json
{
    "name": "Steven J",
    "email": "StevenJ@hotmail.com",
    "country": "England",
    "notes": "Creation of data using http post method. Test for the long notes text. Instead of a sentence, it consist of three sentence.",
    "id": "2"
}
```
- **Notes:** Data created with unique id, notes text consist of (3) sentence; response status code (201).

### POST004
- **Status:** Pass
- **Actual Status Code:** 201, 200
- **Post Request:**
```json
{
    "name": "Kevin",
    "email": "Kevin@hotmail.com",
    "country": "England",
    "notes": "Creation of data using http post method. This is the second user creation."
}
```
- **Actual Response:**
```json
[
    {
        "name": "Johnney",
        "email": "HeyJohnney@hotmail.com",
        "country": "United States",
        "notes": "Creation of data using http post method.",
        "id": "1"
    },
    {
        "name": "Steven J",
        "email": "StevenJ@hotmail.com",
        "country": "England",
        "notes": "Creation of data using http post method. Test for the long notes text. Instead of a sentence, it consist of three sentence.",
        "id": "2"
    },
    {
        "name": "Kevin",
        "email": "Kevin@hotmail.com",
        "country": "England",
        "notes": "Creation of data using http post method. This is the second user creation.",
        "id": "3"
    }
]
```
- **Notes:** Data creation from POST003 and POST004 successfully, Able to retrieve all created users data.

### POST005
- **Status:** Pass
- **Actual Status Code:** 201
- **Post Request:**
```json
{
    "name": "David",
    "email": "David@gmail.com",
    "country": "United States",
    "notes": "Creation of data using http post method. This is the third user creation. Test on response time"
}
```
- **Actual Response:**
```json
{
    "name": "David",
    "email": "David@gmail.com",
    "country": "United States",
    "notes": "Creation of data using http post method. This is the third user creation. Test on response time",
    "id": "4"
}
```
- **Response Time (responseTimeMs):** 2060 
- **Notes:** Created in 2060ms||2.06s.