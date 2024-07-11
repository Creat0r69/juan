// document.getElementById("presentYear").innerHTML = new Date().getFullYear();

$(function () {
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= 200) {
      $("header").addClass("header-sticky");
      $(".sticky-nav").addClass("d-md-flex");
      $(".social-icons-wrapper").addClass("d-md-none");
    } else {
      $("header").removeClass("header-sticky");
      $(".sticky-nav").removeClass("d-md-flex");
      $(".social-icons-wrapper").removeClass("d-md-none");
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});

// Loader fade out-----------------------

$(document).ready(function () {
  $(".loader-wrapper").fadeOut("slow");
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      links.forEach(function (item) {
        item.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
});
