import { getUserProfile } from "../services/profileService.js";
import { renderLogin } from "./auth.js";

const ROOT = document.getElementById("app-root");
const userNameDisplay = document.getElementById("user-name-display");
const userPointsDisplay = document.getElementById("user-points-display");

export async function renderProfilePage() {
  try {
    ROOT.innerHTML = `<div class="card-container"><p>Loading profile...</p></div>`;
    userNameDisplay.textContent = "";
    userPointsDisplay.textContent = "";

    const userData = await getUserProfile();
    userNameDisplay.textContent = `Hey, ${userData.name}!`;
    userPointsDisplay.textContent = `Total Points: ${userData.points}`;

    ROOT.innerHTML = `
      <div class="card-container profile-card">
          <h2>Your Referral Link</h2>
          <p>Share this link to earn points!</p>
          <div class="referral-link-container">
              <input type="text" value="${window.location.origin}/?ref=${userData.link}" id="referral-link" readonly>
              <button id="copy-button" class="copy-btn">Copy</button>
          </div>
          <div id="copy-feedback"></div>
          <hr/>
          <button id="logout-button" class="registerbtn logout-btn">Logout</button>
      </div>
    `;

    const copyButton = document.getElementById("copy-button");
    const referralLinkInput = document.getElementById("referral-link");
    const copyFeedback = document.getElementById("copy-feedback");
    copyButton.addEventListener("click", () => {
      navigator.clipboard.writeText(referralLinkInput.value).then(() => {
        copyFeedback.textContent = "Link copied successfully!";
        setTimeout(() => {
          copyFeedback.textContent = "";
        }, 2000);
      });
    });

    document.getElementById("logout-button").addEventListener("click", () => {
      localStorage.removeItem("authToken");
      userNameDisplay.textContent = "";
      userPointsDisplay.textContent = "";
      renderLogin();
    });
  } catch (error) {
    ROOT.innerHTML = `
      <div class="card-container">
          <h2>Auth error.</h2>
          <p>${error.message}</p>
          <button id="go-back-login" class="registerbtn">Login</button>
      </div>
    `;
    document
      .getElementById("go-back-login")
      .addEventListener("click", renderLogin);
  }
}
