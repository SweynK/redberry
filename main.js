const token =
  "ca9eee89738ce244876449c49f295516ad5c8870414d14d209303a11f96d16db";

if (typeof document !== "undefined") {
  const cateogriesMenu = document.querySelector(".categories-menu");
  const headers = new Headers({
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  });
  async function categriesData() {
    try {
      const categoriesrResponse = await fetch(
        "https://api.blog.redberryinternship.ge/api/categories",
        {
          method: "GET",
          headers: headers,
        }
      );
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

  const loginBtn = document.querySelector(".btn-login2");
  const loginInput = document.querySelector(".input-mail").value;
  const form = document.querySelector(".login-container");

  //   form.addEventListener("submit", (e) => {
  //     console.log(loginInput);

  //     e.preventDefault();
  //     try {
  //       async function userLogin() {
  //         const response = await fetch(
  //           "https://api.blog.redberryinternship.ge/api/login",
  //           {
  //             method: "POST",
  //             headers: headers,
  //             body: JSON.stringify({ email: loginBtn }),
  //           }
  //         );

  //         console.log(await response.json());
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! Status: ${response.status}`);
  //         }
  //       }
  //       userLogin();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
}
