var orderings = ["-added", "-metacritic", "-rating", "-released", "-updated"];
var replacements = {
  "-added": "Most Popular",
  "-metacritic": "Top Rated",
  "-rating": "Highest Rated",
  "-released": "Newest Releases",
  "-updated": "Newest Updated",
};
var MY_API_KEY = "1c6fb51e9d0c417ba4f34ffe358648f2";

import { createNavbar, appendGames } from "./utils.js";

function getGame(ordering) {
  return fetch(
    `https://api.rawg.io/api/games?key=${MY_API_KEY}&ordering=${ordering}&page_size=${ordering === "-rating" ? 40 : 20}&metacritic=60,100&exclude_additions=true&discover=true`,
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

async function loadGames() {
  const main = document.querySelector("[data-bs-spy='scroll']");
  const scrollspyNav = document.getElementById("scrollspy-nav");

  orderings.forEach((ordering) => {
    const section = document.createElement("section");
    section.id = `section_${ordering.replace("-", "")}`;

    const title = document.createElement("h2");
    title.textContent = replacements[ordering];

    const game_list = document.createElement("div");
    game_list.innerHTML = `<div class="spinner-border mx-auto" role="status"><span class="visually-hidden">Loading...</span></div>`;
    game_list.classList.add(
      "rounded",
      "p-4",
      "mb-4",
      "d-flex",
      "gap-4",
      "scrollable",
      "games-list",
    );
    game_list.id = `games_list_${ordering}`;

    section.appendChild(title);
    section.appendChild(game_list);
    main.appendChild(section);

    const li = document.createElement("li");
    li.classList.add("nav-item");
    li.innerHTML = `<a class="nav-link" href="#${section.id}">${replacements[ordering]}</a>`;
    scrollspyNav.appendChild(li);
  });

  var results = await Promise.all(orderings.map(getGame));

  orderings.forEach((ordering, i) => {
    const games_list = document.getElementById(`games_list_${ordering}`);
    games_list.innerHTML = "";
    if (ordering === "-rating")
      results[i].results = results[i].results
        .filter(
          (result, idx, arr) =>
            result.ratings.reduce((acc, curr) => (acc += curr.count), 0) >= 100,
        )
        .slice(0, 20);
    console.log(results[i].results);
    appendGames(results[i].results, games_list);
  });

  new bootstrap.ScrollSpy(document.body, {
    target: "#scrollspy-nav",
    offset: 80,
  });
}

createNavbar();
await loadGames();
