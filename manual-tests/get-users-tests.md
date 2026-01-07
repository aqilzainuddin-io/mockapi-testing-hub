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
```json
{
  "endpoint": "GET /api/users",
  "testCases": [
    {
      "id": "GET001",
      "title": "Retrieve all users successfully",
      "precondition": "At least one user exists",
      "steps": ["Send GET request to /api/users"],
      "expectedResult": {
        "statusCode": 200,
        "responseType": "array",
        "requiredFields": ["name","email","country","notes","id"]
      }
    },
    {
      "id": "GET002",
      "title": "Validate response structure",
      "precondition": "Users endpoint is available",
      "steps": ["Send GET request to /api/users","Inspect response body"],
      "expectedResult": {
        "statusCode": 200,
        "requiredFields": ["name","email","country","notes","id"],
        "noExtraFields": false
      }
    },
    {
      "id": "GET003",
      "title": "Retrieve single user by valid ID",
      "precondition": "At least one user exists",
      "steps": ["Send GET request to /api/users/{id} with a valid ID"],
      "expectedResult": {
        "statusCode": 200,
        "responseType": "object",
        "requiredFields": ["name","email","country","notes","id"]
      }
    },
    {
      "id": "GET004",
      "title": "Retrieve single user with invalid ID",
      "precondition": "Users endpoint is available",
      "steps": ["Send GET request to /api/users/999999 (non-existent ID)"],
      "expectedResult": {
        "statusCode": 404,
        "description": "Returns Not Found or empty response"
      }
    },
    {
      "id": "GET005",
      "title": "Retrieve users when no users exist",
      "precondition": "All users deleted",
      "steps": ["Send GET request to /api/users"],
      "expectedResult": {
        "statusCode": 200,
        "responseBody": []
      }
    },
    {
      "id": "GET006",
      "title": "Verify API response time is acceptable",
      "precondition": "Users exist",
      "steps": ["Send GET request to /api/users","Measure response time"],
      "expectedResult": {
        "statusCode": 200,
        "responseTimeMs": "< 60000"
      }
    }
  ]
}

```

## Test Execution Results
### GET001
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json
[
    {
        "name": "Bryant Bode",
        "email": "Abbigail7@hotmail.com",
        "country": "Palau",
        "notes": "Adopto comprehendo traho repellendus summisse curiositas assentator absconditus vir.",
        "id": "1"
    },
    {
        "name": "Lance Nienow-Considine",
        "email": "Nasir_Hartmann99@gmail.com",
        "country": "Sweden",
        "notes": "Cribro cuius comburo blandior peior eum.",
        "id": "2"
    },
    {
        "name": "Lonnie Stanton",
        "email": "Blair.Durgan30@yahoo.com",
        "country": "San Marino",
        "notes": "Abbas ocer repellendus caelum tamquam vae crastinus.",
        "id": "3"
    },
    {
        "name": "Mr. Michael Christiansen",
        "email": "Mozelle39@hotmail.com",
        "country": "Azerbaijan",
        "notes": "Tamisium ceno addo degero suadeo solitudo capio.",
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
        "name": "Bryant Bode",
        "email": "Abbigail7@hotmail.com",
        "country": "Palau",
        "notes": "Adopto comprehendo traho repellendus summisse curiositas assentator absconditus vir.",
        "id": "1"
    }
]
```
- **Notes:** Match and followed the schema.

### GET003
- **Status:** Pass
- **Actual Status Code:** 200
- **Actual Response:**
```json
[
    {
        "name": "Lance Nienow-Considine",
        "email": "Nasir_Hartmann99@gmail.com",
        "country": "Sweden",
        "notes": "Cribro cuius comburo blandior peior eum.",
        "id": "2"
    }
]
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
[
    {
        "name": "Gerard Bins",
        "email": "Emilio_Murazik@hotmail.com",
        "country": "Bolivia",
        "notes": "Aliquid creta demitto curriculum stella.",
        "id": "1"
    },
    {
        "name": "Monique Dietrich",
        "email": "Yessenia_Wuckert40@gmail.com",
        "country": "Egypt",
        "notes": "Cinis ambitus mollitia numquam bis corpus aveho arceo subnecto.",
        "id": "2"
    },
    {
        "name": "Dr. Velma Bayer IV",
        "email": "Sonya44@yahoo.com",
        "country": "Northern Mariana Islands",
        "notes": "Termes bonus vapulus iste.",
        "id": "3"
    },
    {
        "name": "Kurt Bosco",
        "email": "Orin53@hotmail.com",
        "country": "Spain",
        "notes": "Ubi dedico amplitudo desparatus.",
        "id": "4"
    },
    {
        "name": "Shelia Maggio I",
        "email": "Brown_Kunde@gmail.com",
        "country": "Myanmar",
        "notes": "Adficio umerus placeat.",
        "id": "5"
    },
    {
        "name": "Bessie Zulauf",
        "email": "Zora72@hotmail.com",
        "country": "Zambia",
        "notes": "Alius cursus constans uter.",
        "id": "6"
    }
]
```
- **Response Time (responseTimeMs):** 5980 
- **Notes:** Return in 5980ms||5.98s response.