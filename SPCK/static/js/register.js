const registerForm = document.getElementById("formRegister");
const nameInput = document.getElementById("inputName");
const passwordInput = document.getElementById("inputPassword");
const emailInput = document.getElementById("inputEmail");
const genderInput = document.getElementById("inputGender");
const dobInput = document.getElementById("inputDOB");

flatpickr("#inputDOB", {
  dateFormat: "d/m/Y",
  allowInput: true,
});

import { showToast, getRegistrationData } from "./utils.js";

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  registerForm.classList.add("was-validated");

  if (
    !emailInput.value ||
    !nameInput.value ||
    !dobInput.value ||
    !passwordInput.value ||
    !genderInput.value
  ) {
    showToast("danger", "Please fill in all the information!");
    return;
  }
  if (
    !(
      passwordInput.value.length >= 8 &&
      /[a-zA-Z]/.test(passwordInput.value) &&
      /[0-9]/.test(passwordInput.value) &&
      /[^a-zA-Z0-9]/.test(passwordInput.value)
    )
  ) {
    showToast(
      "Danger",
      "Passwords must be at least 8 characters long, including both numbers and special characters.",
    );
    return;
  }

  localStorage.setItem(
    "registrationData_0",
    JSON.stringify({
      name: "admin",
      email: "admin@example.com",
      dob: "01/01/1990",
      gender: "Male",
      password: "Admin@123",
    }),
  );

  var currentId = 0;
  currentId = localStorage.length || 0;

  const registrationStorageData = getRegistrationData();
  if (registrationStorageData.length > 0) {
    const existingUser = registrationStorageData.find(
      (curr) => curr.name === nameInput.value,
    );
    if (existingUser) {
      showToast("danger", "Account already exists");
      return;
    }
  }
  var registrationData = {
    id: currentId,
    password: passwordInput.value,
    email: emailInput.value,
    name: nameInput.value,
    gender: genderInput.value,
    dob: dobInput.value,
    keepSignIn: false,
  };
  currentId += 1;
  localStorage.setItem(
    "registrationData_" + registrationData.id,
    JSON.stringify(registrationData),
  );
  showToast("success", "Registration successful!");
});
