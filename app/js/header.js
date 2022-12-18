let city = document.querySelector(".header__inner-top__city-location");
let modal = document.querySelector(".header__inner-top__city-modal");
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

//   <div class="header__inner-top__city-modal__item" data-type="country" id="all">
// Московская область
// </div>

const onShowModal = () => {
  modal.classList.toggle("toggle");

  if (!modal.getAttribute("class").includes("toggle")) {
    for (let i = 0; i < ariasData.length; i++) {
    const area = document.createElement('div');
    area.className = 'header__inner-top__city-modal__item';
    area.id = 'all';
    area.setAttribute('data-type', 'country');
    area.textContent = 'Россия';
    areasList.appendChild(area); 
      if (ariasData[i].cities) {
        
      }
    }
  }

};
city.onclick = onShowModal;
