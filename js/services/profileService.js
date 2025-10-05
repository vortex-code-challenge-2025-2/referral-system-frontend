const API_URL = "http://localhost:3000/api";

export async function getUserProfile() {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Token not found.");
  }

  const response = await fetch(`${API_URL}/user/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();

  if (!response.ok) {
    localStorage.removeItem("authToken");
    throw new Error(result.error);
  }

  return result;
}
