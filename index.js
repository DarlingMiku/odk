document.querySelectorAll(".search-used .search-link").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.querySelector(".search-bar__input");
    input.value = this.textContent;  // Убираем лишнее обнуление
    document.getElementById("searchButton").click();
  });
});

document.querySelectorAll(".vacancies-actual__vacancy").forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelectorAll(".vacancies-actual__vacancy").forEach((btn) => {
      btn.classList.remove("active");
    });
    this.classList.add("active");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("vacancyModal");
  const closeButton = document.querySelector(".vacancy-modal__close");


  document.querySelectorAll(".open-modal-btn").forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.remove("vacancy-modal__hidden");
    });
  });

  closeButton.addEventListener("click", () => {
    modal.classList.add("vacancy-modal__hidden");
  });


  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("vacancy-modal__hidden");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const selectElements = [
    { selector: "#selectJob", placeholder: "Желаемая должность" },
    { selector: "#selectNationality", placeholder: "Гражданство" },
    { selector: "#selectExp", placeholder: "Опыт работы в желаемой должности" },
  ];

  selectElements.forEach(({ selector, placeholder }) => {
    new SlimSelect({
      select: selector,
      settings: {
        showSearch: false,
        placeholderText: placeholder,
      },
      cssClasses: { option: "primary-option" },
    });
  });
});


const styleProperties = {
  "--ss-spacing-s": "5px",
  "--ss-spacing-m": "5px",
  "--ss-disabled-color": "#9DDAFE",
  "--ss-spacing-": "5px",
  "--ss-spacing-l": "0",
  "--ss-content-height": "158px",
  "--ss-font-color": "#34B3EB",
  "--ss-border-radius": "10px",
};

Object.entries(styleProperties).forEach(([key, value]) => {
  document.documentElement.style.setProperty(key, value);
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".vacancy-modal__form");
  const uploadBtn = document.getElementById("uploadBtn");
  const fileInput = document.getElementById("fileInput");
  const fileText = document.getElementById("fileText");

  form.addEventListener("submit", (event) => event.preventDefault());

  uploadBtn.addEventListener("click", (event) => {
    event.preventDefault();
    fileInput.click();
  });

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      fileText.textContent = `Добавлено ${fileInput.files.length} файлов`;
      uploadBtn.classList.add("vacancy-modal__resume--added");
    }
  });
});
