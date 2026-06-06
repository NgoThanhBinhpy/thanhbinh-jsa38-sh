import { showToast, getRegistrationData, checkLoginStatus } from "./utils.js";
const signinForm = document.getElementById("formSignin");
const inputName = document.getElementById("inputName");
const inputPassword = document.getElementById("inputPassword");
const gridcheck = document.getElementById("gridCheck");
const admin_account = {
  name: "admin",
  password: "Admin@123",
  email: "admin@example.com",
  phone: "0123456789",
  dob: "1990-01-01",
  address: "123 Admin St",
  state: "State",
  keepSignIn: false,
};

function clearKeepSignIn() {
  const registrationData = getRegistrationData();
  registrationData.forEach((user, index) => {
    if (user.keepSignIn) {
      user.keepSignIn = false;
      const key = `registrationData_${index}`;
      localStorage.setItem(key, JSON.stringify(user));
    }
  });
}

signinForm.addEventListener("submit", function (event) {
  event.preventDefault();
  signinForm.classList.add("was-validated");

  if (!inputName.value || !inputPassword.value) {
    showToast("danger", "Please fill in all the information!");
    return;
  }

  const name = inputName.value.trim();
  const password = inputPassword.value;

  const registrationData = getRegistrationData();
  const user = registrationData.find(
    ([key, value]) => value.name === name && value.password === password,
  );

  if (name === admin_account.name && password === admin_account.password) {
    showToast("success", "Logged in with admin account!");
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        name: admin_account.name,
        role: "admin",
        originalKey: "registrationData_0",
      }),
    );
    window.location.href = "../index.html";
    checkLoginStatus(admin_account.name);
    return;
  }

  if (user) {
    showToast("success", "Login successful!");
    clearKeepSignIn();
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        name: user[1].name,
        email: user[1].email,
        role: "user",
        originalKey: user[0],
      }),
    );
    if (gridcheck.checked) {
      user[1].keepSignIn = true;
      if (user[0]) {
        localStorage.setItem(user[0], JSON.stringify(user[1]));
      }
    }
    window.location.href = "./index.html";
    checkLoginStatus(user.name);
  } else {
    showToast("danger", "Invalid username or password!");
  }
});
