document.addEventListener("scroll", () => {
  const navE = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navE.classList.add("scrolled");
  } else {
    navE.classList.remove("scrolled");
  }
});
