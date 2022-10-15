function myFunction(x) {
    x.classList.toggle("change");
  }

  let hamburgerMenu = document.querySelector(".hamburger-icon");
  let menuList = document.querySelector('.menu-list')
  hamburgerMenu.addEventListener("click", () => {
    menuList.classList.toggle('menu-list-show');
  })