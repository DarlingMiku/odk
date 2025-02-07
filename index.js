document.querySelectorAll(".search-used .search-link").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    const input = document.querySelector(".search-bar__input");
    input.value = "";
    input.value = this.textContent;
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

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("vacancyModal");
  const closeButton = document.querySelector(".vacancy-modal__close");

  document.querySelectorAll(".open-modal-btn").forEach((button) => {
    button.addEventListener("click", function () {
      modal.classList.remove("vacancy-modal__hidden");
    });
  });

  closeButton.addEventListener("click", function () {
    modal.classList.add("vacancy-modal__hidden");
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.add("vacancy-modal__hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  new SlimSelect({
    select: "#selectJob",
    settings: {
      showSearch: false, // поиск
      placeholderText: "Желаемая должность", // холдер
    },
    cssClasses: {
      option: "primary-option",
    },
  });

  new SlimSelect({
    select: "#selectNationality",
    settings: {
      showSearch: false, // поиск
      placeholderText: "Гражданство", // холдер
    },
    cssClasses: {
      option: "primary-option",
    },
  });
});

