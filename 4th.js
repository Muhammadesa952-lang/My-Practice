// Function using async/await to fetch data from an API

async function fetchUserData(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP Error Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user:", error.message);
  }
}

// Example usage (runs asynchronously)
fetchUserData(1).then((user) => {
  if (user) {
    console.log("User Name:", user.name);
    console.log("User Email:", user.email);
  }
});
