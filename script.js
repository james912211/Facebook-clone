let settingsmenu = document.querySelector(".settings-menu");

function settingsMenuToggle() {
  settingsmenu.classList.toggle("settings-menu-height");
}

let darkBtn = document.querySelector("#dark-btn");

let imgHome = document.querySelector(".home2");
let imgVideo = document.querySelector(".video2");
let imgShop = document.querySelector(".shop2");
let imgGroup = document.querySelector(".group2");
let imgGame = document.querySelector(".game2");

function darkBtnOnOff() {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (imgHome.src.includes("images/icons8-home-32.png")) {
    imgHome.src = "images/icons8-home-24.png";
  } else if ((imgHome.src = "images/icons8-home-24.png")) {
    imgHome.src = "images/icons8-home-32.png";
  }

  if (imgVideo.src.includes("images/icons8-video-24.png")) {
    imgVideo.src = "images/icons8-video2-24.png";
  } else if ((imgVideo.src = "images/icons8-video2-24.png.png")) {
    imgVideo.src = "images/icons8-video-24.png";
  }

  if (imgShop.src.includes("images/icons8-shop-24.png")) {
    imgShop.src = "images/icons8-shop2-24.png";
  } else if ((imgShop.src = "images/icons8-shop2-24.png")) {
    imgShop.src = "images/icons8-shop-24.png";
  }

  if (imgGroup.src.includes("images/icons8-group-32.png")) {
    imgGroup.src = "images/icons8-group2-32.png";
  } else if ((imgGroup.src = "images/icons8-group2-32.png")) {
    imgGroup.src = "images/icons8-group-32.png";
  }

  if (imgGame.src.includes("images/icons8-game-50.png")) {
    imgGame.src = "images/icons8-game2-50.png";
  } else if ((imgGame.src = "images/icons8-game2-50.png")) {
    imgGame.src = "images/icons8-game-50.png";
  }
}
imgHome.addEventListener("click", () => {});
