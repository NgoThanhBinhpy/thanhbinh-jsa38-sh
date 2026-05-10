const registerForm = document.getElementById("formRegister");
const passwordInput = document.getElementById("inputPassword");
const emailInput = document.getElementById("inputEmail");
const genderInput = document.getElementById("inputGender");
const nameInput = document.getElementById("inputName");
const phoneInput = document.getElementById("inputPhone");
const dobInput = document.getElementById("inputDOB");
const addressInput = document.getElementById("inputAddress");
const stateInput = document.getElementById("inputState");
const gridCheckInput = document.getElementById("gridCheck");

flatpickr("#inputDOB", {
  dateFormat: "d/m/Y", // dd/mm/yyyy
  allowInput: true,
});

import { showToast, getRegistrationData } from "./utils.js";

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  registerForm.classList.add("was-validated");

  if (
    !emailInput.value ||
    !nameInput.value ||
    !addressInput.value ||
    !phoneInput.value ||
    !dobInput.value ||
    !stateInput.value ||
    !passwordInput.value ||
    !genderInput.value
  ) {
    console.log("Vui lòng điền đầy đủ thông tin!");
    showToast("danger", "Vui lòng điền đầy đủ thông tin!");
    return;
  }
  if (!gridCheckInput.checked) {
    console.log("Vui lòng đồng ý với các điều khoản!");
    showToast("danger", "Vui lòng đồng ý với các điều khoản!");
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
      "Mật khẩu phải dài ít nhất 8 ký tự và chứa chữ số, ký tự đặc biệt.",
    );
    return;
  }

  console.log("inputValue:", {
    password: passwordInput.value,
    email: emailInput.value,
    name: nameInput.value,
    gender: genderInput.value,
    phone: phoneInput.value,
    dob: dobInput.value,
    address: addressInput.value,
    state: stateInput.value,
  });

  var currentId = 0;
  currentId = localStorage.length || 0;

  const registrationStorageData = getRegistrationData();
  if (registrationStorageData.length > 0) {
    const existingUser = registrationStorageData.find(
      (curr) => curr.name === nameInput.value,
    );
    if (existingUser) {
      console.log("Tài khoản đã tồn tại.");
      showToast("danger", "Tài khoản đã tồn tại");
      return;
    }
  }
  var registrationData = {
    id: currentId,
    password: passwordInput.value,
    email: emailInput.value,
    name: nameInput.value,
    gender: genderInput.value,
    phone: phoneInput.value,
    dob: dobInput.value,
    address: addressInput.value,
    state: stateInput.value,
    keepSignIn: false,
  };
  console.log("CurrentId:", currentId);
  currentId += 1;
  console.log("Dữ liệu đăng ký:", registrationData);
  localStorage.setItem(
    "registrationData_" + registrationData.id,
    JSON.stringify(registrationData),
  );
  console.log("Đăng ký thành công!");
  showToast("success", "Đăng ký thành công!");
  registerForm.classList.remove("was-validated");
  registerForm.reset();
});

function test() {
  passwordInput.value = "QWE123!@#";
  emailInput.value = "thanhbinh.progame@gmail.com";
  nameInput.value = "Ngô Thanh Bình";
  genderInput.value = "Nam";
  phoneInput.value = "0909123456";
  dobInput.value = "01/01/2004";
  addressInput.value = "123 Đường ABC, Phường XYZ, Quận 1, TP.HCM";
  stateInput.value = "TP Hồ Chí Minh";
  gridCheckInput.checked = true;
}
