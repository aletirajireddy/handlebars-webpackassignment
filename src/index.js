import "./scss/style.scss";
const userTemplate = require("./userTemplate.hbs");

const api = "https://run.mocky.io/v3/3ed432e6-02a0-42b2-ab34-2aa8c580ead6";

const loadItems = async (url) => {
  const data = await fetch(url);
  const result = await data.json();
  return result;
};

loadItems(api).then((results) => {
  const targetEl = document.getElementById("results");
  targetEl.innerHTML = userTemplate({ results });

  targetEl.addEventListener("click", (event) => {
    event.preventDefault();
    const userItem = event.srcElement.closest(".user");
    if (userItem) {
      userItem.classList.toggle("active");
    }
  });
});
