let phone_menu = document.querySelector(".phone_menu");
let backupSlide = document.querySelector(".backupSlide");
let container = document.querySelector(".container");
let srchBtn = document.querySelector(".srchBtn");

let menu_phn = document.querySelector('.menu_phn');

//define the clickBtn function
// function clickBtn(){
//     console.log(5 + 5);
// }

const clickBtn = () => {
  menu_phn.style.width = `70%`;
};
phone_menu.addEventListener("click", clickBtn);

backupSlide.onclick = () => {
  menu_phn.style.width = `0%`;
};

// this is the search box created
let search = document.createElement("div");
search.setAttribute("class", "search_box");
let inputData = document.createElement("input");
inputData.setAttribute("placeholder", "type to search...");
inputData.setAttribute("class", "srchInput");
let crossIcon = document.createElement("i");
crossIcon.setAttribute("class", "fa fa-times");
crossIcon.setAttribute("id", "crossSrch");
search.appendChild(inputData);
search.appendChild(crossIcon);

container.appendChild(search);

srchBtn.addEventListener("click", () => {
  search.style.right = `0%`;
});
crossIcon.addEventListener("click", () => {
  search.style.right = `-40%`;
});

// let form_control = document.querySelectorAll(".form_control");
// form_control.forEach((element) => {
//   element.addEventListener("click", () => {
//     element.style.transform = `translateY(-10px)`;
//   });
// });

let left_social_item = document.querySelectorAll(".left_social_item i");
left_social_item.forEach((element) => {
  element.classList.remove("showBigIcon");
  element.addEventListener("click", () => {
    element.classList.add("showBigIcon");
  });
});

let playVideo = document.querySelector(".playVideo");
let pauseIcon = document.querySelector(".playVideo i");
let video = document.querySelector(".video video");

let statePlay = false;

const playData = () => {
  video.play();
  pauseIcon.classList.remove("fa-play");
  pauseIcon.classList.add("fa-pause");
};
const pauseData = () => {
  video.pause();
  pauseIcon.classList.add("fa-play");
  pauseIcon.classList.remove("fa-pause");
};

playVideo.addEventListener("click", (eventTask) => {
  if (statePlay === false) {
    playData();
    statePlay = true;
  } else if (statePlay === true) {
    pauseData();
    statePlay = false;
  }
});

video.addEventListener("ended", () => {
  pauseData();
  statePlay = false;
});

let scroll_top = document.querySelector(".scroll_top");
scroll_top.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    scroll_top.style.display = "block";
  } else {
    scroll_top.style.display = "none";
  }
});
