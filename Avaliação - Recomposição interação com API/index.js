const profileImage = document.querySelector("#img");
const names = document.querySelector("#name");
const informacao = document.querySelector("#description");
const occupation = document.querySelector("#prof");

window.addEventListener("DOMContentLoaded", () => {
  fetchData();
  fetchDato();
});

async function fetchData() {
  await fetch("https://api.github.com/users/vinixhq")
  .then((response) => response.json())
  .then((data) => {
    profileImage.setAttribute("src", data.avatar_url);
    occupation.innerHTML = data.company;
    names.innerHTML = data.name;
    description.innerHTML = data.bio;
  });
}

const followers = document.querySelector("#box-followers");
const photoFollowers = document.querySelector("#follow-img");
const follower = document.querySelector("#follow-name");

async function fetchDato() {
  await fetch("https://api.github.com/users/vinixhq/followers")
    .then((response) => response.json())
    .then((follow) => {
      follow.map((item) => {
        followers.innerHTML += `
            <div class = "images">
              <img id="follow-img" src="${item.avatar_url}" alt="">
              <p id="followers">${item.login}</p>
            </div>
          `;
      });
    });
}