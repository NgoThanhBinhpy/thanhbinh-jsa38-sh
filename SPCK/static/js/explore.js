import { createNavbar, appendGames, MY_API_KEY } from "./utils.js";

const params = Object.fromEntries(new URLSearchParams(window.location.search));
const name = params.name;
const paramKey = Object.keys(params).find((k) => k !== "name");
if (!paramKey) {
  window.location.href = "./index.html";
}
const paramValue = params[paramKey];

let currentPage = 1;
let currentOrdering = "-added";
let totalCount = 0;

async function fetchGames(page, ordering) {
  const res = await fetch(
    `https://api.rawg.io/api/games?${paramKey}=${paramValue}&key=${MY_API_KEY}&page=${page}&page_size=20&ordering=${ordering}`,
  );
  return res.json();
}

async function getDetails() {
  return await fetch(
    `https://api.rawg.io/api/${paramKey}/${paramValue}?key=${MY_API_KEY}`,
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    });
}

async function loadGames(reset = false) {
  const grid = document.getElementById("games-grid");
  const loadMoreBtn = document.getElementById("load-more-btn");
  const resultsCount = document.getElementById("results-count");

  if (reset) {
    currentPage = 1;
    grid.innerHTML = `<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>`;
    loadMoreBtn.style.display = "block";
  }

  const data = await fetchGames(currentPage, currentOrdering);
  totalCount = data.count;
  resultsCount.textContent = `${totalCount.toLocaleString()} games found`;

  if (reset) grid.innerHTML = "";
  appendGames(data.results, grid);

  if (!data.next) loadMoreBtn.style.display = "none";
}

async function loadDetails() {
  const decription = document.getElementById("page-discription");
  const details = await getDetails();

  decription.innerHTML = details.description;
  document.body.style.cssText = `
    background-image: url('${details.image_background}');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  `;
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <div style="position:fixed; inset:0; background:rgba(255, 255, 255, 0.68); z-index:-1; pointer-events:none;"></div>
  `,
  );
}

const displayName =
  name ||
  paramValue.charAt(0).toUpperCase() + paramValue.slice(1).replaceAll("-", " ");
document.getElementById("page-title").textContent = `${displayName} Games`;
loadDetails();

document.getElementById("sort-select").addEventListener("change", (e) => {
  currentOrdering = e.target.value;
  loadGames(true);
});

document.getElementById("load-more-btn").addEventListener("click", () => {
  currentPage++;
  loadGames();
});

createNavbar();
loadGames(true);
