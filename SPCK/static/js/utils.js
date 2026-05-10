/**
 * @param {string} type
 * @param {string} message
 */
export function showToast(type, message) {
  let toastId = type === "success" ? "toastSuccess" : "toastDanger";
  let toastBodyId = type === "success" ? "toastSuccessBody" : "toastDangerBody";
  const toast = document.getElementById(toastId);
  const toastBody = document.getElementById(toastBodyId);
  toastBody.textContent = message;
  const toastInstance = new bootstrap.Toast(toast);
  toastInstance.show();
}

/**@returns {Array<{id: number, password: string, email: string, name: string, gender: string, phone: string, dob: string, address: string, state: string, keepSignIn: boolean}>} */
export function getRegistrationData() {
  const registrationData = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("registrationData_")) {
      const data = JSON.parse(localStorage.getItem(key));
      registrationData.push(data);
    }
  }
  return registrationData;
}

export function reoganizeRegistrationDataId() {
  const registrationData = getRegistrationData();
  registrationData.map((data, index) => {
    data.id = index;
    localStorage.setItem("registrationData_" + index, JSON.stringify(data));
  });
}

export function checkLoginStatus(user) {
  const registrationData = getRegistrationData();
  const keepSignedInUser = registrationData.find((user) => user.keepSignIn);
  return keepSignedInUser;
}
