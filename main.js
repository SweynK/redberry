const token =
  "5480b24000ac6645b93bf1c26cef07f850b9d1d9ae264d6959a7879cfddebf70";

if (typeof document !== "undefined") {
  const cateogriesMenu = document.querySelector(".categories-menu");
  async function categriesData() {
    try {
      const headers = new Headers({
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      });
      const categoriesrResponse = await fetch(
        "https://api.blog.redberryinternship.ge/api/categories",
        {
          method: "GET",
          headers: headers,
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
      // form.removeEventListener("submit",form);
      loginBox.classList.remove("active");
      document.body.classList.remove("blur");
      document.querySelector(".main").style.backgroundColor = "#fcfcfd";
    });
    const formData = new FormData(form);
    console.log(formData.get("email"));
    const data = Object.fromEntries(formData);
    try {
      async function sentData() {
        const headers = new Headers({
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        });
        const resposne = await fetch(
          "https://api.blog.redberryinternship.ge/api/login",
          {
            method: "POST",
            headers: headers,
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

    async function getCategoriesData(){
      const blogs = document.querySelector(".blogs")
      try {
        const response = await fetch("https://api.blog.redberryinternship.ge/api/blogs",{
          method: "GET",
          headers:{
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        })
        const data = await response.json();
        console.log(data);
        data.data.forEach((el) => {
          const box = document.createElement("div");
          box.className = "blog-main"
          blogs.appendChild(box);
          const imgBox = document.createElement("img");
          imgBox.className = "box-img";
          imgBox.src = el.image;
          const p1 = document.createElement("p");
          p1.innerText = el.author;
          p1.className = "author-text";
          const span1 = document.createElement("span");
          span1.innerText = el.publish_date;
          span1.className = "date-span";
          const titleP = document.createElement("p");
          titleP.innerText = el.title;
          titleP.className="title-text";
          const divCategories = document.createElement("div");
          el.categories.forEach(el=>{
            const categoryP =document.createElement("p");
            categoryP.className ="category-text";
            categoryP.innerText = el.title;
            categoryP.style.backgroundColor = el.background_color;
            categoryP.style.color = el.text_color;
            divCategories.appendChild(categoryP);
          })
          const desctiptionP = document.createElement("p");
          desctiptionP.innerText = el.description;
          desctiptionP.className = "description-text";
          const fullBlogBtn = document.createElement("a");
          fullBlogBtn.href = "#";
          fullBlogBtn.innerHTML = "სრულად ნახვა &#8599;	"
          
          box.appendChild(imgBox);
          box.appendChild(p1);
          box.appendChild(span1);
          box.appendChild(titleP);
          box.appendChild(divCategories);
          box.appendChild(desctiptionP);
          box.appendChild(fullBlogBtn);


          
  
        });
        
         
      } catch (error) {
        console.log(error);
      }
    }
    getCategoriesData();
  });
}
