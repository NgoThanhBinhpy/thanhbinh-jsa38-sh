import { getRegistrationData, checkLoginStatus } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const storedUser = sessionStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  checkLoginStatus(user);
});
