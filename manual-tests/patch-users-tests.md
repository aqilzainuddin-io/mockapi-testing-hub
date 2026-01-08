# PATCH /api/users/{id} – Manual Test Cases

## Purpose
This document contains manual test cases for the **PATCH /api/users/{id}** endpoint.
The goal is to verify that the API correctly updates specific user fields without affecting other existing data.

## Endpoint Details
- **Method:** PATCH
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
- Partial update of user fields
- Data persistence after update
- No impact on untouched fields
- Multiple PATCH operations on the same user
- Response time verification

## Test Cases
```json
{
  "endpoint": "PATCH /api/users/{id}",
  "testCases": [
    {
      "id": "PATCH001",
      "title": "Update a single field of an existing user",
      "precondition": "A user exists",
      "steps": [
        "Send PATCH request to /api/users/{id} with updated 'email' field"
      ],
      "expectedResult": {
        "statusCode": 200,
        "description": "Only the specified field is updated successfully"
      }
    },
    {
      "id": "PATCH002",
      "title": "Update multiple fields of an existing user",
      "precondition": "A user exists",
      "steps": [
        "Send PATCH request to /api/users/{id} with updated 'name' and 'notes'"
      ],
      "expectedResult": {
        "statusCode": 200,
        "description": "All specified fields are updated successfully"
      }
    },
    {
      "id": "PATCH003",
      "title": "Verify updated user data is persisted",
      "precondition": "A user has been updated via PATCH",
      "steps": [
        "Send GET request to /api/users/{id}"
      ],
      "expectedResult": {
        "statusCode": 200,
        "description": "Retrieved user reflects the updated values"
      }
    },
    {
      "id": "PATCH004",
      "title": "Verify untouched fields remain unchanged",
      "precondition": "A user exists",
      "steps": [
        "Send PATCH request updating only 'notes'",
        "Verify 'name', 'email', and 'country' remain unchanged"
      ],
      "expectedResult": {
        "statusCode": 200,
        "description": "Only patched fields are updated; others remain intact"
      }
    },
    {
      "id": "PATCH005",
      "title": "Apply multiple PATCH operations sequentially",
      "precondition": "A user exists",
      "steps": [
        "Send PATCH request to update 'country'",
        "Send PATCH request to update 'notes'",
        "Send GET request to verify all changes"
      ],
      "expectedResult": {
        "statusCode": 200,
        "description": "All updates are applied correctly across multiple PATCH requests"
      }
    },
    {
      "id": "PATCH006",
      "title": "Verify response time for PATCH request",
      "precondition": "A user exists",
      "steps": [
        "Send PATCH request with valid data",
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
### PATCH001
- **Status:** Pass
- **Actual Status Code:** 200
- **Pre-Patch Request:**
```json
{
    "name": "Steven J",
    "email": "StevenJ@hotmail.com",
    "country": "England",
    "notes": "Creation of data using http post method. Test for the long notes text. Instead of a sentence, it consist of three sentence.",
    "id": "2"
}
```
- **Patch Request:**
```json
{
    "email": "StevenJobs@hotmail.com"
}
```
- **Actual Response:**
```json
{
    "name": "Steven J",
    "email": "StevenJobs@hotmail.com",
    "country": "England",
    "notes": "Creation of data using http post method. Test for the long notes text. Instead of a sentence, it consist of three sentence.",
    "id": "2"
}
```
- **Notes:** Patch successfully, status code 200, email have been updated.

### PATCH002
- **Status:** Pass
- **Actual Status Code:** 200
- **Pre-Patch Request:**
```json
{
    "name": "Steven J",
    "email": "StevenJobs@hotmail.com",
    "country": "England",
    "notes": "Creation of data using http post method. Test for the long notes text. Instead of a sentence, it consist of three sentence.",
    "id": "2"
}
```
- **Patch Request:**
```json
{
    "name": "Steven Jobs",
    "notes": "Using this field for test case PATCH002 purposes."
}
```
- **Actual Response:**
```json
{
    "name": "Steven Jobs",
    "email": "StevenJobs@hotmail.com",
    "country": "England",
    "notes": "Using this field for test case PATCH002 purposes.",
    "id": "2"
}
```
- **Notes:** Patch successfully, status code 200, name and notes have been updated.

### PATCH003
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json
{
    "name": "Steven Jobs",
    "email": "StevenJobs@hotmail.com",
    "country": "England",
    "notes": "Using this field for test case PATCH002 purposes.",
    "id": "2"
}
```
- **Notes:** Data that been patched persistence after update.

### PATCH004
- **Status:** Pass
- **Actual Status Code:** 200
- **Pre-Patch Request:**
```json
{
    "name": "Steven Jobs",
    "email": "StevenJobs@hotmail.com",
    "country": "England",
    "notes": "Using this field for test case PATCH002 purposes.",
    "id": "2"
}
```
- **Patch Request:**
```json
{
    "notes": "Using this field for test case PATCH004 purposes, where it mainly focus on updating notes fields without affecting other fields."
}
```
- **Actual Response:**
```json
{
    "name": "Steven Jobs",
    "email": "StevenJobs@hotmail.com",
    "country": "England",
    "notes": "Using this field for test case PATCH004 purposes, where it mainly focus on updating notes fields without affecting other fields.",
    "id": "2"
}
```
- **Notes:** Patch notes successfully, only the notes field is affected, while other fields are not affected.

### PATCH005
- **Status:** Pass
- **Actual Status Code:** 200, 200, 200
- **Pre-Patch Request(1):**
```json
{
    "name": "Johnney",
    "email": "HeyJohnney@hotmail.com",
    "country": "United States",
    "notes": "Creation of data using http post method.",
    "id": "1"
}
```
- **Patch Request:**
```json
{
    "country": "New Zealand"
}
```
- **Actual Response:**
```json
{
    "name": "Johnney",
    "email": "HeyJohnney@hotmail.com",
    "country": "New Zealand",
    "notes": "Creation of data using http post method.",
    "id": "1"
}
```

- **Pre-Patch Request(2):**
```json
{
    "name": "Johnney",
    "email": "HeyJohnney@hotmail.com",
    "country": "New Zealand",
    "notes": "Creation of data using http post method.",
    "id": "1"
}
```
- **Patch Request:**
```json
{
    "notes": "Using this field for test case PATCH005(2) purposes"
}
```
- **Actual Response:**
```json
{
    "name": "Johnney",
    "email": "HeyJohnney@hotmail.com",
    "country": "New Zealand",
    "notes": "Using this field for test case PATCH005(2) purposes",
    "id": "1"
}
```
- **Notes:** Patch successfully, status code 200, country and notes have been updated.

### PATCH006
- **Status:** Pass
- **Actual Status Code:** 200
- **Pre-Patch Request:**
```json
{
    "name": "Johnney",
    "email": "HeyJohnney@hotmail.com",
    "country": "New Zealand",
    "notes": "Using this field for test case PATCH005(2) purposes",
    "id": "1"
}
```
- **Patch Request:**
```json
{
    "notes": "Using this field for test case PATCH006 purposes to measure response time for patch method"
}
```
- **Actual Response:**
```json
{
    "name": "Johnney",
    "email": "HeyJohnney@hotmail.com",
    "country": "New Zealand",
    "notes": "Using this field for test case PATCH006 purposes to measure response time for patch method",
    "id": "1"
}
```
- **Response Time (responseTimeMs):** 718 
- **Notes:** Successfully updated in 718ms||0.718s.