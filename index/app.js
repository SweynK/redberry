const loginBtn = document.querySelector(".btn-login");
const loginBox = document.querySelector(".login-container");
const backIcon = document.querySelector(".close-circle");
const loginTxt = document.querySelector(".login-text");
const addblogBtn = document.querySelector(".btn-addblog");

loginBtn.addEventListener("click", () => {
  loginBox.classList.add("active");
  document.body.classList.add("blur");
  document.querySelector(".main").style.backgroundColor = "#d3d3d4";
});
backIcon.addEventListener("click", () => {
  document.body.classList.remove("blur");
  loginBox.classList.remove("active");
  document.querySelector(".main").style.backgroundColor = "#fcfcfd";
});

//////
//////
