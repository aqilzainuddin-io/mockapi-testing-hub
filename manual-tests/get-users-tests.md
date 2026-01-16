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
Atleast one user exists
```
Expected Result:
```text
Status Code: 200
Response Type: Array
Required Fields: name, email, country, notes and id.
```

## Test Execution Results
### GET001
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json

```
- **Notes:** Return all existing data.

### GET002
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json

```
- **Notes:** Match and followed the schema.

### GET003
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json

```
- **Notes:** Return one specific by user, where the id is 2.

### GET004
- **Status:** Pass
- **Actual Status Code:** 404
- **Actual Response:** "Not found"
- **Notes:** Return "Not found" response.

### GET005
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:** []
- **Notes:** Return "[]" response.

### GET006
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json

```
- **Response Time (responseTimeMs):** 5980 
- **Notes:** Successfully return response in 5980ms||5.98s response.