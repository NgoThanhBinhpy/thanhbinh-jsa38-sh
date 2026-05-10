import { showToast } from "./utils.js";

const formContact = document.getElementById("formContact");
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputMessage = document.getElementById("inputMessage");

formContact.addEventListener("submit", function (event) {
  event.preventDefault();
  formContact.classList.add("was-validated");

  if (
    inputName.value.trim() === "" ||
    inputEmail.value.trim() === "" ||
    inputMessage.value.trim() === ""
  ) {
    console.log("Vui lòng điền đầy đủ thông tin liên hệ.");
    showToast("danger", "Vui lòng điền đầy đủ thông tin liên hệ.");
    return;
  }

  var contactData = {
    name: inputName.value.trim(),
    email: inputEmail.value.trim(),
    message: inputMessage.value.trim(),
  };
  localStorage.setItem(
    "contactData_" + Date.now(),
    JSON.stringify(contactData),
  );
  console.log("Dữ liệu liên hệ đã được ghi lại:", contactData);
  showToast("success", "Feedback của bạn đã được ghi lại");
  formContact.classList.remove("was-validated");
  formContact.reset();
});

function test() {
  inputName.value = "Ngô Thanh Bình";
  inputEmail.value = "thanhbinh.progame@gmail.com";
  inputMessage.value = "Xin chào, tôi muốn liên hệ với bạn về...";
}
window.test = test;
