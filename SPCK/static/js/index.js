import { getRegistrationData, checkLoginStatus } from "./utils.js";

const storedUsername = localStorage.getItem("Username");
console.log("StoredUsername:", storedUsername);

document.addEventListener("DOMContentLoaded", () => {
  if (storedUsername) {
    checkLoginStatus(storedUsername);
  } else {
    checkLoginStatus(null);
  }
});

const textElement = document.getElementById("typing-animation");
const phrases = [
  "Học tập không giới hạn",
  "Chinh phục mọi kỳ thi",
  "Khám phá tri thức mới",
  "Nâng tầm kỹ năng số",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 120;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50; // Xóa nhanh hơn gõ
  } else {
    // Gõ chữ
    textElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 120;
  }

  // Logic chuyển câu
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typeSpeed = 2000; // Nghỉ 2s sau khi gõ xong câu
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 500; // Nghỉ một chút trước khi gõ câu mới
  }

  setTimeout(type, typeSpeed);
}

// Bắt đầu hiệu ứng
document.addEventListener("DOMContentLoaded", type);
