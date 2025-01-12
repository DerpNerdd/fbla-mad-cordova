document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded successfully");

  // Setting up event listeners
  const signup = document.querySelector(".signup");
  const login = document.querySelector(".login");
  const slider = document.querySelector(".slider");
  const formSection = document.querySelector(".form-section");

  if (login) {
    login.classList.add("magic");
  }

  if (signup && login && slider && formSection) {
    signup.addEventListener("click", () => {
      slider.classList.add("moveslider");
      formSection.classList.add("form-section-move");
      login.classList.remove("magic");
      signup.classList.add("magic");
    });

    login.addEventListener("click", () => {
      slider.classList.remove("moveslider");
      formSection.classList.remove("form-section-move");
      signup.classList.remove("magic");
      login.classList.add("magic");
    });
  }

  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("authToken");
      window.location.href = "index.html";
    });
  }
});

window.auth = async function () {
  console.log("Auth function called");

  const isLogin = document.querySelector('.login.magic');
  let email, password, name;

  if (isLogin) {
    email = document.getElementById("login-email").value;
    password = document.getElementById("login-password").value;

    try {
      const response = await fetch('http://172.20.10.3:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        localStorage.setItem('authToken', data.token);
        window.location.assign("homepage.html");
      } else {
        console.error("Login failed:", data);
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Error during login:", err);
      alert("Something went wrong: " + err.message);
    }
  } else {
    const signupEmail = document.getElementById("signup-email").value;
    const signupPassword = document.getElementById("signup-password").value;
    const nameInput = document.querySelector('.signup-box input[type="text"]').value;

    try {
      const response = await fetch('http://172.20.10.3:3000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameInput,
          email: signupEmail,
          password: signupPassword
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        window.location.assign("homepage.html");
      } else {
        console.error("Signup failed:", data);
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Error during signup:", err);
      alert("Something went wrong: " + err.message);
    }
  }
};