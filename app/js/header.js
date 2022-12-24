let city = document.querySelector(".header__inner-top__city-location");
let modal = document.querySelector(".header__inner-top__city-modal");
const selectedAll = document.querySelector(
  ".header__inner-top__city-modal__selected"
);

let clearInput = document.querySelector(
  ".header__inner-top__city-modal__clear"
);
const areasList = document.querySelector(
  ".header__inner-top__city-modal__items"
);
let selectMod = document.querySelector(
  ".header__inner-top__city-modal__select"
);

const btnModal = document.querySelector(".header__inner-top__city-modal__btn");
const scope = document.querySelector(".header__inner-top__city-scope");

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

let inputCity = document.querySelector(
  ".header__inner-top__city-modal__settlement"
);
inputCity.oninput = function () {
  let inputCityValue = this.value.trim();
  let modalItem = document.querySelectorAll(
    ".header__inner-top__city-modal__item"
  );

  if (inputCityValue !== "") {
    modalItem.forEach((item) => {
      if (item.innerText.search(inputCityValue) === -1) {
        item.classList.add("hide");
        item.innerHTML = item.innerText;
      } else {
        item.classList.remove("hide");
        let str = item.innerText;
        item.innerHTML = inserMark(
          str,
          item.innerText.search(inputCityValue),
          inputCityValue.length
        );
      }
    });
  } else {
    modalItem.forEach((item) => {
      item.classList.remove("hide");
      item.innerHTML = item.innerText;
    });
  }
  const imageInput = document.querySelector(
    ".header__inner-top__city-modal__close"
  );
  if (inputCityValue.length) {
    imageInput.style.display = "block";
  } else {
    imageInput.style.display = "none";
  }
  imageInput.onclick = () => {
    inputCity.value = "";
    imageInput.style.display = "none";
    modalItem.forEach((item) => {
      item.classList.remove("hide");
      item.innerHTML = item.innerText;
    });
  };
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

const onAddData = (e, item) => {
  const selectCiti = document.createElement("div");
  selectCiti.className = "header__inner-top__city-modal__select";
  const imageCiti = document.createElement("img");
  imageCiti.className = "header__inner-top__city-modal__select__clear";
  imageCiti.src = "../images/close-modal.svg";
  selectCiti.id = e.target.id;
  selectCiti.setAttribute("data-type", e.target.getAttribute("data-type"));
  e.target.getAttribute("data-type");
  selectCiti.textContent = e.target.textContent;
  selectCiti.appendChild(imageCiti);
  selectedAll.appendChild(selectCiti);
 
  item.onmouseup = () => {
    selectCiti.remove()
  }

  imageCiti.onclick = () => {
    selectCiti.remove();
    if (selectedAll.children.length === 0) {
      btnModal.classList.remove("active");
    }
  };
  btnModal.classList.add("active");
};

const onAddSelected = () => {
  let selectCitis = "";
  scope.slice(0, 18);
  if (selectedAll.children.length) {
    for (let i = 0; i < selectedAll.children.length; i++) {
      selectCitis += selectedAll.children[i].textContent + " ";
    }
  }
  scope.textContent = selectCitis;
};

btnModal.onclick = () => {
  onAddSelected()
  selectedAll.innerHTML = ''
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
      area.onclick = e => {
        const isAdd = area.getAttribute('data-add')
        if (isAdd) {
          area.setAttribute('data-add', '')
        }else{
           onAddData(e, area)
           area.setAttribute('data-add', 'true')
        }
       };
      if (ariasData[i].cities) {
        let cities = ariasData[i].cities;
        for (let j = 0; j < cities.length; j++) {
          const city = document.createElement("div");
          city.className = "header__inner-top__city-modal__item";
          city.id = cities[j].id;
          city.setAttribute("data-type", cities[j].type);
          city.textContent = cities[j].name;
          areasList.appendChild(city);
          city.onclick = e => {
            const isAdd = city.getAttribute('data-add')
            if (isAdd) {
              city.setAttribute('data-add', '')
            }else{
               onAddData(e, city)
               city.setAttribute('data-add', 'true')
            }
           };
        }
      }
    }
    isModalOpen = true;
  }
};

city.onclick = onShowModal;
