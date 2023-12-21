////////////////////
// add blog  valifation
const authorInput = document.querySelector("#author");
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const dateInput = document.querySelector("#publish_date");
const categoriesInput = document.querySelector("#categories");
const mailInput = document.querySelector("#email");
const ulMsgs = document.querySelector("ul");
const firstLi = document.querySelector("li:nth-child(1)");
const secondLi = document.querySelector("li:nth-child(2)");
const thirdLi = document.querySelector("li:nth-child(3)");
const sendBtn = document.querySelector(".btn-blog");
const errorTitle = document.querySelector("#error-title");
const errorDescription = document.querySelector("#error-description");
const imgInput = document.querySelector("#upload");
const photoName = document.querySelector(".photo-name");
const mailError = document.querySelector(".mail-error");

/////image input
const uploadLabel = document.querySelector(".upload-label");
const chooseText = document.querySelector(".choose-text");
const uploadIcon = document.querySelector(".fa-cloud-upload");
const uploadedIcon = document.querySelector(".img-icon");
imgInput.addEventListener("change", () => {
  if (imgInput.files.length > 0) {
    const selectedImg = imgInput.files[0];
    photoName.textContent = selectedImg.name;
    uploadLabel.style.height = "56px";
    uploadLabel.style.display = "flex";
    uploadLabel.style.flexDirection = "row";
    uploadLabel.style.justifyContent = "flex-start";
    uploadLabel.style.border = "none";
    chooseText.style.display = "none";
    uploadIcon.style.display = "none";
    uploadedIcon.style.display = "block";
  }
});

//////
let trySubmit = false;
// #EA1919 red
// #14D81C green

function checkName() {
  let clearStr = authorInput.value.replace(/\s+/g, "");
  if (!(authorInput.value.trim().length > 3)) {
    firstLi.style.color = "#EA1919";
    return false;
  }
  if (!(authorInput.value.trim().split(" ").length > 1)) {
    firstLi.style.color = "#14D81C";
    secondLi.style.color = "#EA1919"; //red
    return false;
  }
  if (!clearStr.match(/^[\u10A0-\u10FF]+$/)) {
    secondLi.style.color = "#14D81C";
    thirdLi.style.color = "#EA1919";
    return false;
  }
  firstLi.style.color = "#14D81C";
  secondLi.style.color = "#14D81C";
  thirdLi.style.color = "#14D81C";
  return true;
}

function checkTitle() {
  if (!(titleInput.value.trim().length > 1)) {
    errorTitle.style.color = "#EA1919";
    return false;
  }
  errorTitle.style.color = "#14D81C";
  return true;
}

function checkDescription() {
  if (!(descriptionInput.value.trim().length > 1)) {
    errorDescription.style.color = "#EA1919";
    return false;
  }
  errorDescription.style.color = "#14D81C";
  return true;
}

function checkDate() {
  let enteredDate = dateInput.value;
  let parsedDate = new Date(enteredDate);
  let dateNow = new Date();
  function todayTime() {
    if (!isNaN(dateNow)) {
      let day = dateNow.getDate();
      day = day < 10 ? "0" + day : day;
      let month = dateNow.getMonth() + 1;
      month = month < 10 ? "0" + month : month;
      const year = dateNow.getFullYear();

      const resultDate = `${month}/${day}/${year}`;
      return resultDate;
    }
  }
  function enteredTime() {
    if (!isNaN(parsedDate)) {
      let day = parsedDate.getDate();
      day = day < 10 ? "0" + day : day;
      let month = parsedDate.getMonth() + 1;
      month = month < 10 ? "0" + month : month;
      const year = parsedDate.getFullYear();

      const resultDate = `${month}/${day}/${year}`;
      return resultDate;
    }
  }
  // if (enteredTime() < todayTime()) {
  //   dateInput.style.borderColor = "#EA1919";
  //   return false;
  // }
  // dateInput.style.borderColor = "#14D81C";
  // return true;
}

function checkMail() {
  const pattern = /^.+@redberry\.com$/;
  let emailInput = mailInput.value;
  if (!emailInput.match(pattern)) {
    mailInput.style.borderColor = "#EA1919";
    mailError.textContent = "მეილი უნდა მთავრდებოდეს @redberry.ge-ით";
    mailError.style.color = "#EA1919";
    mailError.style.fontSize = "12px";
    return false;
  }
  mailError.textContent = "";
  mailInput.style.border = "1px solid green";
  return true;
}
mailInput.addEventListener("input", () => {
  if (trySubmit) {
    checkMail();
  }
});

authorInput.addEventListener("input", () => {
  if (trySubmit) {
    checkName();
  }
});
titleInput.addEventListener("input", () => {
  if (trySubmit) {
    checkTitle();
  }
});
descriptionInput.addEventListener("input", () => {
  if (trySubmit) {
    checkDescription();
  }
});

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!trySubmit) {
    trySubmit = true;
  }
  checkName();
  checkTitle();
  checkDescription();
  checkMail();
  // checkDate();
});

// let str = "giorgi   sdsd sdsd";
// console.log("test", str.trim().split(" ").length);
