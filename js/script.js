const rightSideBar = document.querySelector(".right_sidebar");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  rightSideBar.classList.toggle("active");
  toggle.classList.toggle("active");
});
