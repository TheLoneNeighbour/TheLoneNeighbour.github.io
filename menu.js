document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.querySelector(".menu-toggle");
    var navList = document.querySelector(".nav-list");
  
    menuToggle.addEventListener("click", function() {
      navList.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", menuToggle.getAttribute("aria-expanded") === "true" ? "false" : "true");
    });
  });
  