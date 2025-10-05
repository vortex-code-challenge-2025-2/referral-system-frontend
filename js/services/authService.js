const API_URL = "http://localhost:3000/api";

export async function registerUser(userData, refCode) {
  let endpoint = `${API_URL}/user/register`;
  if (refCode) {
    endpoint += `?ref=${refCode}`;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error);
  }
  return result;
}

export async function loginUser(credentials) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error);
  }

  localStorage.setItem("authToken", result.token);
  return result;
}
