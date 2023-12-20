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

const email = document.querySelector(".input-mail");
const emailLabel = document.querySelector(".email-label");
const emailForm = document.querySelector(".login-container");
const errorMsg = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".error-icon");
const checkmark = document.querySelector(".checkmark-icon");
const loginBtn2 = document.querySelector(".btn-login2");

//login form

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const pattern = /^.+@redberry\.com$/;
  let emailInput = email.value;
  if (!emailInput.match(pattern)) {
    errorIcon.classList.add("active-errors");
    errorMsg.classList.add("active-errors");
    email.style.borderColor = "#EA1919";
  } else {
    errorIcon.classList.remove("active-errors");
    errorMsg.classList.remove("active-errors");

    loginTxt.innerText = "წარმატებული ავტორიზაცია";
    loginBtn2.innerText = "კარგი";
    checkmark.style.display = "block";
    email.style.display = "none";
    emailLabel.style.display = "none";
    loginBtn.style.display = "none";
    addblogBtn.style.display = "block";
    loginBtn2.addEventListener("click", () => {
      loginBox.classList.remove("active");
      document.body.classList.remove("blur");
      document.querySelector(".main").style.backgroundColor = "#fcfcfd";
    });
  }
});

// gategories response

// async function categriesData() {
//   try {
//     const categoriesrResponse = await fetch(
//       "https://api.blog.redberryinternship.ge/api/categories"
//     );
//     if (!categoriesrResponse.ok) {
//       throw new Error("can't get resposne");
//     }
//     const categoryData = await categoriesrResponse.json();

//     console.log(categoryData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// categriesData();
