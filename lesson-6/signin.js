const signInForm = document.getElementById("formSignIn");
const passwordInput = document.getElementById("inputPassword");
const nameOrEmailInput = document.getElementById("inputNameOrEmail");

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

signInForm.addEventListener("submit", function (event) {
  event.preventDefault();
  signInForm.classList.add("was-validated");

  if (!nameOrEmailInput.value || !passwordInput.value) {
    console.log("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  const registrationStorageData = getRegistrationData();

  const matchingUser = registrationStorageData.find(
    (user) =>
      (user.email === nameOrEmailInput.value ||
        user.name === nameOrEmailInput.value) &&
      user.password === passwordInput.value,
  );

  if (!matchingUser) {
    console.log("Tên đăng nhập hoặc mật khẩu không đúng!");
    return;
  }
  if (matchingUser) {
    sessionStorage.setItem("currentUser", JSON.stringify(matchingUser));
  }

  console.log("Đăng nhập thành công!");
  signInForm.classList.remove("was-validated");
  signInForm.reset();
});

function test() {
  nameOrEmailInput.value = "test@example.com";
  passwordInput.value = "password123";
}
