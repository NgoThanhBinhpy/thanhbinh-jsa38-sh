export function createNavbar() {
  if (!getCurrentUser) {
    window.location.href = "./signin.html";
  }
  var Navbar = document.createElement("div");
  Navbar.innerHTML = `<nav
  class="navbar navbar-expand-lg px-3 position-sticky top-0"
  style="z-index: 1060"
>
  <div class="container-fluid">
    <a class="navbar-brand" href="#" draggable="false">
      <i class="fa-solid fa-vault me-2"></i>GameVault
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto gap-1 mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link rounded px-3" href="./index.html"
            ><i class="fa-solid fa-house me-1"></i> Home</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link rounded px-3" href="./collection.html">
            <i class="fa-solid fa-layer-group me-1"></i> Collection
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            <i class="fa-solid fa-compass me-1"></i> Explore
          </a>
          <ul class="dropdown-menu">
            <li class="dropstart">
              <a
                class="dropdown-item dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i class="fa-solid fa-layer-group fa-xs me-1"></i> Genres
              </a>
              <ul class="dropdown-menu dropdown-menu-start">
                <div class="row row-cols-2 g-1 dropdown-content"></div>
              </ul>
            </li>
            <li class="dropstart">
              <a
                class="dropdown-item dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i class="fa-solid fa-tag fa-xs me-1"></i> Tags
              </a>
              <ul class="dropdown-menu dropdown-menu-start">
                <div class="row row-cols-2 g-1 dropdown-content-1"></div>
              </ul>
            </li>
            <li class="dropstart">
              <a
                class="dropdown-item dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i class="fa-solid fa-desktop fa-xs me-1"></i> Platforms
              </a>
              <ul class="dropdown-menu dropdown-menu-start">
                <div class="row row-cols-2 g-1 dropdown-content-2"></div>
              </ul>
            </li>
            <li class="dropstart">
              <a
                class="dropdown-item dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i class="fa-solid fa-store fa-xs me-1"></i> Stores
              </a>
              <ul class="dropdown-menu dropdown-menu-start">
                <div class="row row-cols-2 g-1 dropdown-content-3"></div>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <form class="d-flex mt-2 mt-lg-0" role="search">
            <div class="input-group">
              <span
                class="input-group-text bg-white text-secondary border-start-0"
                id="search_btn"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                class="form-control search-input border-start-0"
                id="search_bar"
                type="search"
                placeholder="Search games…"
                aria-label="Search"
              />
            </div>
          </form>
        </li>
        <li class="nav-item" id="user-link">
          <a class="nav-link rounded px-3" href="./signin.html">
            <i class="fa-solid fa-right-to-bracket me-1"></i> Đăng nhập
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;
  Navbar = Navbar.firstChild;
  document.body.prepend(Navbar);
  const search_btn = document.getElementById("search_btn");
  const search_bar = document.getElementById("search_bar");
  search_btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = `./search.html?search_query=${search_bar.value}`;
  });
  search_bar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      window.location.href = `./search.html?search_query=${search_bar.value}`;
    }
  });
  const genres = [
    { name: "RPG", icon: "fa-solid fa-dragon", slug: "role-playing-games-rpg" },
    { name: "Indie", icon: "fa-solid fa-star" },
    { name: "Action", icon: "fa-solid fa-gun" },
    { name: "Casual", icon: "fa-solid fa-face-smile" },
    { name: "Puzzle", icon: "fa-solid fa-puzzle-piece" },
    { name: "Arcade", icon: "fa-solid fa-gamepad" },
    { name: "Racing", icon: "fa-solid fa-car" },
    { name: "Sports", icon: "fa-solid fa-futbol" },
    { name: "Family", icon: "fa-solid fa-house-chimney" },
    {
      name: "MMORPG",
      icon: "fa-solid fa-users",
      slug: "massively-multiplayer",
    },
    { name: "Shooter", icon: "fa-solid fa-crosshairs" },
    { name: "Strategy", icon: "fa-solid fa-chess" },
    { name: "Fighting", icon: "fa-solid fa-hand-fist" },
    { name: "Adventure", icon: "fa-solid fa-map" },
    { name: "Card Game", icon: "fa-solid fa-clone", slug: "card" },
    { name: "Simulation", icon: "fa-solid fa-city" },
    { name: "Platformer", icon: "fa-solid fa-person-running" },
    { name: "Educational", icon: "fa-solid fa-graduation-cap" },
    { name: "Board Games", icon: "fa-solid fa-dice", slug: "board-games" },
  ];
  const platforms = [
    { name: "PC", icon: "fa-solid fa-computer", id: 4 },
    { name: "iOS", icon: "fa-brands fa-apple", id: 3 },
    { name: "Android", icon: "fa-brands fa-android", id: 21 },
    { name: "Xbox One", icon: "fa-brands fa-xbox", id: 1 },
    { name: "PlayStation 5", icon: "fa-brands fa-playstation", id: 187 },
    { name: "PlayStation 4", icon: "fa-brands fa-playstation", id: 18 },
    { name: "Xbox Series X", icon: "fa-brands fa-xbox", id: 186 },
    { name: "Nintendo Switch", icon: "fa-solid fa-gamepad", id: 7 },
  ];
  const stores = [
    { name: "GOG", icon: "fa-solid fa-compact-disc", id: 5 },
    { name: "Steam", icon: "fa-brands fa-steam", id: 1 },
    { name: "App Store", icon: "fa-brands fa-apple", id: 4 },
    { name: "Epic Games", icon: "fa-solid fa-store", id: 11 },
    { name: "Xbox Store", icon: "fa-brands fa-xbox", id: 2 },
    { name: "Google Play", icon: "fa-brands fa-google-play", id: 8 },
    { name: "PlayStation Store", icon: "fa-brands fa-playstation", id: 3 },
  ];
  const tags = [
    { name: "2D", slug: "2d", icon: "fa-solid fa-square" },
    { name: "FPS", slug: "fps", icon: "fa-solid fa-crosshairs" },
    { name: "RPG", slug: "rpg", icon: "fa-solid fa-dragon" },
    { name: "Co-op", slug: "co-op", icon: "fa-solid fa-people-group" },
    { name: "Sci-fi", slug: "sci-fi", icon: "fa-solid fa-rocket" },
    { name: "Horror", slug: "horror", icon: "fa-solid fa-ghost" },
    { name: "Story Rich", slug: "story-rich", icon: "fa-solid fa-book-open" },
    {
      name: "Open World",
      slug: "open-world",
      icon: "fa-solid fa-earth-americas",
    },
    { name: "Cooperative", slug: "cooperative", icon: "fa-solid fa-handshake" },
    { name: "Multiplayer", slug: "multiplayer", icon: "fa-solid fa-users" },
    { name: "Steam Cloud", slug: "steam-cloud", icon: "fa-solid fa-cloud" },
    { name: "Atmospheric", slug: "atmospheric", icon: "fa-solid fa-wind" },
    { name: "First-Person", slug: "first-person", icon: "fa-solid fa-eye" },
    { name: "Third Person", slug: "third-person", icon: "fa-solid fa-person" },
    { name: "Singleplayer", slug: "singleplayer", icon: "fa-solid fa-user" },
    {
      name: "Great Soundtrack",
      slug: "great-soundtrack",
      icon: "fa-solid fa-music",
    },
    {
      name: "Steam Achievements",
      slug: "steam-achievements",
      icon: "fa-solid fa-trophy",
    },
    {
      name: "Steam Trading Cards",
      slug: "steam-trading-cards",
      icon: "fa-solid fa-clone",
    },
    {
      name: "Full Controller Support",
      slug: "full-controller-support",
      icon: "fa-solid fa-gamepad",
    },
    {
      name: "Partial Controller Support",
      slug: "partial-controller-support",
      icon: "fa-solid fa-gamepad",
    },
  ];
  createNavBarSection(
    document.querySelector(".dropdown-content"),
    genres,
    "genres",
    "slug",
  );
  createNavBarSection(
    document.querySelector(".dropdown-content-1"),
    tags,
    "tags",
    "slug",
  );
  createNavBarSection(
    document.querySelector(".dropdown-content-2"),
    platforms,
    "platforms",
    "id",
  );
  createNavBarSection(
    document.querySelector(".dropdown-content-3"),
    stores,
    "stores",
    "id",
  );
  checkLoginStatus(getCurrentUser()[1].name);
  updateCollectionCount();
}

/**
 *
 * @param {HTMLDivElement} section
 * @param {Array} sectionArr
 * @param {String} IdOrSlug
 * @param {String} Name
 */
function createNavBarSection(section, sectionArr, Name, IdOrSlug) {
  sectionArr.forEach((sectionObj) => {
    const section_item = document.createElement("div");
    section_item.classList.add("col");
    section_item.innerHTML = `<a class="dropdown-item text-wrap ps-2 pe-0" href="./explore.html?${Name}=${IdOrSlug === "id" ? sectionObj.id : sectionObj.slug || sectionObj.name.toLowerCase().replaceAll(" ", "-")}&name=${sectionObj.name}"><i class="${sectionObj.icon} fa-xs me-1"></i> ${sectionObj.name}</a>`;
    section.appendChild(section_item);
  });
}

export function updateCollectionCount() {
  const session = JSON.parse(sessionStorage.getItem("user"));
  if (!session) return;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("registrationData_")) {
      const data = JSON.parse(localStorage.getItem(key));
      if (data.name === session.name) {
        const wishlistCount = (data.wishlist || []).length;
        const favouritesCount = (data.favourites || []).length;
        const total = wishlistCount + favouritesCount;
        const collectionLink = document.querySelector(
          "a[href='./collection.html']",
        );
        if (!collectionLink) return;
        collectionLink.setAttribute("data-bs-toggle", "tooltip");
        collectionLink.setAttribute("data-bs-placement", "bottom");
        collectionLink.setAttribute(
          "title",
          `${wishlistCount} wishlisted · ${favouritesCount} favourited`,
        );
        new bootstrap.Tooltip(collectionLink);
        const existing = collectionLink.querySelector(".badge");
        if (existing) existing.remove();
        if (total > 0) {
          collectionLink.innerHTML += `<span class="badge bg-danger ms-1" style="font-size:0.65rem;">${total}</span>`;
        }
        break;
      }
    }
  }
}

/**
 * @param {Array} results
 * @param {HTMLDivElement} parent_el
 */
export function appendGames(results, parent_el, onRemove = null) {
  parent_el.innerHTML = "";
  results.forEach((game) => {
    const game_item = document.createElement("div");
    game_item.onclick = () => {
      window.open(`./info.html?id=${game.id}`, "_blank", "noopener,noreferrer");
    };
    game_item.target = "_blank";
    game_item.classList.add("game-card", "position-relative");
    game_item.innerHTML = `
      <div class="position-relative rounded">
        <img src="${game.background_image || ""}" alt="${game.name}" class="rounded"/>
        <div style="position:absolute; bottom:0; left:0; right:0; padding:30px 10px 10px; background:linear-gradient(transparent, rgba(0,0,0,0.85));">
          <h3 style="color:white; font-size:1rem; font-weight:600; margin:0;" class="text-truncate">${game.name}</h3>
        </div>
        ${onRemove ? `<button class="btn btn-danger btn-sm position-absolute top-0 end-0 m-1 remove-btn" style="z-index:2;"><i class="fa-solid fa-xmark"></i></button>` : `<div class="btn-group position-absolute end-0 top-0 m-1 z-2" role="group" aria-label="Basic mixed styles example"><button type="button" class="btn btn-success wishlist" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add to wishlist"><i class="m-1 fa-solid fa-bookmark"></i></button><button type="button" class="btn btn-success favourites" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add to favourites"><i class="m-1 fa-solid fa-heart"></i></button></div>`}
      </div>`;

    if (onRemove) {
      const removeBtn = game_item.querySelector(".remove-btn");
      removeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        onRemove(game.id, game_item);
      });
    } else {
      const wishlistBtn = game_item.querySelector(".wishlist");
      const favouritesBtn = game_item.querySelector(".favourites");
      const userProfile = getWishlistAndFavourites();
      const gameData = {
        id: game.id,
        name: game.name,
        background_image: game.background_image,
      };
      if (userProfile[1].find((curr) => curr.id === game.id)) {
        wishlistBtn.classList.replace("btn-success", "btn-danger");
        wishlistBtn.setAttribute("data-bs-title", "Remove from wishlist");
      }
      if (userProfile[2].find((curr) => curr.id === game.id)) {
        favouritesBtn.classList.replace("btn-success", "btn-danger");
        favouritesBtn.setAttribute("data-bs-title", "Remove from favourites");
      }

      wishlistBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const userProfile = getWishlistAndFavourites();
        const idx = userProfile[1].findIndex((g) => g.id === game.id);
        if (idx === -1) {
          userProfile[1].push(gameData);
          wishlistBtn.classList.replace("btn-success", "btn-danger");
          wishlistBtn.setAttribute("data-bs-title", "Remove from wishlist");
          console.log(userProfile);
          showToast("success", `${game.name} added to wishlist!`);
        } else {
          userProfile[1].splice(idx, 1);
          wishlistBtn.classList.replace("btn-danger", "btn-success");
          wishlistBtn.setAttribute("data-bs-title", "Add to wishlist");
          console.log(userProfile, idx);
          showToast("danger", `${game.name} removed from wishlist!`);
        }
        localStorage.setItem(
          userProfile[0][0],
          JSON.stringify(userProfile[0][1]),
        );
        updateCollectionCount();
      });

      favouritesBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const userProfile = getWishlistAndFavourites();
        const idx = userProfile[2].findIndex((g) => g.id === game.id);
        if (idx === -1) {
          userProfile[2].push(gameData);
          favouritesBtn.classList.replace("btn-success", "btn-danger");
          favouritesBtn.setAttribute("data-bs-title", "Remove from favourites");
          console.log(userProfile);
          showToast("success", `${game.name} added to favourites!`);
        } else {
          userProfile[2].splice(idx, 1);
          favouritesBtn.classList.replace("btn-danger", "btn-success");
          favouritesBtn.setAttribute("data-bs-title", "Add to favourites");
          console.log(userProfile, idx);
          showToast("danger", `${game.name} removed from favourites!`);
        }
        localStorage.setItem(
          userProfile[0][0],
          JSON.stringify(userProfile[0][1]),
        );
        updateCollectionCount();
      });

      window.addEventListener("storage", (e) => {
        const userProfile = getWishlistAndFavourites();
        if (userProfile[1].find((curr) => curr.id === game.id)) {
          wishlistBtn.classList.replace("btn-success", "btn-danger");
          wishlistBtn.setAttribute("data-bs-title", "Remove from wishlist");
        } else {
          wishlistBtn.classList.replace("btn-danger", "btn-success");
          wishlistBtn.setAttribute("data-bs-title", "Add to wishlist");
        }
        if (userProfile[2].find((curr) => curr.id === game.id)) {
          favouritesBtn.classList.replace("btn-success", "btn-danger");
          favouritesBtn.setAttribute("data-bs-title", "Remove from favourites");
        } else {
          favouritesBtn.classList.replace("btn-danger", "btn-success");
          favouritesBtn.setAttribute("data-bs-title", "Add to favourites");
        }
      });
    }

    parent_el.appendChild(game_item);
    const tooltipTriggerList = parent_el.querySelectorAll(
      '[data-bs-toggle="tooltip"]',
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
    );
  });

  Array.from(parent_el.querySelectorAll("img")).forEach((img) => {
    img.addEventListener("error", () => {
      img.outerHTML = `<div class="game-placeholder" style="width:100%;height:225px;display:flex;align-items:center;justify-content:center;background:#222;color:#555;"><i class="fa-solid fa-gamepad fa-2xl"></i></div>`;
    });
  });
}

export function checkLoginStatus(name) {
  const userLink = document.getElementById("user-link");
  if (!userLink) return;
  userLink.innerHTML = `<div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i class="fa-solid fa-user me-1"></i>User
    </button>
    <ul class="dropdown-menu dropdown-menu-end">
      <li>
        <button class="btn btn-outline-danger btn-sm logoutBtn">
          <i class="fa-solid fa-right-from-bracket me-1"></i>Log out
        </button>
      </li>
      <li>
        <a class="dropdown-item" href="./user.html"
          ><i class="fa-solid fa-user me-1"></i
        >${name}</a>
      </li>
    </ul>
  </div>`;

  userLink.querySelector(".logoutBtn").addEventListener("click", () => {
    sessionStorage.removeItem("user");
    let registrationData = getRegistrationData();
    registrationData.forEach(([key, value]) => {
      value.keepSignIn = false;
      localStorage.setItem(key, JSON.stringify(value));
    });
    window.location.href = "./signin.html";
  });
}

export function getRegistrationData() {
  return Object.entries(localStorage)
    .filter(([key]) => key.startsWith("registrationData_"))
    .map(([key, value]) => [key, JSON.parse(value)]);
}

export function showToast(type, message) {
  const toast = document.getElementById(
    `toast${type.charAt(0).toUpperCase() + type.slice(1)}`,
  );
  const toastBody = document.getElementById(
    `toast${type.charAt(0).toUpperCase() + type.slice(1)}Body`,
  );
  if (!toast || !toastBody) return;
  toastBody.textContent = message;
  document.querySelectorAll(".toast").forEach((t) => (t.style.zIndex = 1055));
  toast.style.zIndex = 1056;
  new bootstrap.Toast(toast).show();
}

export function getCurrentUser() {
  const session = JSON.parse(sessionStorage.getItem("user"));
  if (session) {
    return [
      session.originalKey,
      JSON.parse(localStorage.getItem(session.originalKey)),
    ];
  }
  return getRegistrationData().find(([key, value]) => value.keepSignIn);
}

export function getWishlistAndFavourites() {
  const currentUser = getCurrentUser();
  if (!currentUser[1].wishlist) currentUser[1].wishlist = [];
  if (!currentUser[1].favourites) currentUser[1].favourites = [];
  const wishlist = currentUser[1].wishlist;
  const favourites = currentUser[1].favourites;
  return [currentUser, wishlist, favourites];
}
