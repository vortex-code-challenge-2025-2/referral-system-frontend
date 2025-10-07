import { registerUser, loginUser } from "../services/authService.js";
import { renderProfilePage } from "./profile.js";

const ROOT = document.getElementById("app-root");

function addPasswordToggleLogic() {
  const passwordInput = document.getElementById("password");
  const toggle = document.querySelector(".password-toggle");

  if (passwordInput && toggle) {
    toggle.addEventListener("click", () => {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      toggle.textContent = type === "password" ? "👁️" : "🙈";
    });
  }
}

export function renderLogin() {
  ROOT.innerHTML = `
    <form id="login-form"> 
        <div class="card-container">
            <h2>Sign In</h2>
            <p>Please enter your credentials to log in.</p>
            <hr />

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required />

            <label for="password"><b>Password</b></label>
            <div class="password-wrapper">
                <input type="password" placeholder="Enter Password" name="password" id="password" />
                <span class="password-toggle">👁️</span>
            </div>
            <hr />
            
            <div id="message-area" class="message-area"></div>
            <button type="submit" class="registerbtn">Sign In</button>
        </div>
        <div class="signin-container">
            <p>Don't have an account? <a href="#" id="go-to-register">Register</a>.</p>
        </div>
    </form>
  `;

  document.getElementById("login-form").addEventListener("submit", handleLogin);
  document.getElementById("go-to-register").addEventListener("click", (e) => {
    e.preventDefault();
    renderRegister();
  });

  addPasswordToggleLogic();
}

export function renderRegister() {
  ROOT.innerHTML = `
    <form id="register-form"> 
        <div class="card-container">
            <h2>Register</h2>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label for="name"><b>Name</b></label>
            <input type="text" placeholder="Enter Name" name="name" id="name" required />

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required />

            <label for="password"><b>Password</b></label>
            <div class="password-wrapper">
                <input type="password" placeholder="Enter Password" name="password" id="password" required />
                <span class="password-toggle">👁️</span>
            </div>
            <hr />

            <div id="message-area" class="message-area"></div>

            <button type="submit" class="registerbtn">Register</button>
        </div>
        <div class="signin-container">
            <p>Already have an account? <a href="#" id="go-to-login">Sign in</a>.</p>
        </div>
  </form>
  `;

  document
    .getElementById("register-form")
    .addEventListener("submit", handleRegister);
  document.getElementById("go-to-login").addEventListener("click", (e) => {
    e.preventDefault();
    renderLogin();
  });

  addPasswordToggleLogic();
}

async function handleLogin(event) {
  event.preventDefault();
  const messageArea = document.getElementById("message-area");
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  try {
    await loginUser({ email, password });
    messageArea.textContent = "Login successful! Redirecting...";
    messageArea.style.color = "green";
    setTimeout(() => renderProfilePage(), 3000);
  } catch (error) {
    messageArea.textContent = error.message;
    messageArea.style.color = "red";
  }
}

async function handleRegister(event) {
  event.preventDefault();
  const messageArea = document.getElementById("message-area");
  const form = event.target;
  const { name, email, password } = form.elements;

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email.value)) {
    messageArea.textContent = "Please, enter a valid e-mail.";
    messageArea.style.color = "red";
    return;
  }
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password.value)) {
    messageArea.textContent =
      "The password must be at least 8 characters long, with letters and numbers.";
    messageArea.style.color = "red";
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const refCode = urlParams.get("ref");
  try {
    const result = await registerUser(
      { name: name.value, email: email.value, password: password.value },
      refCode
    );
    messageArea.textContent = result.message;
    messageArea.style.color = "green";
    setTimeout(() => {
      form.reset();
      renderLogin();
    }, 3000);
  } catch (error) {
    messageArea.textContent = error.message;
    messageArea.style.color = "red";
  }
}
