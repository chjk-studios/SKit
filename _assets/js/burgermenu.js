  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("open");
    const closeBtn = document.getElementById("close");
    const navMenu = document.querySelector(".navbarmenu");

    // Show the menu when "open" is clicked
    openBtn.addEventListener("click", function () {
      navMenu.style.display = "flex";
      openBtn.style.display = "none"; // hide open button when menu is shown
    });

    // Hide the menu when "close" is clicked
    closeBtn.addEventListener("click", function () {
      navMenu.style.display = "none";
      openBtn.style.display = "block"; // show open button again
    });
  });