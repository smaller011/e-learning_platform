function validateForm() {
  const inputs = document.querySelectorAll("input");
  const errors = document.querySelectorAll(".errors");
  inputs.forEach((input) => input.classList.remove("invalid"));
  errors.forEach((error) => (error.textContent = ""));

  let invalid = false;

  // Full name validation
  const fullname = document.querySelector("#fullname");
  const fullname_err = document.querySelector(".fullname_err");
  if (fullname.value.trim() === "") {
    fullname_err.textContent = "This field is required";
    fullname.classList.add("invalid");
    invalid = true;
  }

  // Email validation
  const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const email = document.querySelector("#email");
  const email_error = document.querySelector(".email_err");

  if (email.value.trim() === "") {
    email_error.textContent = "This field is required";
    email.classList.add("invalid");
    invalid = true;
  } else if (!email_regex.test(email.value.trim())) {
    email_error.textContent = "Please enter a valid email address";
    email.classList.add("invalid");
    invalid = true;
  }

  // Password validation
  const password = document.querySelector("#password");
  const password_error = document.querySelector(".password_err");

  if (password.value.trim() === "") {
    password_error.textContent = "Please enter a password to continue";
    password.classList.add("invalid");
    invalid = true;
  }
  // Confirm password validation
  const confirmPassword = document.querySelector("#confirmPassword");
  const confirmPassword_error = document.querySelector(".confirmPassword_err");

  if (confirmPassword.value !== password.value) {
    confirmPassword_error.textContent = "Passwords do not match";
    confirmPassword.classList.add("invalid");
    invalid = true;
  }

  return !invalid
}

// Handle form submission
document
  .querySelector("#registrationForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully ✅");
      // event.target.submit(); // enable when ready to submit
    }
  });

// 🔥 Live validation (on typing)
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => {
    validateForm();
  });
});
