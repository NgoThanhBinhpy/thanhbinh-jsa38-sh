const userInfo = localStorage.getItem("Username").trim();
const username = document.getElementById("usernameCell");
const email = document.getElementById("emailCell");
const gender = document.getElementById("genderCell");
const dob = document.getElementById("dobCell");
const phone = document.getElementById("phoneCell");
const address = document.getElementById("addressCell");
const state = document.getElementById("stateCell");
const admin_account = {
  name: "admin",
  password: "Admin@123",
  email: "admin@example.com",
  phone: "0123456789",
  gender: "Nam",
  dob: "1990-01-01",
  address: "123 Admin St",
  state: "State",
};
let userData = null;

import { getRegistrationData } from "./utils.js";

function setTextContent(Obj) {
  username.textContent = Obj.name;
  email.textContent = Obj.email;
  gender.textContent = Obj.gender;
  dob.textContent = Obj.dob;
  phone.textContent = Obj.phone;
  address.textContent = Obj.address;
  state.textContent = Obj.state;
}

document.addEventListener("DOMContentLoaded", function () {
  if (userInfo === admin_account.name && userInfo !== null) {
    setTextContent(admin_account);
    console.log("Admin account found:", admin_account);
    return;
  }

  const registrationData = getRegistrationData();
  userData = registrationData.find((user) => user.name === userInfo);
  if (userData) {
    setTextContent(userData);
    state.textContent = userData.state;
    console.log("User data found:", userData);
  } else {
    console.log("No user data found for:", userInfo);
    console.log(
      "Searching for keepSignIn user in registration data:",
      registrationData,
    );
    const keepSignInUser = registrationData.find((user) => user.keepSignIn);
    if (keepSignInUser) {
      console.log("KeepSignIn user found:", keepSignInUser);
      setTextContent(keepSignInUser);
    } else {
      console.log("No keepSignIn user found in registration data.");
    }
  }
});
