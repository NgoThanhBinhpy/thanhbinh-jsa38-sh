// const url = "https://pokeapi.co/api/v2/generation/3/";
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

const options = { method: "GET", headers: { accept: "application/json" } };
fetch("https://api.themoviedb.org/3/account/null", options)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
