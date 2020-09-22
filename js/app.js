const toggleOpen = document.querySelector("[data-open]");
const showIcons = document.querySelector(".social-icons");
const toggleClose = document.querySelector("[data-close]");
const fillClr = document.querySelector('path');


//this function will keep the classes in sync on data-open and data-close
const changeBtnAndIconClr = () => {
  fillClr.classList.toggle("changeIconClr");
  toggleOpen.classList.toggle("changeBtnClr");
};

toggleOpen.addEventListener("click", () => {
  changeBtnAndIconClr();
  showIcons.classList.toggle("fromBottom");
});

toggleClose.addEventListener("click", () => {
  changeBtnAndIconClr();
  showIcons.classList.toggle("fromBottom");
});
