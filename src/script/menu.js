export default function HideMenu() {
  const headerNavBtn = document.querySelector(".menu-btn");
  const crossbtn = document.querySelector(".make-hide");
  const headerMenu = document.querySelector(".position-absolute");
  headerNavBtn.addEventListener("click", function () {
    headerMenu.classList.add("display-flex");
  });

  crossbtn.addEventListener("click", function () {
    headerMenu.classList.remove("display-flex");
  });
}
