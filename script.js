document.getElementById("hamBtn").addEventListener("click", () => {
  document.getElementById("links").classList.add("link-show");
});

document.getElementById("hamBtnClose").addEventListener("click", () => {
  document.getElementById("links").classList.remove("link-show");
});

document.getElementById("mobile-menu").addEventListener("click", () => {
  document.getElementById("links").classList.remove("link-show");
});
