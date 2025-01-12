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

  // Determine whether user is logging in or signing up
  const isLogin = document.querySelector('.login.magic'); 
  // If the login button is highlighted, user is logging in;
  // otherwise they're signing up.

  let email, password, name;
  
  if (isLogin) {
    // Grabbing login fields
    email = document.getElementById("login-email").value;
    password = document.getElementById("login-password").value;

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      if (response.ok) {
        // Successful login
        console.log(data.message);
        // Store token if needed
        localStorage.setItem('authToken', data.token);
        // Then redirect
        window.location.assign("homepage.html");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

  } else {
    // Grabbing signup fields
    const signupEmail = document.getElementById("signup-email").value;
    const signupPassword = document.getElementById("signup-password").value;
    const nameInput = document.querySelector('.signup-box input[type="text"]').value;
    
    try {
      const response = await fetch('http://localhost:3000/auth/signup', {
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
        // Successful sign-up
        alert(data.message);
        // Possibly switch to login view after sign-up
        window.location.assign("homepage.html");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  }
};