let city = document.querySelector(".header__inner-top__city-location");
let modal = document.querySelector(".header__inner-top__city-modal");
const selectedAll = document.querySelector(
  ".header__inner-top__city-modal__selected"
);
let inputModal = document.querySelector(".header__inner-top__city-modal__input");
let clearInput = document.querySelector(
  ".header__inner-top__city-modal__clear"
);
const areasList = document.querySelector(
  ".header__inner-top__city-modal__items"
);
let selectMod = document.querySelector(
  ".header__inner-top__city-modal__select"
);

const ariasData = [
  {
    name: "Россия",
    type: "country",
    id: "all",
    class: "",
  },
  {
    name: "Алтайский край",
    id: 24,
    type: "area",
    class: "",
    cities: [
      {
        name: "Барнаул",
        id: 15,
        state_id: 24,
        class: "",
      },
      {
        name: "Бийск",
        id: 16,
        state_id: 24,
        class: "",
      },
      {
        name: "Благовещенка",
        id: 1595,
        state_id: 24,
        class: "",
      },
      {
        name: "Волчиха",
        id: 1659,
        state_id: 24,
        class: "",
      },
      {
        name: "Камень-на-Оби",
        id: 631,
        state_id: 24,
        class: "",
      },
      {
        name: "Новоалтайск",
        id: 632,
        state_id: 24,
        class: "",
      },
      {
        name: "Родино",
        id: 1593,
        state_id: 24,
        class: "",
      },
    ],
  },
];

document.querySelector(".header__inner-top__city-modal__settlement").oninput =
  function () {
    let inputCity = this.value.trim();
    let modalItem = document.querySelectorAll(
      ".header__inner-top__city-modal__item"
    );

    if (inputCity !== "") {
      modalItem.forEach((item) => {
        if (item.innerText.search(inputCity) === -1) {
          item.classList.add("hide");
          item.innerHTML = item.innerText;
        } else {
          item.classList.remove("hide");
          let str = item.innerText;
          item.innerHTML = inserMark(
            str,
            item.innerText.search(inputCity),
            inputCity.length
          );
        }
      });
    } else {
      modalItem.forEach((item) => {
        item.classList.remove("hide");
        item.innerHTML = item.innerText;
      });
    }
    if (inputCity.length) {
    const imageInput = document.createElement('img');
    imageInput.classList.add('header__inner-top__city-modal__close')
    imageInput.src = "../images/close.svg"
    inputModal.appendChild(imageInput)
    }
    imageInput.onclick = () => {
      inputCity.value = ""
    }
  };

function inserMark(string, pos, len) {
  return (
    string.slice(0, pos) +
    "<mark>" +
    string.slice(pos, pos + len) +
    "</mark>" +
    string.slice(pos + len)
  );
}

const onAddData = (e) => {
  const selectCiti = document.createElement("div");
  selectCiti.className ="header__inner-top__city-modal__select";
  const imageCiti = document.createElement("img");
  imageCiti.className = "header__inner-top__city-modal__select__clear";
  imageCiti.src = "../images/close-modal.svg";
  selectCiti.id = e.target.id;
  selectCiti.setAttribute("data-type", e.target.getAttribute('data-type'));
  e.target.getAttribute('data-type')
  selectCiti.textContent = e.target.textContent;
  selectCiti.appendChild(imageCiti);
  selectedAll.appendChild(selectCiti);
  imageCiti.onclick = () => {
    selectCiti.remove()
  }
};


let isModalOpen = false;
const onShowModal = () => {
  modal.classList.toggle("toggle");

  if (!modal.getAttribute("class").includes("toggle") && !isModalOpen) {
    for (let i = 0; i < ariasData.length; i++) {
      const area = document.createElement("div");
      area.className = "header__inner-top__city-modal__item";
      area.id = ariasData[i].id;
      area.setAttribute("data-type", ariasData[i].type);
      area.textContent = ariasData[i].name;
      areasList.appendChild(area);
      area.onclick = onAddData;
      if (ariasData[i].cities) {
        let cities = ariasData[i].cities;
        for (let j = 0; j < cities.length; j++) {
          const city = document.createElement("div");
          city.className = "header__inner-top__city-modal__item";
          city.id = cities[j].id;
          city.setAttribute("data-type", cities[j].type);
          city.textContent = cities[j].name;
          areasList.appendChild(city);
          city.onclick = onAddData;
        }
      }
    }
    isModalOpen = true;
  }
};

city.onclick = onShowModal;
