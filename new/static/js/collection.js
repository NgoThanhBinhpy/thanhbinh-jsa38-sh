import {
  createNavbar,
  appendGames,
  updateCollectionCount,
  getWishlistAndFavourites,
} from "./utils.js";
const userProfile = getWishlistAndFavourites();
if (!userProfile[0]) window.location.href = "./signin.html";
const userKey = userProfile[0][0];
const userData = userProfile[0][1];

const wishlist = userProfile[1];
const favourites = userProfile[2];
var wishlist_container = document.getElementById("wishlist-grid");
var favourites_container = document.getElementById("favourites-grid");

createNavbar();
function removeFromList(listName, gameId, cardEl) {
  userData[listName] = userData[listName].filter((g) => g.id !== gameId);
  localStorage.setItem(userKey, JSON.stringify(userData));
  cardEl.remove();
  if (userData[listName].length === 0) {
    document.getElementById(`${listName}-grid`).innerHTML =
      `<p class="text-muted">Your ${listName} is empty.</p>`;
  }
  updateCollectionCount();
}

if (wishlist.length > 0) {
  appendGames(wishlist, wishlist_container, (id, el) =>
    removeFromList("wishlist", id, el),
  );
} else {
  wishlist_container.innerHTML = `<p class="text-muted">Your wishlist is empty.</p>`;
}

if (favourites.length > 0) {
  appendGames(favourites, favourites_container, (id, el) =>
    removeFromList("favourites", id, el),
  );
} else {
  favourites_container.innerHTML = `<p class="text-muted">Your favourites is empty.</p>`;
}

window.addEventListener("storage", (e) => {
  const userProfile = getWishlistAndFavourites();
  if (userProfile[1].length > 0) {
    appendGames(userProfile[1], wishlist_container, (id, el) =>
      removeFromList("wishlist", id, el),
    );
  } else {
    wishlist_container.innerHTML = `<p class="text-muted">Your wishlist is empty.</p>`;
  }
  if (userProfile[2].length > 0) {
    appendGames(userProfile[2], favourites_container, (id, el) =>
      removeFromList("favourites", id, el),
    );
  } else {
    favourites_container.innerHTML = `<p class="text-muted">Your favourites is empty.</p>`;
  }
});
