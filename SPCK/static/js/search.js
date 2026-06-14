import { createNavbar, appendGames } from "./utils.js";

const params = new URLSearchParams(window.location.search);
const search_query = params.get("search_query");
const MY_API_KEY = "1c6fb51e9d0c417ba4f34ffe358648f2";

if (!search_query?.trim()) window.location.href = "./index.html";

let currentPage = 1;
let currentOrdering = "-added";

async function fetchGames(page, ordering) {
  const orderParam = ordering ? `&ordering=${ordering}` : "";
  const res = await fetch(
    `https://api.rawg.io/api/games?search=${search_query}&key=${MY_API_KEY}&page=${page}&page_size=20${orderParam}`,
  );
  return res.json();
}

async function loadGames(reset = false) {
  const grid = document.getElementById("games_list");
  const loadMoreBtn = document.getElementById("load-more-btn");
  const resultsCount = document.getElementById("results-count");

  if (reset) {
    currentPage = 1;
    grid.innerHTML = `<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>`;
    loadMoreBtn.style.display = "block";
  }

  const data = await fetchGames(currentPage, currentOrdering);
  resultsCount.textContent = `${data.count.toLocaleString()} results found`;
  if (reset) grid.innerHTML = "";
  appendGames(data.results, grid);

  if (!data.next) loadMoreBtn.style.display = "none";
}

document.getElementById("games_title").textContent =
  `Search results for "${search_query}"`;

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
