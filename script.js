$("#hamBtn").click(() => {
  $("header").slideUp();
  $(".links").delay(1000).slideDown(1000);
});
$("#hamBtnClose").click(() => {
  $(".links").slideUp(1000);
  $("header").delay(1000).slideDown(2500);
});
