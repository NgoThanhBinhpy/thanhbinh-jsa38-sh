import { checkLoginStatus } from "./checkLoginStatus.js";
import { showToast, getRegistrationData } from "./utils.js";
const signinForm = document.getElementById("formSignin");
const inputName = document.getElementById("inputName");
const inputPassword = document.getElementById("inputPassword");
const inputPasswordConfirm = document.getElementById("inputPasswordConfirm");
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

/**
 * @param {Array} arr
 * @param {Object} obj
 * @returns {string|null}
 */
const findKeyByValue = (arr, obj) => {
  for (let i = 0; i < arr.length; i++) {
    if (JSON.stringify(arr[i]) === JSON.stringify(obj)) {
      return `registrationData_${i}`; // Assuming keys are in the format "registrationData_<index>"
    }
  }
  return null;
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

  if (!inputName.value || !inputPassword.value || !inputPasswordConfirm.value) {
    showToast("danger", "Vui lòng điền tất cả thông tin!");
    return;
  }

  if (inputPassword.value !== inputPasswordConfirm.value) {
    showToast("danger", "Mật khẩu không khớp!");
    return;
  }

  const name = inputName.value.trim();
  const password = inputPassword.value;

  const registrationData = getRegistrationData();
  const user = registrationData.find(
    (user) => user.name === name && user.password === password,
  );

  if (name === admin_account.name && password === admin_account.password) {
    showToast("success", "Đăng nhập với tài khoản admin!");
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        name: admin_account.name,
        role: "admin",
      }),
    );
    window.location.href = "../index.html";
    checkLoginStatus(admin_account.name);
    return;
  }

  if (user) {
    showToast("success", "Đăng nhập thành công!");
    clearKeepSignIn();
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        name: user.name,
        email: user.email,
        role: "user",
      }),
    );
    if (gridcheck.checked) {
      user.keepSignIn = true;
      const key = findKeyByValue(registrationData, user);
      if (key) {
        localStorage.setItem(key, JSON.stringify(user));
      } else {
        console.error("Không tìm thấy key cho người dùng:", user);
      }
    }
    window.location.href = "../index.html";
    checkLoginStatus(user.name);
  } else {
    showToast("danger", "Tên đăng nhập hoặc mật khẩu không đúng!");
  }
});

function test() {
  inputName.value = "Ngô Thanh Bình";
  inputPassword.value = "QWE123!@#";
  inputPasswordConfirm.value = "QWE123!@#";
}
function adminTest() {
  inputName.value = "admin";
  inputPassword.value = "Admin@123";
  inputPasswordConfirm.value = "Admin@123";
}
window.test = test;
window.adminTest = adminTest;
