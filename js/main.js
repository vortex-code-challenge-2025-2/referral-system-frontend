import { renderRegister } from "./views/auth.js";
import { renderProfilePage } from "./views/profile.js";

function initializeApp() {
  const token = localStorage.getItem("authToken");
  if (token) {
    renderProfilePage();
  } else {
    renderRegister();
  }
}

initializeApp();
