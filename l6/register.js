const registerForm = document.getElementById("formRegister");
const passwordInput = document.getElementById("inputPassword");
const passwordConfirmInput = document.getElementById("inputConfirmPassword");
const emailInput = document.getElementById("inputEmail");
const nameInput = document.getElementById("inputName");

function getRegistrationData() {
  const registrationData = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("registrationData_")) {
      const item = localStorage.getItem(key);
      if (item) {
        registrationData.push(JSON.parse(item));
      }
    }
  }
  return registrationData;
}

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  registerForm.classList.add("was-validated");

  if (
    !emailInput.value ||
    !nameInput.value ||
    !passwordInput.value ||
    !passwordConfirmInput.value
  ) {
    console.log("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  if (passwordInput.value !== passwordConfirmInput.value) {
    console.log("Mật khẩu xác nhận không khớp!");
    return;
  }

  const registrationStorageData = getRegistrationData();
  var currentId =
    registrationStorageData.length > 0
      ? Math.max(...registrationStorageData.map((user) => user.id)) + 1
      : 0;
  if (registrationStorageData.length > 0) {
    const existingUser = registrationStorageData.find(
      (curr) => curr.name === nameInput.value,
    );
    if (existingUser) {
      console.log("Tài khoản đã tồn tại.");
      return;
    }
  }
  var registrationData = {
    id: currentId,
    password: passwordInput.value,
    email: emailInput.value,
    name: nameInput.value,
  };
  currentId += 1;
  localStorage.setItem(
    "registrationData_" + registrationData.id,
    JSON.stringify(registrationData),
  );
  console.log("Đăng ký thành công!");
  registerForm.classList.remove("was-validated");
  registerForm.reset();
});

function test() {
  emailInput.value = "test@example.com";
  nameInput.value = "Test User";
  passwordInput.value = "password123";
  passwordConfirmInput.value = "password123";
}
