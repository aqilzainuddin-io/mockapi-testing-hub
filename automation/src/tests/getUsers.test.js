const axios = require("axios");

/*
  describe() groups related test cases for this endpoint
*/
describe("GET /api/users", () => {

  /*
    test() defines a single test case
    async because we are waiting for the API response
  */
  test("return a list of users", async () => {

    // Send GET request to your MockAPI endpoint
    const response = await axios.get("https://695b09d21d8041d5eeb5c0f2.mockapi.io/api/users");

    // Log the full response data for debugging
    console.log("Response Data:", response.data);
    
    // Assert HTTP status is 200
    expect(response.status).toBe(200);
    // Assert response is an array
    expect(Array.isArray(response.data)).toBe(true);
    // Assert display at least 1 user
    expect(response.data.length).toBeGreaterThan(0);
  });

  test("return a single user by ID", async () => {
    const userId = 2; // Replace with a valid user ID from your MockAPI

    // Send GET request to fetch a single user by ID
    const response = await axios.get(`https://695b09d21d8041d5eeb5c0f2.mockapi.io/api/users/${userId}`);
    
    // Log the full response data for debugging
    console.log("Response Data:", response.data);

    // Assert HTTP status is 200
    expect(response.status).toBe(200);

    // Assert response not null or undefined
    expect(response.data).toBeDefined();
    expect(response.data).not.toBeNull();
    // Assert response is an object
    expect(typeof response.data).toBe("object");
    // Assert the user objec has a "name" property
    expect(response.data).toHaveProperty("name");
    // Assert the user object has an "email" property
    expect(response.data).toHaveProperty("email");
    // Assert the user object has an "country" property
    expect(response.data).toHaveProperty("country");
    // Assert the user object has an "notes" property
    expect(response.data).toHaveProperty("notes");
    // Assert the user object has an "id" property
    expect(response.data).toHaveProperty("id");
    // Assert the returned user has the correct ID
    expect(response.data.id).toBe(String(userId));
    // Assert response is not an array
    expect(Array.isArray(response.data)).toBe(false);
  });


});
