const token =
  "0a26910cca62446d7e9d0ec5edccb9a8c9926456aa21d1eedb4a5cd009170b72";

if (typeof document !== "undefined") {
  const cateogriesMenu = document.querySelector(".categories-menu");
  async function categriesData() {
    try {
      const categoriesrResponse = await fetch(
        "https://api.blog.redberryinternship.ge/api/categories",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(categoriesrResponse.status);
      if (!categoriesrResponse.ok) {
        throw new Error("can't get resposne");
      }
      const categoryData = await categoriesrResponse.json();
      categoryData.data.forEach((element) => {
        const button = document.createElement("button");
        button.textContent = element.title;
        button.style.backgroundColor = element.background_color;
        button.style.color = element.text_color;
        button.className = "categories-btn";
        cateogriesMenu.appendChild(button);
      });

      //   console.log(categoryData.data);
    } catch (error) {
      console.log(error);
    }
  }
  categriesData();

  //////
  //login
  ////

  const form = document.querySelector(".login-container");
  const email = document.querySelector(".input-mail");
  const emailLabel = document.querySelector(".email-label");
  // const emailForm = document.querySelector(".login-container");
  const errorMsg = document.querySelector(".error-msg");
  const errorIcon = document.querySelector(".error-icon");
  const checkmark = document.querySelector(".checkmark-icon");
  const loginBtn2 = document.querySelector(".btn-login2");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("blalba");
    const pattern = /^.+@redberry\.ge$/;
    let emailInput = email.value;
    if (!emailInput.match(pattern)) {
      errorIcon.classList.add("active-errors");
      errorMsg.classList.add("active-errors");
      email.style.borderColor = "#EA1919";
      return false;
    }
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
    const formData = new FormData(form);
    console.log(formData.get("email"));
    const data = Object.fromEntries(formData);
    try {
      async function sentData() {
        const resposne = await fetch(
          "https://api.blog.redberryinternship.ge/api/login",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!resposne.ok) {
          throw new Error("Failed to POST data");
        }
      }
      sentData();
    } catch (error) {
      console.log(error);
    }
  });
}
