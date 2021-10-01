let bar = document.querySelector(".bars");
let menuOpen = false;
let nav = document.querySelector("nav");
bar.addEventListener("click", function () {
  if (!menuOpen) {
    bar.classList.add("open");
    menuOpen = true;
    nav.classList.add("open");
  }else {
    bar.classList.remove("open");
    menuOpen = false;
    nav.classList.remove("open")
  }
})
let lastScrollTop = 0;
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  let scrollTop = this.window.scrollY || this.document 
  .documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top= "-80px";
    if (nav.classList.contains("open")) {
      header.style.top= "0px";
    }
  }else {
    header.style.top= "0px";
  }
  lastScrollTop = scrollTop;
})
let btn = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 800) {
    btn.style.display= "block"
  }else {
    btn.style.display= "none"
  }
})
btn.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  })
})