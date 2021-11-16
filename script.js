document.getElementById("hamBtn").onclick = function () {
  $("header").slideUp();
  $(".links").delay(1000).slideDown(1000);
};

document.getElementById("hamBtnClose").onclick = function () {
  $(".links").slideUp(1000);
  $("header").delay(1000).slideDown(2500);
};

$("#downbtn").click(() => {
  console.log("touched");
});

document.getElementById("move-menu").onclick = function () {
  $(".links").slideUp(1000);
  $("header").delay(1000).slideDown(2500);
  console.log("test")
}




//Get the button:
$("#myBtn").hide();

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $("#myBtn").fadeIn();
  } else {
    $("#myBtn").fadeOut();
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*
$("#submit").click(() => {
  event.preventDefault();
});

$("a").click(() => {
  event.preventDefault();
});*/

document.getElementById("hamBtn").onclick = function () {
  console.log("working");
};
