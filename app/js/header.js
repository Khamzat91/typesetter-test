let city = document.querySelector(".header__inner-top__city-location");
let modal = document.querySelector(".header__inner-top__city-modal");
let clearInput = document.querySelector(
  ".header__inner-top__city-modal__clear"
);
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

const onShowModal = () => {
  modal.classList.toggle("toggle");
};
city.onclick = onShowModal;
