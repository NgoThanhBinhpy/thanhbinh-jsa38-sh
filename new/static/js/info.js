import {
  appendGames,
  showToast,
  getCurrentUser,
  getWishlistAndFavourites,
} from "./utils.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
if (!id?.trim()) {
  window.location.href = "./index.html";
}
const MY_API_KEY = "1c6fb51e9d0c417ba4f34ffe358648f2";

async function getGameInfo(id) {
  return await fetch(`https://api.rawg.io/api/games/${id}?key=${MY_API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

async function getSameSeriesGames(id) {
  return await fetch(
    `https://api.rawg.io/api/games/${id}/game-series?key=${MY_API_KEY}`,
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

async function getDLCsOfGame(id) {
  return await fetch(
    `https://api.rawg.io/api/games/${id}/additions?key=${MY_API_KEY}`,
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

async function getSamePublisherGames(publishers) {
  return await fetch(
    `https://api.rawg.io/api/games?publishers=${publishers.join(",")}&key=${MY_API_KEY}`,
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    });
}

async function getSameDeveloperGames(developers) {
  return await fetch(
    `https://api.rawg.io/api/games?developers=${developers.join(",")}&key=${MY_API_KEY}`,
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    });
}

function setupWishlistFavourite(gameInfo) {
  const session = JSON.parse(sessionStorage.getItem("user"));
  const wishlistBtn = document.getElementById("wishlist-btn");
  const favouriteBtn = document.getElementById("favourite-btn");
  const gameData = {
    id: gameInfo.id,
    name: gameInfo.name,
    background_image: gameInfo.background_image,
  };

  const userProfile = getWishlistAndFavourites();
  console.log(userProfile);
  if (!userProfile[0]) window.location.href = "./signin.html";

  const inWishlist = userProfile[1].find((g) => g.id === gameInfo.id);
  const inFavourites = userProfile[2].find((g) => g.id === gameInfo.id);

  if (inWishlist) {
    wishlistBtn.innerHTML = `<i class="fa-solid fa-bookmark me-1"></i> Wishlisted`;
    wishlistBtn.classList.replace("btn-outline-light", "btn-light");
  }
  if (inFavourites) {
    favouriteBtn.innerHTML = `<i class="fa-solid fa-heart me-1"></i> Favourited`;
    favouriteBtn.classList.replace("btn-outline-light", "btn-light");
  }

  wishlistBtn.addEventListener("click", () => {
    const idx = userProfile[1].findIndex((g) => g.id === gameInfo.id);
    if (idx === -1) {
      userProfile[1].push(gameData);
      wishlistBtn.innerHTML = `<i class="fa-solid fa-bookmark me-1"></i> Wishlisted`;
      wishlistBtn.classList.replace("btn-outline-light", "btn-light");
      showToast("success", `${gameInfo.name} added to wishlist!`);
    } else {
      userProfile[1].splice(idx, 1);
      wishlistBtn.innerHTML = `<i class="fa-regular fa-bookmark me-1"></i> Add to Wishlist`;
      wishlistBtn.classList.replace("btn-light", "btn-outline-light");
      showToast("danger", `${gameInfo.name} removed from wishlist!`);
    }
    localStorage.setItem(userProfile[0][0], JSON.stringify(userProfile[0][1]));
  });

  favouriteBtn.addEventListener("click", () => {
    const idx = userProfile[2].findIndex((g) => g.id === gameInfo.id);
    if (idx === -1) {
      userProfile[2].push(gameData);
      favouriteBtn.innerHTML = `<i class="fa-solid fa-heart me-1"></i> Favourited`;
      favouriteBtn.classList.replace("btn-outline-light", "btn-light");
      showToast("success", `${gameInfo.name} added to favourites!`);
    } else {
      userProfile[2].splice(idx, 1);
      favouriteBtn.innerHTML = `<i class="fa-regular fa-heart me-1"></i> Add to Favourites`;
      favouriteBtn.classList.replace("btn-light", "btn-outline-light");
      showToast("danger", `${gameInfo.name} removed from favourites!`);
    }
    localStorage.setItem(userProfile[0][0], JSON.stringify(userProfile[0][1]));
  });

  window.addEventListener("storage", (e) => {
    const userObj = getCurrentUser();
    const inWishlist = userObj[1].wishlist.find((g) => g.id === gameInfo.id);
    const inFavourites = userObj[1].favourites.find(
      (g) => g.id === gameInfo.id,
    );
    if (inWishlist) {
      wishlistBtn.innerHTML = `<i class="fa-solid fa-bookmark me-1"></i> Wishlisted`;
      wishlistBtn.classList.replace("btn-outline-light", "btn-light");
    } else {
      wishlistBtn.innerHTML = `<i class="fa-regular fa-bookmark me-1"></i> Add to Wishlist`;
      wishlistBtn.classList.replace("btn-light", "btn-outline-light");
    }
    if (inFavourites) {
      favouriteBtn.innerHTML = `<i class="fa-solid fa-heart me-1"></i> Favourited`;
      favouriteBtn.classList.replace("btn-outline-light", "btn-light");
    } else {
      favouriteBtn.innerHTML = `<i class="fa-regular fa-heart me-1"></i> Add to Favourites`;
      favouriteBtn.classList.replace("btn-light", "btn-outline-light");
    }
  });
}

async function displayGameInfo() {
  const color_overlay = document.querySelector(".color-overlay");
  const game_img = document.createElement("img");
  const value = ["name", "released", "metacritic", "playtime", "website"];
  const map_value = ["genres", "publishers", "developers", "tags"];
  const map_value_2 = ["platforms", "stores"];
  const game_description = document.getElementById("description");
  const description_container = document.querySelector(".description");
  const des_expand_btn = document.getElementById("des_btn");
  const rating_containers = document.getElementById("rating-containers");
  const rating_counters = document.getElementById("rating-counters");
  const platforms_container = document.getElementById("platforms");
  const metacritic_score = document.getElementById("metacritic");
  const age_rating = document.getElementById("esrb_rating");
  const games_in_series = document.getElementById("games_in_series");
  const dlcs_container = document.getElementById("DLCs");
  const texts = Array.from(document.querySelectorAll("div , p , button"));
  texts.forEach((el) => {
    el.classList.add("placeholder", "placeholder-glow", "disable");
  });
  // api logic
  const [gameInfo, sameSeriesListOfGames, dlcsOfGame] = await Promise.all([
    getGameInfo(id),
    getSameSeriesGames(id),
    getDLCsOfGame(id),
  ]);

  texts.forEach((el) => {
    el.classList.remove("placeholder", "placeholder-glow", "disable");
  });
  setupWishlistFavourite(gameInfo);

  value.forEach((curr) => {
    const el = document.getElementById(curr);
    const data = gameInfo[`${curr}`];
    if (data) el.textContent = data;
    else el.textContent = `No ${curr} data avaliable`;
  });

  if (!gameInfo.playtime) document.querySelector(".playtime").remove();

  map_value.forEach((curr) => {
    const el = document.getElementById(curr);
    const data = gameInfo[`${curr}`];
    if (data && data.length > 0)
      el.textContent = data.map((i) => i.name).join(", ");
    else el.textContent = `No ${curr} data avaliable`;
  });

  map_value_2.forEach((curr) => {
    const el = document.getElementById(curr);
    const data = gameInfo[`${curr}`];
    if (data && data.length > 0)
      data.forEach((i, idx, arr) => {
        let a = document.createElement("a");
        a.innerHTML = `<a class="text" href="./explore.html?${curr}=${i[`${curr.slice(0, -1)}`].id}&name=${i[`${curr.slice(0, -1)}`].name}">${i[`${curr.slice(0, -1)}`].name}<a>`;
        a = a.firstChild;
        el.appendChild(a);
        if (idx != arr.length - 1) el.innerHTML += ", ";
      });
    else el.textContent = `No ${curr} data avaliable`;
  });

  //esrb rating
  if (gameInfo.esrb_rating) {
    switch (gameInfo.esrb_rating.name) {
      case "Everyone":
        age_rating.textContent = "Everyone";
        break;
      case "Everyone 10+":
        age_rating.textContent = "10+ Everyone";
        break;
      case "Teen":
        age_rating.textContent = "13+ Teen";
        break;
      case "Mature":
        age_rating.textContent = "17+ Mature";
        break;
      case "Adults Only":
        age_rating.textContent = "18+ Adults Only";
        break;
    }
  } else age_rating.textContent = "No age rating data avaliable";

  //game series
  if (sameSeriesListOfGames.count > 1) {
    sameSeriesListOfGames.results.forEach((game, idx, arr) => {
      let a = document.createElement("a");
      a.innerHTML = `<a class="text" target="_blank" href="./info.html?id=${game.id}">${game.name}<a>`;
      a = a.firstChild;
      console.log(a);
      games_in_series.appendChild(a);
      if (idx != arr.length - 1) games_in_series.innerHTML += ", ";
    });
  } else games_in_series.textContent = "No other games in the series";

  //game DLC's and editions
  if (dlcsOfGame.count > 0) {
    console.log(dlcsOfGame.results);
    dlcsOfGame.results.forEach((game, idx, arr) => {
      let a = document.createElement("a");
      a.innerHTML = `<a class="text" target="_blank" href="./info.html?id=${game.id}">${game.name}<a>`;
      a = a.firstChild;
      dlcs_container.appendChild(a);
      if (idx != arr.length - 1) dlcs_container.innerHTML += ", ";
    });
  } else dlcs_container.textContent = "No DLC's or editions available";

  //metacritic score color
  if (/^\d+$/.test(metacritic_score.textContent)) {
    metacritic_score.style.aspectRatio = "1/1";
    if (gameInfo.metacritic > 75) {
      metacritic_score.style.color = "#6dc849";
      metacritic_score.style.border = "1px solid #6dc849";
    } else if (gameInfo.metacritic > 50) {
      metacritic_score.style.color = "#ffd700";
      metacritic_score.style.border = "1px solid #ffd700";
    } else {
      metacritic_score.style.color = "rgb(255, 0, 0)";
      metacritic_score.style.border = "1px solid rgb(255, 0, 0)";
    }
  } else metacritic_score.classList.add("text");

  //game rating logic
  if (gameInfo.ratings && gameInfo.ratings.length > 0) {
    gameInfo.ratings.forEach((rating, idx, arr) => {
      const rating_container = document.createElement("div");
      rating_container.classList.add(rating.title);
      if (arr.length == 1) rating_container.classList.add(`rounded`);
      else {
        switch (idx) {
          case 0:
            rating_container.classList.add("rounded-start");
            break;
          case arr.length - 1:
            rating_container.classList.add("rounded-end");
        }
      }
      rating_container.style.width = rating.percent + "%";
      rating_container.style.height = "75px";
      console.log(rating_container);
      rating_containers.appendChild(rating_container);
      const rating_counter = document.createElement("div");
      rating_counter.innerHTML = `<div
            class="d-flex rounded-pill border rating-counter gap-2 align-items-center p-1"
          >
            <div class="${rating.title} rounded-circle"></div><span class="text">${rating.title}</span><br/><span class="text3">${rating.count}</span>
          </div>`;
      rating_counters.appendChild(rating_counter);
    });
  }

  //description logic
  des_expand_btn.textContent = "Read More";
  des_expand_btn.classList.add("btn", "btn-primary", "my-2");
  if (gameInfo.description_raw.length > 580) {
    game_description.textContent =
      gameInfo.description_raw.slice(0, 580) + "...";
    description_container.appendChild(des_expand_btn);
    des_expand_btn.addEventListener("click", () => {
      if (des_expand_btn.textContent === "Read More") {
        game_description.innerHTML = gameInfo.description;
        des_expand_btn.textContent = "Read Less";
      } else {
        game_description.textContent =
          gameInfo.description_raw.slice(0, 580) + "...";
        des_expand_btn.textContent = "Read More";
      }
      if (color_overlay) {
        const heights = Array.from(document.querySelectorAll(".info")).map(
          (c) => c.offsetHeight,
        );
        document.getElementById("info-games").style.top =
          `${Math.max(...heights) > color_overlay.offsetHeight ? Math.max(...heights) - color_overlay.offsetHeight : 0}px`;
      } else {
        const heights = Array.from(document.querySelectorAll(".info")).map(
          (c) => c.offsetHeight,
        );
        document.getElementById("info-games").style.top =
          `${Math.max(...heights)}px`;
      }
    });
  } else game_description.innerHTML = gameInfo.description;

  // img and overlay logic
  if (gameInfo.background_image) {
    game_img.classList.add("w-100", "h-100", "object-fit-cover");
    document.body.prepend(game_img);
    game_img.onload = () => {
      color_overlay.style.height = `${game_img.offsetHeight}px`;
      const heights = Array.from(document.querySelectorAll(".info")).map(
        (c) => c.offsetHeight,
      );
      document.getElementById("info-games").style.top =
        `${Math.max(...heights) > color_overlay.offsetHeight ? Math.max(...heights) - color_overlay.offsetHeight : 0}px`;
    };
    game_img.src = gameInfo.background_image;
  } else {
    game_img.style.display = "none";
    color_overlay.style.display = "none";
    document.body.style.background = "#1a1a1a";
    const heights = Array.from(document.querySelectorAll(".info")).map(
      (c) => c.offsetHeight,
    );
    document.getElementById("info-games").style.top =
      `${Math.max(...heights)}px`;
  }

  //load games
  const sameDevsGames = await getSameDeveloperGames(
    gameInfo.developers.map((dev) => dev.slug),
  );
  const samePubsGames = await getSamePublisherGames(
    gameInfo.publishers.map((pub) => pub.slug),
  );
  appendGames(
    sameDevsGames.results
      .map((game) => (game.slug === gameInfo.slug ? undefined : game))
      .filter(Boolean),
    document.getElementById("same-developer-list"),
  );
  appendGames(
    samePubsGames.results
      .map((game) => (game.slug === gameInfo.slug ? undefined : game))
      .filter(Boolean),
    document.getElementById("same-publisher-list"),
  );
}

displayGameInfo();
