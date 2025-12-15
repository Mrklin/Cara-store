const close = document.getElementById("close");
const open = document.getElementById("open");
const nav = document.getElementById("nav");


if (open) {
  open.addEventListener("click", () => {
    nav.classList.add("translate-x-0");
    nav.classList.remove("translate-x-full");
    // close.classList.remove("hidden")
    // close.classList.add("block") 
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("translate-x-0");
    nav.classList.add("translate-x-full");
    // close.classList.remove("block")
    // close.classList.add("hidden")
  });
}