document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".search-used .search-link").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(".search-bar__input").value = item.textContent;
    });
  });

  document.querySelectorAll(".vacancies-actual__vacancy").forEach((button) => {
    button.addEventListener("click", function () {
      document
        .querySelector(".vacancies-actual__vacancy.active")
        ?.classList.remove("active");
      this.classList.add("active");
    });
  });

  const modal = document.getElementById("vacancyModal");
  const closeButton = document.querySelector(".vacancy-modal__close");

  document.querySelectorAll(".open-modal-btn").forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.remove("vacancy-modal__hidden");
      document.body.classList.add("modal-open");
    });
  });

  const closeModal = () => {
    modal.classList.add("vacancy-modal__hidden");
    document.body.classList.remove("modal-open");
  };

  //валидация модалки
  const validateForm = function(formData){
    const errors = {};
    let isValid = true;

    for(let field in formData){
      let value = formData[field];
      let fieldIsValid = true;
      
      if (typeof value === "string") {
        fieldIsValid = value.trim() !== "";
      }

      if (field === "email") {
        fieldIsValid = /^\S+@\S+\.\S+$/.test(value);
      }

      if (field === "phone") {
        fieldIsValid = /^\d{10,15}$/.test(value);
      }

      if (field === "file") {
        fieldIsValid = value instanceof File && value.size > 0;
      }

      if (!fieldIsValid) {
        isValid = false;
      }
      errors[field] = fieldIsValid;
    }
    return { errors, isValid };
  };

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  [
    { selector: "#selectJob", placeholder: "Желаемая должность" },
    { selector: "#selectNationality", placeholder: "Гражданство" },
    { selector: "#selectExp", placeholder: "Опыт работы в желаемой должности" },
  ].forEach(({ selector, placeholder }) => {
    new SlimSelect({
      select: selector,
      settings: { showSearch: false, placeholderText: placeholder },
      cssClasses: { option: "primary-option" },
    });
  });

  Object.entries({
    "--ss-spacing-s": "5px",
    "--ss-spacing-m": "5px",
    "--ss-disabled-color": "#9DDAFE",
    "--ss-spacing-l": "0",
    "--ss-content-height": "158px",
    "--ss-font-color": "#34B3EB",
    "--ss-border-radius": "10px",
  }).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });

  const fileInput = document.getElementById("fileInput");
  const uploadBtn = document.getElementById("uploadBtn");
  const fileText = document.getElementById("fileText");
  const form = document.querySelector(".vacancy-modal__form");

  //сабмит формы
  form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    let isValid = validateForm(formObject).isValid;

    if(isValid == true){
      modal.classList.add("vacancy-modal__hidden");
      document.body.classList.remove("modal-open");
      e.target.submit(); // - раскомментировать
    } else{
      e.preventDefault(); //- раскомментировать
      for(let field in validateForm(formObject).errors){
        const input = form.querySelector(`[name="${field}"]`);

        if(input){
          if(!validateForm(formObject).errors[field]){
            if(["nationality", "position", "experience"].includes(input.name)){
              input.nextElementSibling.classList.add('error');
            }
            else if(input.name === "file"){
              uploadBtn.classList.add("error");
            }
            else{
              input.classList.add("error");
            }
          }
        }
      }
    }
  });

  uploadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fileInput.click();
  });

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      fileText.textContent = `Добавлено ${fileInput.files.length} файлов`;
      uploadBtn.classList.add("vacancy-modal__resume--added");
    }
  });
});