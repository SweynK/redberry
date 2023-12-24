////////////////////
// add blog  valifation
const token =
  "5480b24000ac6645b93bf1c26cef07f850b9d1d9ae264d6959a7879cfddebf70";
if (document !== "undefined") {
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
    authorInput.style.border = "1px solid green";
    return true;
  }

  function checkTitle() {
    if (!(titleInput.value.trim().length > 1)) {
      errorTitle.style.color = "#EA1919";
      return false;
    }
    errorTitle.style.color = "#14D81C";
    titleInput.style.border = "1px solid green";
    return true;
  }

  function checkDescription() {
    if (!(descriptionInput.value.trim().length > 1)) {
      errorDescription.style.color = "#EA1919";
      return false;
    }
    errorDescription.style.color = "#14D81C";
    descriptionInput.style.border = "1px solid green";
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
    const pattern = /^.+@redberry\.ge$/;
    let emailInput = mailInput.value;
    if (!emailInput.match(pattern)) {
      mailInput.style.borderColor = "#EA1919";
      mailError.textContent = "მეილი უნდა მთავრდებოდეს @redberry.ge-ით";
      mailError.style.color = "#EA1919";
      mailError.style.fontSize = "12px";
      return false;
    }
    // mailError.textContent = "";
    mailInput.style.border = "1px solid green";
    return true;
  }

  authorInput.addEventListener("input", () => {
    checkName();
  });

  titleInput.addEventListener("input", () => {
    checkTitle();
  });
  descriptionInput.addEventListener("input", () => {
    checkDescription();
  });
  mailInput.addEventListener("input", () => {
    checkMail();
  });

  const form = document.querySelector(".blog-form");
  form.addEventListener("mousemove", () => {
    if (checkName() && checkTitle() && checkDescription() && checkMail()) {
      sendBtn.style.backgroundColor = "#5D37F3";
      mailError.style.opacity = "0%";
    }
  });

  categoriesInput.addEventListener("click",()=>{
    categoriesInput.style.height = "100px";
    const categoriesValues = document.querySelector(".hide");
    categoriesValues.style.display = "block";
    
  async function getCategoriesData(){
    try {
      const response = await fetch("https://api.blog.redberryinternship.ge/api/categories",{
        method: "GET",
        headers:{
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      })
      const data = await response.json();
      
      // console.log(data)
      
      
      data.data.forEach((el) => {
        const option = document.createElement("option");
        // console.log(el);
        option.value = el.id;
        option.text = el.title;
        option.style.backgroundColor = el.background_color;
        option.style.color = el.text_color;
        option.className = "categories-option";
        categoriesInput.appendChild(option);

      });
      const option = document.querySelector("option")
      // option.addEventListener("click",()=>{
        
        
      // })
      
      
      
    } catch (error) {
      console.log(error);
    }
  }
  getCategoriesData();
  })
  
  


  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkName() && checkTitle() && checkDescription() && checkMail()) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      console.log(data);

      try {
        async function sendBlogData() {
          const response = await fetch(
            "https://api.blog.redberryinternship.ge/api/blogs",
            {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          console.log(response.status);

          if (!response.ok)
            throw new Error("failed to add blog", response.status);
        }
        sendBlogData();
      } catch (error) {
        console.log(error);
      }
      async function getdata() {
        const response = await fetch(
          "https://api.blog.redberryinternship.ge/api/blogs",
          {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        // console.log(data);
        
        
      }
      getdata();
    }
  });




  
}
