import { showToast, createNavbar, getCurrentUser } from "./utils.js";

const currentUser = getCurrentUser();
if (!currentUser) window.location.href = "./signin.html";

const isAdmin = currentUser[1]?.role === "admin";
const user = currentUser[1];

document.getElementById("inputName").value = user.name;
document.getElementById("inputEmail").value = user.email;
document.getElementById("inputGender").value = user.gender;

flatpickr("#inputDOB", { dateFormat: "d/m/Y", allowInput: true });
document.getElementById("inputDOB").value = user.dob;

document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (isAdmin) {
    showToast("danger", "Cannot modify admin account");
    return;
  }

  const oldPassword = document.getElementById("inputOldPassword").value;
  const newPassword = document.getElementById("inputNewPassword").value;

  user.email = document.getElementById("inputEmail").value;
  user.gender = document.getElementById("inputGender").value;
  user.dob = document.getElementById("inputDOB").value;

  if (oldPassword && newPassword) {
    if (oldPassword !== user.password) {
      showToast("danger", "Old password is incorrect!");
      return;
    }
    if (
      !(
        newPassword.length >= 8 &&
        /[a-zA-Z]/.test(newPassword) &&
        /[0-9]/.test(newPassword) &&
        /[^a-zA-Z0-9]/.test(newPassword)
      )
    ) {
      showToast(
        "danger",
        "The new password must be at least 8 characters long and contain numbers and special characters.",
      );
      return;
    }
    user.password = newPassword;
  }

  localStorage.setItem(currentUser[0], JSON.stringify(user));
  sessionStorage.setItem(
    "user",
    JSON.stringify({
      name: user.name,
      email: user.email,
      role: "user",
      originalKey: currentUser[0],
    }),
  );
  if (oldPassword && newPassword)
    showToast("success", "Password changed successfully!");
  else showToast("success", "User information changed successfully!");

  document.getElementById("inputOldPassword").value = "";
  document.getElementById("inputNewPassword").value = "";
});

createNavbar();
