// document.addEventListener("scroll", () => {
//     const header = document.querySelector('header');
//     if (window.scrollY > 0) {
//         header.classList.add("scrolled");
//     }
//     else {
//         header.classList.remove("scrolled");
//     }

// })
let navbar = document.getElementsByClassName("navbar");
let x = 0;
function backgroundcolor() {
  if (x > 0) {
    navbar.style.backgroundColor = "black";
  } else {
    navbar.style.backgroundColor = "white";
  }
}
