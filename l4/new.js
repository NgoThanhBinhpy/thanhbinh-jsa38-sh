const form1 = document.getElementById("form1");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(fname.value);
  console.log(lname.value);
});
