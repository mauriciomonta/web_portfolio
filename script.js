document.getElementById("hamBtn").addEventListener("click", () => {
  document.getElementById("links").classList.add("link-show");
});

document.getElementById("hamBtnClose").addEventListener("click", () => {
  document.getElementById("links").classList.remove("link-show");
});

document.getElementById("mobile-menu").addEventListener("click", () => {
  document.getElementById("links").classList.remove("link-show");
});

document.getElementById("project-1").addEventListener("click", () => {
  document.getElementById("modal-popup").classList.add("popup-visible");
  setTimeout(function () {
    document.getElementById("modal-popup").classList.add("popup-transparency");
  }, 300);
});

document.getElementById("close-popup").addEventListener("click", () => {
  document.getElementById("modal-popup").classList.remove("popup-transparency");
  setTimeout(function () {
    document.getElementById("modal-popup").classList.remove("popup-visible");
  }, 300);
});
